import { useEffect } from "react";
import { useProject } from "../context/ProjectsContext";
import { Link } from "react-router-dom";
import ProjectCard from "../components/projectCard";

function ProjectPage() {
    const { getProjects, projects } = useProject();

    useEffect(() => {
        getProjects();
    }, [])

    if (projects.length == 0) return (
        <h1>No Projects</h1>
    )

    return (
        <div>
            {
                projects.map(project => (                    
                    <ProjectCard project={project} key={project._id}/>
                ))
            }
            <Link to='/add-project'>Agregar</Link>
        </div>
    )
}   

export default ProjectPage;