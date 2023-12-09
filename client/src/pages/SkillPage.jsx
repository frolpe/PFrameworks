import { useEffect } from "react";
import { useSkill } from "../context/SkillsContext";
import { Link } from "react-router-dom";
import SkillCard from "../components/skillCard";
import "../pages/Studies/stylesStudies.css"


function SkillPage() {
    const { getSkills, skills } = useSkill();

    useEffect(() => {
        getSkills();
    }, [])

    if (skills.length == 0) return (
        <div className="alineStudies">
            <div className="contStudies">
                <h1>No Skills</h1>
            </div>
            <div className="btnAgregar">
                <Link style={{ 'text-decoration': 'none' }} to='/add-skill'>Agregar</Link>
            </div>
        </div>
    )

    return (
        <div className="alineStudies">
            <div className="contStudies exp">
                {
                    skills.map(skill => (
                        <SkillCard skill={skill} key={skill._id} />
                    ))
                }
            </div>
            <div className="btnAgregar">
                <Link style={{ 'text-decoration': 'none' }} to='/add-skill'>Agregar</Link>
            </div>
        </div>
    )
}

export default SkillPage;