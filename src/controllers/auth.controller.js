import User from '../models/user.model.js';
import bcrypt from 'bcryptjs/dist/bcrypt.js';
import {createAccessToken} from '../libs/jwt.js';
import mongoose from "mongoose";


export const register = async (req, res) => {
    const {username, email, password, names, lastname, age} = req.body;
    //console.log(username, email, password, names, lastname, age);

    const idTheme = 1;

    try {

        const passHash = await bcrypt.hash(password, 10); //Creación de un hash para encriptar la contraseña.

        const newUser = new User({
            username, 
            password: passHash, 
            names,
            lastname,
            email, 
            age, 
            idTheme
        });
    
        const userSaved = await newUser.save();

        //Crear el token con la función importada al inicio y creada en jwt.js
        const token = await createAccessToken({id: userSaved._id});

        //Devolver al front la cookie con el token
        res.cookie('token', token); //Guardará el token en la cookie.
        //Devolver al front el json con los datos a utilizar
        res.json({
            id: userSaved._id, 
            username: userSaved.username, 
            email: email
        });
        
        console.log(newUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
};

export const login = async (req, res) => {
    const {email, password} = req.body;

    try {

        //Variable para verificar que exista el usuario
        const userFound = await User.findOne({email: email});

        //Validar el usuario
        if (!userFound) return res.status(400).json({message: "User not Found"});

        const isMatch = await bcrypt.compare(password, userFound.password);

        if(!isMatch) return res.status(400).json({message: "Incorrect password"});

        //Crear el token con la función importada al inicio y creada en jwt.js
        const token = await createAccessToken({id: userFound._id});

        //Devolver al front la cookie con el token
        //Devolver al front el json con los datos a utilizar
        res.cookie('token', token);

        res.json({
            id: userFound._id, 
            username: userFound.username, 
            email: userFound.email
        });

    } catch (error) {
        res.status(500).json({message: error.message});

    }
    
};

export const logout = (req, res) => { 
    res.cookie('token', "", {
        expires: new Date(0)
    }); 

    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);

    if(!userFound) return res.status(400).json({message: "User not found"});

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email, 
        names: userFound.names,
        lastnanem: userFound.lastname,
        age: userFound.age,
        idTheme: userFound.idTheme 
    });
};
