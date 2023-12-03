import User from '../models/user.model.js';
import bcrypt from 'bcryptjs/dist/bcrypt.js';
import {createAccessToken} from '../libs/jwt.js';

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

export const login = (req, res) => res.send("login");

import mongoose from "mongoose";

