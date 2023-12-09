import { useForm } from 'react-hook-form';
import { useSkill } from '../context/SkillsContext';
import { useExp } from '../context/ExpContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import "../pages/Studies/stylesStudies.css"

function ExpFormPage() {

    const { register, handleSubmit, setValue } = useForm();
    const { createExp, getExp, updateExp } = useExp();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadExp() {
            if (params.id) {
                const exp = await getExp(params.id);
                setValue('names', exp.names);
                setValue('position', exp.position);
                setValue('time', exp.time);
                setValue('description', exp.description);
            }
        }
        loadExp();
    })

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            console.log("hols");
            updateExp(params.id, data);
            navigate('/exps');
        } else {
            createExp(data);
            navigate('/exps');
        }
    })

    return (
        <div className='alineStudies'>
            <div className='contStudies'>
                <form onSubmit={onSubmit}>
                    <input className='inputstudy' type="text" placeholder="Name" {...register("names")} />
                    <input className='inputstudy' type="text" placeholder="Position" {...register("position")} />
                    <input className='inputstudy' type="text" placeholder="Time" {...register("time")} />
                    <textarea className='inputstudy' rows="3" placeholder="Description" {...register("description")}></textarea>
                    <br />
                    <button className='btnSave'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default ExpFormPage;