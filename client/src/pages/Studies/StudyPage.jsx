import { useEffect } from "react";
import { useStudy } from "../../context/StudyContext";
import { Link } from "react-router-dom";
import StudyCard from "../../components/StudyCard";
import "../Studies/stylesStudies.css";


function StudyPage() {
    const { getStudies, studies } = useStudy();

    useEffect(() => {
        getStudies();
    }, [])

    if (studies.length == 0) return (
        <div className="alineStudies">
            <div className="contStudies">
                <p>No Studies</p>
            </div>
            <div className="btnAgregar">
                <Link style={{ 'text-decoration': 'none' }} to='/add-study'>Agregar</Link>
            </div>
        </div>

    )

    return (
        <div className="alineStudies">
            <div className="contStudies">
                {
                    studies.map(study => (
                        <StudyCard study={study} key={study._id} />
                    ))
                }
            </div>
            <div className="btnAgregar">
                <Link style={{ 'text-decoration': 'none' }} to='/add-study'>Agregar</Link>
            </div>
        </div>
    )
}

export default StudyPage;