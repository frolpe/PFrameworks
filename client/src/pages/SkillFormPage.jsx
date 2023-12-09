import { useForm } from 'react-hook-form';
import { useSkill } from '../context/SkillsContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import "../pages/Studies/stylesStudies.css"

function SkillFormPage() {

    const { register, handleSubmit, setValue } = useForm();
    const { createSkill, getSkill, updateSkill } = useSkill();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadSkill() {
            if (params.id) {
                const skill = await getSkill(params.id);
                setValue('names', skill.names);
                setValue('description', skill.description);
            }
        }
        loadSkill();
    })

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            console.log("hols");
            updateSkill(params.id, data);
            navigate('/skills');
        } else {
            createSkill(data);
            navigate('/skills');
        }

    })

    return (
        <div className='alineStudies'>
            <div className='contStudies'>
                <form onSubmit={onSubmit}>
                    <input className='inputstudy' type="text" placeholder="Name" {...register("names")} />
                    <textarea className='inputstudy' rows="3" placeholder="Description" {...register("description")}></textarea><br />
                    <button className='btnSave'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default SkillFormPage;