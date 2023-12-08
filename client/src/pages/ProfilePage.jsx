import { Link } from "react-router-dom";
import { useSkill } from "../context/SkillsContext";
import SkillCard2 from "../components/skillCard2";
import { useProject } from "../context/ProjectsContext";
import ProjectCard2 from "../components/projectCard2";
import { useEffect } from "react";
import { useExp } from "../context/ExpContext";
import ExpCard2 from "../components/ExpCard2";
import { useStudy } from "../context/StudyContext";
import StudyCard2 from "../components/StudyCard2";

function ProfilePage() {

    const { getSkills, skills } = useSkill();
    const { getProjects, projects } = useProject();
    const { getExps, exps } = useExp();
    const { getStudies, studies } = useStudy();

    let projectContent = null;
    let skillContent = null;
    let expContent = null;
    let studyContent = null;

    useEffect(() => {
        getSkills();
        getProjects();
        getExps();
        getStudies();

    }, [])

    if (skills.length == 0) {
        skillContent = (
            <div>
                <h1>No Skills</h1>
            </div>
        )
    }
    else {
        skillContent =(
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
        projectContent =(
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
        expContent =(
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
        studyContent =(
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
        <div>
            <h1>Profile Page</h1>
            <div>
                {studyContent}
                <Link to='/studies'>Edit Studies</Link>
            </div>
            <div>
                {expContent}
                <Link to='/exps'>Edit Experiences</Link>
            </div>
            <div>
                {projectContent}
                <Link to='/projects'>Edit Projects</Link>
            </div>
            <div>
                {skillContent}
                <Link to='/skills'>Edit Skills</Link>

            </div>
        </div>
    )
}

export default ProfilePage; 