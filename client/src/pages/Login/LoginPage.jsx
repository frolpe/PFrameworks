import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../Login/stylesL.css";
import logo from "../Login/logo1-removebg-preview.png";

function LoginPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signin, errors: signinErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate()

    const onSubmit = handleSubmit(data => {
        signin(data);
    })

    useEffect(() => {
        if (isAuthenticated) navigate("/profile");
    }, [isAuthenticated])

    return (
        <div className="alineLogin">
            <div className="cardLogin">
                <img src={logo} alt='Logo' />
                {
                    Array.isArray(signinErrors) ?
                        signinErrors.map((error, i) => (
                            <div style={{ color: 'red', fontSize: 'small' }} key={i}>
                                {error}
                            </div>
                        )) :
                        <div style={{ color: 'red', fontSize: 'small' }}>
                            {signinErrors}
                        </div>
                }
                <h1>Sign In</h1>
                <form onSubmit={onSubmit} className="formLogin">
                    <p>Username or email address</p>
                    <input type='email'{...register('email', { required: true })} className="controlLogin" placeholder="example@mail.com"></input>
                    {
                        errors.email && <p style={{ color: 'red', fontSize: 'small' }}>Email is required</p>
                    }
                    <p>Password</p>
                    <input className='controlLogin' type='password' {...register('password', { required: true })} ></input>
                    {
                        errors.password && <p style={{ color: 'red', fontSize: 'small' }}>Password is required</p>
                    }
                    <button className="controlLogin" type="submit">
                        <a>Sign in</a>
                    </button>
                </form>
                <p style={{'padding-top': '10px', 'font-size': '14px'}}> Don't have an account? <Link to="/register">Sign Up</Link></p>

            </div>
        </div>

    )
}

export default LoginPage;