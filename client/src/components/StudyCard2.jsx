import { useStudy } from "../context/StudyContext";
import { Link } from "react-router-dom";

function StudyCard2({study}) {
    return (
        <div>
            <p style={{'fontSize': '20px', 'margin': '1px'}}>{study.names}</p>
            <hr style={{ flex: '1', margin: '5px 90px', borderColor: '#000000' }} />
        </div>
    )
}

export default StudyCard2;