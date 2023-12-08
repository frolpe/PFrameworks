import { createContext, useContext, useState } from "react";
import { getUserRequest, getUsersRequest } from "../api/user";
//import { createSkillRequest, getSkillsRequest, deleteSkillRequest, getSkillRequest, updateSkillRequest } from "../api/skills";

const userContext = createContext();

export const useUser = () => {
    const context = useContext(userContext);

    if (!context) {
        throw new Error("Use userContext must be used within a userContext")
    }

    return context;
}

export function UserProvider({ children }) {
    const [users, setUsers] = useState([]);


    const getUsers = async () => {
        try {
            const res = await getUsersRequest();
            setUsers(res.data);
        } catch (error) {
            console.log(error);
        }

    }
    /*
        const createSkill = async(skill) => {
            const res = await createSkillRequest(skill);
            console.log(res);
        }
    
        const deleteSkill = async(id) =>{
            try {
                const res = await deleteSkillRequest(id);
                if (res.status === 204) setSkills(skills.filter(skill => skill._id != id));
            } catch (error) {
                console.log(error);
            }
        }*/

    const getUser = async (id) => {
        try {
            const res = await getUserRequest(id);
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    /*
    const updateSkill = async (id, skill) => {
        try {
            await updateSkillRequest(id, skill);    
        } catch (error) {
            console.log(error);
        }
    }*/

    return (
        <userContext.Provider
            value={{
                users,
                // createSkill,
                getUsers,
                //deleteSkill,
                getUser,
                // updateSkill,
            }}>
            {children}
        </userContext.Provider>
    )
}
