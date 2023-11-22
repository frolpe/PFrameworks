import React from 'react'
import "./styles.css"
import logo from "./logo1-removebg-preview.png"


export const Signup = () => {
    return(
        <div className="card">
            <img src={logo} alt='Logo' />
            <h1>Sign in</h1>
            <form className="form">
                <p>Username or email address</p>
                <input className='control' ></input>
                <p>Password</p>
                <input className='control' type='password'></input>
                <button className="control" type="button">
                <a>Sign in</a>
                </button>
            </form>
        </div>
    );
};