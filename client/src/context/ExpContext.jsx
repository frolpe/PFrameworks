import { createContext, useContext, useState } from "react";
import {createExpRequest, getExpsRequest, deleteExpRequest, getExpRequest, updateExpRequest} from "../api/exp"

const expContext = createContext();

export const useExp = () => {
    const context = useContext(expContext);

    if(!context) {
        throw new Error("Use expError must be used within a expProvider")
    }

    return context;
}

export function ExpProvider({ children }){
    const [exps, setExps] = useState([]);

    const getExps = async () => {
        try {
            const res = await getExpsRequest();
            setExps(res.data);
        } catch (error) {
            console.log(error);
        }

    }

    const createExp = async(exp) => {
        const res = await createExpRequest(exp);
        console.log(res);
    }

    const deleteExp = async(id) =>{
        try {
            const res = await deleteExpRequest(id);
            if (res.status === 204) setExps(exps.filter(exp => exp._id != id));
        } catch (error) {
            console.log(error);
        }
    }

    const getExp = async (id) => {
        try {
            const res = await getExpRequest(id);
            return res.data;        
        } catch (error) {
            console.log(error);
        }
    }

    const updateExp = async (id, exp) => {
        try {
            await updateExpRequest(id, exp);    
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <expContext.Provider 
        value={{
            exps,
            createExp,
            getExps,
            deleteExp,
            getExp,
            updateExp,
        }}>
            {children}
        </expContext.Provider>
    )
}
