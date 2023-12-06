import { useEffect } from "react";
import { useSkill } from "../context/SkillsContext";
import { Link } from "react-router-dom";
import SkillCard from "../components/skillCard";

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
                    <SkillCard skill={skill} key={skill._id}/>
                ))
            }
            <Link to='/add-skill'>Agregar</Link>
        </div>
    )
}   

export default SkillPage;