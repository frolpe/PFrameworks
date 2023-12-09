import { useStudy } from "../context/StudyContext";
import { Link } from "react-router-dom";

function StudyCard2({ study }) {
    return (
        <div>
            <br />
            <p style={{ 'fontSize': '20px', 'margin': '1px' }}>- {study.names}</p>
            
        </div>
    )
}

export default StudyCard2;