import { useProject } from "../context/ProjectsContext";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {

    const { deleteProject } = useProject();

    return (
        <div>
            <h1>{project.names}</h1>
            <p>{project.description}</p>
            <Link>{project.link}</Link><br /><br />
            <button style={{ 'color': '#000000', 'border': '0', 'background': 'transparent', 'cursor': 'pointer', 'transition': 'color 0.3s ease' }} onClick={() => {
                deleteProject(project._id);
            }}
                onMouseEnter={(e) => {
                    e.target.style.color = '#fc5f57';
                }}
                onMouseLeave={(e) => {
                    e.target.style.color = '#000000';
                }
                }>Delete</button>
            <button style={{ 'border': '0', 'background': 'transparent', 'cursor': 'pointer' }}>
                <Link style={{ 'color': '#000000', 'transition': 'color 0.3s ease' }} to={`/projects/${project._id}`}
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

export default ProjectCard;