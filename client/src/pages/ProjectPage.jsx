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
        <div className="alineStudies">
            <div className="contStudies">
                <h1>No Projects</h1>
            </div>
            
            <div className="btnAgregar">
                <Link style={{ 'text-decoration': 'none' }}  to='/add-project'>Agregar</Link>
            </div>
        </div>
    )

    return (
        <div className="alineStudies">
            <div className="contStudies exp">
                {
                    projects.map(project => (
                        <ProjectCard project={project} key={project._id} />
                    ))
                }
            </div>
            <div className="btnAgregar">
                <Link style={{ 'text-decoration': 'none' }}  to='/add-project'>Agregar</Link>
            </div>
        </div>
    )
}

export default ProjectPage;