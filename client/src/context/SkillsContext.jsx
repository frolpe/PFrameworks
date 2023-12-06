import { createContext, useContext, useState } from "react";
import { createSkillRequest, getSkillsRequest, deleteSkillRequest } from "../api/skills";

const skillContext = createContext();

export const useSkill = () => {
    const context = useContext(skillContext);

    if(!context) {
        throw new Error("Use skillError must be used within a skillProvider")
    }

    return context;
}

export function SkillProvider({ children }){
    const [skills, setSkills] = useState([]);

    const getSkills = async () => {
        try {
            const res = await getSkillsRequest();
            setSkills(res.data);
        } catch (error) {
            console.log(error);
        }

    }

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

 
    }


    return ( 
        <skillContext.Provider 
        value={{
            skills,
            createSkill,
            getSkills,
            deleteSkill,
        }}>
            {children}
        </skillContext.Provider>
    )
}
