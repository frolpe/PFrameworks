import { Link } from "react-router-dom";
import { useSkill } from "../context/SkillsContext";
import SkillCard2 from "../components/skillCardP";
import { useProject } from "../context/ProjectsContext";
import ProjectCard2 from "../components/projectCardP";
import { useEffect } from "react";
import { useExp } from "../context/ExpContext";
import ExpCard2 from "../components/ExpCardP";
import { useStudy } from "../context/StudyContext";
import StudyCard2 from "../components/StudyCardP";
import { useUser } from "../context/userContext";
import "./stylesPortafolio.css";

function PortafolioPage() {

    const { getSkills, skills } = useSkill();
    const { getProjects, projects } = useProject();
    const { getExps, exps } = useExp();
    const { getStudies, studies } = useStudy();
    const { getUsers, users } = useUser();

    let projectContent = null;
    let skillContent = null;
    let expContent = null;
    let studyContent = null;
    let userContent = null;

    useEffect(() => {
        document.body.classList.add("portfolio-page-body");
        getSkills();
        getProjects();
        getExps();
        getStudies();
        getUsers();
        return () => {
            document.body.classList.remove("portfolio-page-body");
        };
    }, [])

    //console.log(users);
    if (users.length == 0) {
        userContent = (
            <div>
                <h1>No User</h1>
            </div>
        )
    }
    else {
        userContent = (
            <div>
                <h2>{users.names} {users.lastname}</h2>
                <p>Email: {users.email}</p>
                <p>Edad: {users.age}</p>
            </div>
        )
    }

    if (skills.length == 0) {
        skillContent = (
            <div>
                <h1>No Skills</h1>
            </div>
        )
    }
    else {
        skillContent = (
            <div>
                {
                    skills.map(skill => (
                        <SkillCard2 skill={skill} key={skill._id} />
                    ))
                }
            </div>
        )
    }

    if (projects.length == 0) {
        projectContent = (
            <div>
                <h1>No Projects</h1>
            </div>
        )
    }
    else {
        projectContent = (
            <div>
                {
                    projects.map(project => (
                        <ProjectCard2 project={project} key={project._id} />
                    ))
                }
            </div>
        )
    }

    if (exps.length == 0) {
        expContent = (
            <div>
                <h1>No Experiences</h1>
            </div>
        )
    }
    else {
        expContent = (
            <div>
                {
                    exps.map(exp => (
                        <ExpCard2 exp={exp} key={exp._id} />
                    ))
                }
            </div>
        )
    }

    if (studies.length == 0) {
        studyContent = (
            <div>
                <h1>No Studies</h1>
            </div>
        )
    }
    else {
        studyContent = (
            <div>
                {
                    studies.map(study => (
                        <StudyCard2 study={study} key={study._id} />
                    ))
                }
            </div>
        )
    }

    return (
        <div className="portfolio-wrapper">
            <div className="profile-section">
                {userContent}
                <br />
                <hr />
                <br />
                <h2 className="card-heading">Estudios</h2>
                {studyContent}
            </div>
            <div className="card-container">
                <div className="custom-card">
                    <h2 className="card-heading">Experiencias</h2>
                    {expContent}
                </div>
                <div className="custom-card">
                    <h2 className="card-heading">Proyectos</h2>
                    {projectContent}
                </div>
                <div className="custom-card">
                    <h2 className="card-heading">Habilidades</h2>
                    {skillContent}
                </div>
            </div>
        </div>
    );
}

export default PortafolioPage; 