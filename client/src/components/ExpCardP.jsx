import { useExp } from "../context/ExpContext";
import { Link } from "react-router-dom";

function ExpCard2({ exp }) {
    return (
        <div>
            <p style={{ 'fontSize': '20px', 'margin': '1px' }}>{exp.names}</p>
            <p>{exp.position}</p>
            <p>{exp.time}</p>
            <p>{exp.description}</p>
            <hr />
        </div>
    )

}

export default ExpCard2;