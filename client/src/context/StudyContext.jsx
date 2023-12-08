import { createContext, useContext, useState } from "react";
import {createStudyRequest, getStudiessRequest, deleteStudyRequest, getStudyRequest, updateStudyRequest} from "../api/study"

const studyContext = createContext();

export const useStudy = () => {
    const context = useContext(studyContext);

    if(!context) {
        throw new Error("Use studyError must be used within a studyProvider")
    }

    return context;
}

export function StudyProvider({ children }){
    const [studies, setStudies] = useState([]);

    const getStudies = async () => {
        try {
            const res = await getStudiessRequest();
            setStudies(res.data);
        } catch (error) {
            console.log(error);
        }

    }

    const createStudy = async(study) => {
        const res = await createStudyRequest(study);
        console.log(res);
    }

    const deleteStudy = async(id) =>{
        try {
            const res = await deleteStudyRequest(id);
            if (res.status === 204) setStudies(studies.filter(study => study._id != id));
        } catch (error) {
            console.log(error);
        }
    }

    const getStudy = async (id) => {
        try {
            const res = await getStudyRequest(id);
            return res.data;        
        } catch (error) {
            console.log(error);
        }
    }

    const updateStudy = async (id, study) => {
        try {
            await updateStudyRequest(id, study);    
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <studyContext.Provider 
        value={{
            studies,
            createStudy,
            getStudies,
            deleteStudy,
            getStudy,
            updateStudy,
        }}>
            {children}
        </studyContext.Provider>
    )
}
