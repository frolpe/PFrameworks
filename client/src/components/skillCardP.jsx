import { useSkill } from "../context/SkillsContext";
import { Link } from "react-router-dom";

function SkillCard2({ skill }) {
    return (
        <div>
            <p style={{ 'fontSize': '20px', 'margin': '1px' }}>{skill.names}</p>
            <hr />
        </div>
    )
}

export default SkillCard2;