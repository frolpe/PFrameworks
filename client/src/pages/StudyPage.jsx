import { useEffect } from "react";
import { useStudy } from "../context/StudyContext";
import { Link } from "react-router-dom";
import StudyCard from "../components/StudyCard";

function StudyPage() {
    const { getStudies, studies } = useSkill();

    useEffect(() => {
        getStudies();
    }, [])

    if (studies.length == 0) return (
        <h1>No Studies</h1>
    )

    return (
        <div>
            {
                studies.map(study => (                    
                    <StudyCard study={study} key={study._id}/>
                ))
            }
            <Link to='/add-study'>Agregar</Link>
        </div>
    )
}   

export default StudyPage;