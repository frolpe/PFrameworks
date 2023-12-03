import User from '../models/user.model.js';


export const register = async (req, res) => {
    const {username, email, password, names, lastname, age} = req.body;
    //console.log(username, email, password, names, lastname, age);

    const idTheme = 1;

    try {
        const newUser = new User({
            username, 
            password, 
            names,
            lastname,
            email, 
            age, 
            idTheme
        });
    
        const userSaved = await newUser.save();
        res.json(userSaved);
        
        console.log(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al registrar usuario');

    }
    
};

export const login = (req, res) => res.send("login");

import mongoose from "mongoose";

