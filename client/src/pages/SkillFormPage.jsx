import {useForm} from 'react-hook-form';
import { useSkill } from '../context/SkillsContext';

function SkillFormPage() {

    const {register, handleSubmit} = useForm();
    const {createSkill} = useSkill();

    const onSubmit = handleSubmit((data) => {
        createSkill(data);
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