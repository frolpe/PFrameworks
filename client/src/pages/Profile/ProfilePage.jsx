import { Link } from "react-router-dom";
import { useSkill } from "../../context/SkillsContext";
import SkillCard2 from "../../components/skillCard2";
import { useProject } from "../../context/ProjectsContext";
import ProjectCard2 from "../../components/projectCard2";
import { useEffect } from "react";
import { useExp } from "../../context/ExpContext";
import ExpCard2 from "../../components/ExpCard2";
import { useStudy } from "../../context/StudyContext";
import StudyCard2 from "../../components/StudyCard2";
import { useUser } from "../../context/userContext";
import perfil from "./Credencial.png";
import editar from "./Editar.png"
import "../Profile/stylesProfile.css";

function ProfilePage() {

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
        getSkills();
        getProjects();
        getExps();
        getStudies();
        getUsers();
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
                <p>{users.email}</p>
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
        <div className="alineProfile">
            <div className="profile">
                <img src={perfil} alt='Perfil' />
                <h2>Profile</h2>
                {userContent}
            </div>
            <div className="cardP">
                <div className="cardS">
                    <Link to='/studies'><img src={editar} alt="editar" /></Link>
                    {studyContent}
                </div>
                <div className="cardS">
                    <Link to='/exps'><img src={editar} alt="editar" /></Link>
                    {expContent}
                </div>
                <div className="cardS">
                    <Link to='/projects'><img src={editar} alt="editar" /></Link>
                    {projectContent}
                </div>
                <div className="cardS">
                    <Link to='/skills'><img src={editar} alt="editar" /></Link>
                    {skillContent}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage; 