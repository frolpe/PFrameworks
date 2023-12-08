import { useEffect } from "react";
import { useStudy } from "../context/StudyContext";
import { Link } from "react-router-dom";
import StudyCard from "../components/StudyCard";
// import "../Profile/stylesProfile.css";


function StudyPage() {
    const { getStudies, studies } = useStudy();

    useEffect(() => {
        getStudies();
    }, [])

    if (studies.length == 0) return (
        <div className="contStudies">
            <h1>No Studies</h1>
            <Link to='/add-study'>Agregar</Link>
        </div>
    )

    return (
        <div className="contStudies">
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