import { useProject } from "../context/ProjectsContext";
import { Link } from "react-router-dom";

function ProjectCard2({ project }) {
    return (
        <div>
            <p style={{ 'fontSize': '20px', 'margin': '2px' }}>{project.names}</p>
            <p>{project.description}</p>
            <div>
                <Link to={project.link} style={{ 'text-decoration': 'none', 'color': '#e3e5d7' }}
                    onMouseEnter={(e) => {
                        e.target.style.color = '#586875';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = '#e3e5d7';
                    }
                    }
                    target="_blank" 
                    rel="noopener noreferrer">{project.link}</Link>
            </div>
            <hr />
        </div>
    )

}

export default ProjectCard2;