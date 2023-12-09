import { useForm } from 'react-hook-form';
import { useProject } from '../context/ProjectsContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import "../pages/Studies/stylesStudies.css"


function ProjectFormPage() {

    const { register, handleSubmit, setValue } = useForm();
    const { createProject, getProject, updateProject } = useProject();
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
        <div className='alineStudies'>
            <div className='contStudies'>
                <form onSubmit={onSubmit}>
                    <input className='inputstudy' type="text" placeholder="Name" {...register("names")} />
                    <textarea className='inputstudy' rows="3" placeholder="Description" {...register("description")}></textarea>
                    <input className='inputstudy' type="text" placeholder="link" {...register("link")} /> <br />
                    <button className='btnSave'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default ProjectFormPage;