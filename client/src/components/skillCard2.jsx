import { useSkill } from "../context/SkillsContext";
import { Link } from "react-router-dom";

function SkillCard2({skill}) {
    return (
        <div>
            <p style={{'fontSize': '20px', 'margin': '1px'}}>{skill.names}</p>
            <hr style={{ flex: '1', margin: '5px 90px', borderColor: '#000000' }} />
        </div>
    )
}

export default SkillCard2;