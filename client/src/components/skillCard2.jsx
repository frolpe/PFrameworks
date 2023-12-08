import { useSkill } from "../context/SkillsContext";
import { Link } from "react-router-dom";

function SkillCard2({skill}) {
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h1 className="text-white">{skill.names}</h1>
            <p>{skill.description}</p>
        </div>
    )
}

export default SkillCard2;