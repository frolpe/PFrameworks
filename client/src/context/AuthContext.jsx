import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth.js";
import Cookies from 'js-cookie';

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

    const [loading, setLoading] = useState(true);

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
            // ...
            setisAuthenticated(true)
        } catch (error) {
            if (error.response && Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            if (error.response && error.response.data && error.response.data.message) {
                setErrors(error.response.data.message);
            } else {
                setErrors("An error occurred"); // Manejar cualquier otro tipo de error
            }
        }
    }

    const logout = () => {
        Cookies.remove("token");
        setisAuthenticated(false);
        setUser(null);
    }

    useEffect(() => {
        if (errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer);
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin (){
            const cookies = Cookies.get()

            if(!cookies.token){
                setisAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }

            if (cookies.token){
                try {
                    const res = await verifyTokenRequest(cookies.token);
                    if (!res.data) {
                        setisAuthenticated(false);
                        setLoading(false);
                        return;
                    } 
    
                    setisAuthenticated(true);
                    setUser(res.data);
                    setLoading(false);

                } catch (error) {
                    setisAuthenticated(false)
                    setUser(null)
                    setLoading(false);

                }
            }
        }

        checkLogin();
    }, [])


    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            logout,
            loading,
            user,
            isAuthenticated,    
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}