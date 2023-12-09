import { useProject } from "../context/ProjectsContext";
import { Link } from "react-router-dom";

function ProjectCard2({ project }) {
    return (
        <div>
            <p style={{ 'fontSize': '20px', 'margin': '2px' }}>{project.names}</p>
            <p>{project.description}</p>
            <Link>{project.link}</Link>
            <hr />
        </div>
    )

}

export default ProjectCard2;