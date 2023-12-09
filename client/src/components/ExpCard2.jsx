import { useExp } from "../context/ExpContext";
import { Link } from "react-router-dom";

function ExpCard2({exp}) {
    return (
        <div>
            <p style={{'fontSize': '20px', 'margin': '1px'}}>{exp.names}</p>
            <hr style={{ flex: '1', margin: '5px 90px', borderColor: '#000000' }} />
        </div>
    )

}

export default ExpCard2;