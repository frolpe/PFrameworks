import { useForm } from 'react-hook-form';
import { useSkill } from '../context/SkillsContext';
import {useExp} from '../context/ExpContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function ExpFormPage() {

    const { register, handleSubmit, setValue } = useForm();
    const { createExp, getExp, updateExp }  = useExp();
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
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" {...register("names")} />
                <input type="text" placeholder="Position" {...register("position")} />
                <input type="text" placeholder="Time" {...register("position")} />
                <textarea rows="3" placeholder="Description" {...register("description")}></textarea>
                <button>Save</button>
            </form>
        </div>
    )
}

export default ExpFormPage;