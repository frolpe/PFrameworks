import {useForm} from 'react-hook-form';
import { useSkill } from '../context/SkillsContext';
import { useNavigate } from 'react-router-dom';

function SkillFormPage() {

    const {register, handleSubmit} = useForm();
    const {createSkill} = useSkill();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        createSkill(data);
        navigate('/skills');
    })

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" {... register("names")}/>
                <textarea rows="3" placeholder="Description" {... register("description")}></textarea>
                <button>Save</button>
            </form>
        </div>
    )
}

export default SkillFormPage;