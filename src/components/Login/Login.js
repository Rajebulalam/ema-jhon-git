import React from 'react';
import './Login.css';
import googleIcon from '../../images/google.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-container'>
            <div className='child-login'>
                <h2>Please login !!</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input required type="email" name="email" id="" placeholder='Your Email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input required type="password" name="password" id="" placeholder='Password' />
                </div>
                <div>
                    <button className='btn' type="submit">Login</button>
                </div>
                <p>New to Ema-john? <span className='highlight'><Link to='/register'>Create New Account</Link></span></p>
                <div className='or-design'>
                    <span></span>
                    <p>or</p>
                    <span></span>
                </div>
                <div className='google-btn'>
                    <button type="submit">
                        <img src={googleIcon} alt="google-icon" />
                        <p>Continue With Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;