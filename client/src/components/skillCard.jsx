import { useSkill } from "../context/SkillsContext";
import { Link } from "react-router-dom";

function SkillCard({skill}) {

    const {deleteSkill} = useSkill();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h1 className="text-white">{skill.names}</h1>
            <p>{skill.description}</p>
            <button onClick={() => {
                deleteSkill(skill._id);
            }
            }>Delete</button>
            <button>
                <Link to={`/skills/${skill._id}`}>Edit</Link>
            </button>
        </div>
    )

}

export default SkillCard;