import React, { useEffect ,useState } from 'react'
import "./styles.css"
import logo from "./logo1-removebg-preview.png"

const usernames = ["joe", "frolpe"];

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

export const Signup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [username, setUsername] = useState("");

    const debouncedUsername = useDebounce(username, 500)

    const handler = e =>{
        setIsLoading(true);
        setUsername(e.target.value);
    }

    useEffect(() => {
        setIsValid(!usernames.some(
            u => u === debouncedUsername));
        setIsLoading(false);
    }, [debouncedUsername]);

    return(
        <div className="card">
            <img src={logo} alt='Logo' />
            <h1>Sign up</h1>
            <form className="form">
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
                                <Username
                                    isLoading={isLoading}
                                    isValid={isValid}
                                    handleChange={handler}
                            />
                        </td>
                        <td>
                            <p>Email address</p>
                            <input className='control' type='email'></input>
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
    );
};