import { useForm } from 'react-hook-form';
import { useProject } from '../context/ProjectsContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function ProjectFormPage() {

    const { register, handleSubmit, setValue } = useForm();
    const {createProject, getProject, updateProject} = useProject;
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadProject() {
            if (params.id) {
                const project = await getProject(params.id);
                setValue('names', project.names);
                setValue('description', project.description);
                setValue('link', project.link);
            }
        }
        loadProject();
    })

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            console.log("hols");
            updateProject(params.id, data);
            navigate('/projects');
        } else {
            createProject(data);
            navigate('/projects');
        }

    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" {...register("names")} />
                <textarea rows="3" placeholder="Description" {...register("description")}></textarea>
                <input type="text" placeholder="link" {...register("link")} />
                <button>Save</button>
            </form>
        </div>
    )
}

export default ProjectFormPage;