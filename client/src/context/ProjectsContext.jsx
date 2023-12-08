import { createContext, useContext, useState } from "react";
import {createProjectRequest, getProjectsRequest, deleteProjectRequest, getProjectRequest, updateProjectRequest} from "../api/projects"

const projectContext = createContext();

export const useProject = () => {
    const context = useContext(projectContext);

    if(!context) {
        throw new Error("Use ProjectError must be used within a ProjectProvider")
    }

    return context;
}

export function ProjectProvider({ children }){
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const res = await getProjectsRequest();
            setProjects(res.data);
        } catch (error) {
            console.log(error);
        }

    }

    const createProject = async(project) => {
        const res = await createProjectRequest(project);
        console.log(res);
    }

    const deleteProject = async(id) =>{
        try {
            const res = await deleteProjectRequest(id);
            if (res.status === 204) setProjects(projects.filter(project => project._id != id));
        } catch (error) {
            console.log(error);
        }
    }

    const getProject = async (id) => {
        try {
            const res = await getProjectRequest(id);
            return res.data;        
        } catch (error) {
            console.log(error);
        }
    }

    const updateProject = async (id, project) => {
        try {
            await updateProjectRequest(id, project);    
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <projectContext.Provider 
        value={{
            projects,
            createProject,
            getProject,
            deleteProject,
            getProjects,
            updateProject,
        }}>
            {children}
        </projectContext.Provider>
    )
}
