import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext.jsx';
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "../SignIn/stylesR.css";
import logo from "../Login/logo1-removebg-preview.png";

function RegisterPage() {
    const { register, handleSubmit, formState: {
        errors
    } } = useForm();

    const { signup, isAuthenticated, errors: registerError } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/skills");
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    })

    return (
        <div className='alineRegister'>
            <div className="cardRegister">
                <img src={logo} alt='Logo' />
                {
                    registerError.map((error, i) => (
                        <div style={{ color: 'red', fontSize: 'small' }} key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1>Sign up</h1>
                <form onSubmit={onSubmit} className="formRegister">
                    <table border="0">
                        <tr>
                            <td>
                                <p>Name</p>
                                <input className='controlRegister' type='text'  {...register('names', { required: true })} ></input>
                                {
                                    errors.names && <p style={{ color: 'red', fontSize: 'small' }}>Name is required</p>
                                }
                            </td>
                            <td>
                                <p>Last name</p>
                                <input className='controlRegister' type='text' {...register('lastname', { required: true })} ></input>
                                {
                                    errors.lastname && <p style={{ color: 'red', fontSize: 'small' }}>Lastname is required</p>
                                }
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Username</p>
                                <input className='controlRegister' type="text"  {...register('username', { required: true })}></input>
                                {
                                    errors.username && <p style={{ color: 'red', fontSize: 'small' }}>Username is required</p>
                                }
                            </td>
                            <td>
                                <p>Email address</p>
                                <input className='controlRegister' type='mail' {...register('email', { required: true })} ></input>
                                {
                                    errors.email && <p style={{ color: 'red', fontSize: 'small' }}>Email is required</p>
                                }
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>Password</p>
                                <input className='controlRegister' type='password' {...register('password', { required: true })} ></input>
                                {
                                    errors.password && <p style={{ color: 'red', fontSize: 'small' }}>Password is required</p>
                                }
                            </td>
                            <td>
                                <p>Confirm your Password</p>
                                <input className='controlRegister' type='password' {...register('password', { required: true })} ></input>
                                {
                                    errors.password && <p style={{ color: 'red', fontSize: 'small' }}>Password is required</p>
                                }
                            </td>
                        </tr>
                    </table>

                    <button className="controlRegister" type='submit' >
                        <a href=''>Sign up</a>
                    </button>
                </form>
                <p style={{ 'padding-top': '10px', 'font-size': '14px' }}>Already have an account? <Link to="/login">Sign in</Link></p>
            </div>
        </div>
    )
};

export default RegisterPage;