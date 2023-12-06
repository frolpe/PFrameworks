import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage(){

    const {register, handleSubmit, formState: {
        errors
    }} = useForm();

    const {signup, isAuthenticated, errors: registerError} = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/skills");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    })

    return(
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            {
                registerError.map((error, i) => (
                    <div className='bg-red-500 p-2' key={i}>
                        {error}
                    </div>
                ))
            }

            <h1 className='text-white'>Register</h1>

            <form onSubmit={onSubmit}>
                <input type="text" {... register('username', {required: true})} 
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Username'/>
                {
                    errors.username && <p className='text-red-500'>Username is required</p>
                }
                <input type="email" {... register('email', {required: true})} 
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Email'/>
                {
                    errors.email && <p className='text-red-500'>Email is required</p>
                }
                <input type="password" {... register('password', {required: true})} 
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Password'/>
                {
                    errors.password && <p className='text-red-500'>Password is required</p>
                }
                <input type="text" {... register('names', {required: true})} 
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Name'/>
                {
                    errors.names && <p className='text-red-500'>Name is required</p>
                }
                <input type="text" {... register('lastname', {required: true})} 
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='LastName'/>
                {
                    errors.lastname && <p className='text-red-500'>Lastname is required</p>
                }
                <input type="number" {... register('age', {required: true})} 
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Age'/> 
                {
                    errors.age && <p className='text-red-500'>Age is required</p>
                }
                <button type='submit'>
                    Register
                </button>
            </form>
        </div>
    )
};

export default RegisterPage;