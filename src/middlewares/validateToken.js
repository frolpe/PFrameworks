import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

//Utiliza un next para cambiar a la siguiente función sino terminar la acción.
export const authRequired = (req, res, next) => {
    
    const {token} = req.cookies;
    if (!token) 
        return res.status(401).json({message: "No token, authorization denied"});

        jwt.verify(token, TOKEN_SECRET, (err, user) => {
            if(err) return res.status(403).json({message: "Invalid token"}); 

            req.user = user; 

            next();
    });

    
};