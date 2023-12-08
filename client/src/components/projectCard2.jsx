import { useProject } from "../context/ProjectsContext";
import { Link } from "react-router-dom";

function ProjectCard2({project}) {
    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <h1 className="text-white">{project.names}</h1>
            <p>{project.description}</p>
            <p>{project.link}</p>
        </div>
    )

}

export default ProjectCard2;