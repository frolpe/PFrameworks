import { useEffect } from "react";
import { useSkill } from "../context/SkillsContext";
import { Link } from "react-router-dom";


function SkillPage() {
    const { getSkills, skills } = useSkill();

    useEffect(() => {
        getSkills();
    }, [])

    if (skills.length == 0) return (
        <h1>No Skills</h1>
    )

    return (
        <div>
            {
                skills.map(skill => (
                    <div key={skill._id}>
                        <h1>{skill.names}</h1>
                        <p>{skill.description}</p>
                    </div>
                ))
            }
            <Link to='/add-skill'>Agregar</Link>
        </div>
    )
}

export default SkillPage;