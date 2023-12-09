import { useSkill } from "../context/SkillsContext";
import { Link } from "react-router-dom";

function SkillCard({skill}) {

    const {deleteSkill} = useSkill();

    return (
        <div>
            <h1>{skill.names}</h1>
            <p>{skill.description}</p>
            <button style={{ 'color': '#000000', 'border': '0', 'background': 'transparent', 'cursor': 'pointer', 'transition': 'color 0.3s ease' }}
            onClick={() => {
                deleteSkill(skill._id);
            }}
            onMouseEnter={(e) => {
                e.target.style.color = '#fc5f57';
            }}
            onMouseLeave={(e) => {
                e.target.style.color = '#000000';
            }
            }>Delete</button>
            <button style={{ 'border': '0', 'background': 'transparent', 'cursor': 'pointer' }}>
                <Link style={{ 'color': '#000000', 'transition': 'color 0.3s ease' }} to={`/skills/${skill._id}`}
                onMouseEnter={(e) => {
                    e.target.style.color = '#586875';
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = '#000000';
                }
                }>Edit</Link>
            </button>
            <hr />
        </div>
    )

}

export default SkillCard;