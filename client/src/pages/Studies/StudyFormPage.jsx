import { useForm } from 'react-hook-form';
import { useStudy } from '../../context/StudyContext'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function StudyFormPage() {

    const { register, handleSubmit, setValue } = useForm();
    const { createStudy, getStudy, updateStudy } = useStudy();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadStudy() {
            if (params.id) {
                const study = await getStudy(params.id);
                setValue('names', study.names);
            }
        }
        loadStudy();
    })

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            console.log("hols");
            updateStudy(params.id, data);
            navigate('/studies');
        } else {
            createStudy(data);
            navigate('/studies');
        }

    })

    return (
        <div className='ModalStudies'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Name" {...register("names")} />
                <button>Save</button>
            </form>
        </div>
    )
}

export default StudyFormPage;