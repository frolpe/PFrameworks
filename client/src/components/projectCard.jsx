import { useProject } from "../context/ProjectsContext";
import { Link } from "react-router-dom";

function ProjectCard({project}) {

    const {deleteProject} = useProject();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h1 className="text-white">{project.names}</h1>
            <p>{project.description}</p>
            <p>{project.link}</p>
            <button onClick={() => {
                deleteProject(project._id);
            }
            }>Delete</button>
            <button>
                <Link to={`/projects/${project._id}`}>Edit</Link>
            </button>
        </div>
    )

}

export default ProjectCard;