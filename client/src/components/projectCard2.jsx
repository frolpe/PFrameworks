import { useProject } from "../context/ProjectsContext";
import { Link } from "react-router-dom";

function ProjectCard2({project}) {
    return (
        <div>
            <p style={{'fontSize': '20px', 'margin': '2px'}}>{project.names}</p>
            <hr style={{ flex: '1', margin: '5px 90px', borderColor: '#000000' }} />
        </div>
    )

}

export default ProjectCard2;