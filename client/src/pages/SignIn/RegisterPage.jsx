import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext.jsx';
import React, { useEffect ,useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "../SignIn/stylesR.css";
import logo from "../Login/logo1-removebg-preview.png";

function RegisterPage(){
    const useDebounce = (value, delay) => {
        const [debounced, setDebounced] = useState(value);
        
        useEffect(() => {
            const handler = setTimeout(() => {
                setDebounced(value)
            }, delay);
            return () => clearTimeout(handler);
        }, [value, delay]);
    
        return debounced;
    };
    const Username = ({isValid, isLoading, handleChange}) => {
        return(
            <>
            <div className='username'>
                <input onChange={handleChange} className='control'/>
                <div className= {`spinner ${isLoading ? "loading" : ""}`}></div>
            </div>
            <div className={`validation ${!isValid ? "invalid" : ""}`}>
                Username already taken
            </div>
            </>
        );
    };

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
        <div className="card">
            <img src={logo} alt='Logo' />
            {
                registerError.map((error, i) => (
                    <div style={{ color: 'red' , fontSize: 'small'}} key={i}>
                        {error}
                    </div>
                ))
            }
            <h1>Sign up</h1>
            <form onSubmit={onSubmit} className="form">
                <table border="0">
                    <tr>
                        <td>
                            <p>Name</p>
                            <input className='control' type='text'></input>
                        </td>
                        <td>
                            <p>Last name</p>
                            <input className='control' type='text'></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>Username</p>
                            <input type="text"  {... register('username', {required: true})} placeholder='Username' />
                            {
                                errors.username && <p className='text-red-500'>Username is required</p>
                            }
                        </td>
                        <td>
                            <p>Email address</p>
                            <input className='control' type='mail'></input>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <p>Password</p>
                            <input className='control' type='password'></input>
                        </td>
                        <td>
                            <p>Confirm your Password</p>
                            <input className='control' type='password'></input>
                        </td>
                    </tr>
                </table>
                
                <button disabled={!isValid} className="control" type="button" >
                    <a href=''>Sign up</a>
                </button>
            </form>
        </div>
    )
};

export default RegisterPage;