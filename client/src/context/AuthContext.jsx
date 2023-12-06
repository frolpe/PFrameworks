import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth.js";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [isAuthenticated, setisAuthenticated] = useState(false);

    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try {
            //console.log(values);
            // Convert age string to a number
            user.age = parseInt(user.age);
            //console.log(values);
            const res = await registerRequest(user);
            //console.log(res.data);
            setUser(res.data);
            setisAuthenticated(true);

        } catch (error) {
            //console.log(error.response);
            setErrors(error.response.data);
        }

    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            ///console.log(res);
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data);
            }
            setErrors(error.response.data.message);
        }
    }

    useEffect(() => {
        if (errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer);
        }
    }, [errors])


    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            isAuthenticated,    
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}