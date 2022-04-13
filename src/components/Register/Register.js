import React from 'react';
import './Register.css';
import googleIcon from '../../images/google.png';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-container'>
            <div className='child-login'>
                <h2>Please Register !!</h2>
                <div>
                    <label htmlFor="name">Name</label>
                    <input required type="text" name="name" id="" placeholder='Your Name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input required type="email" name="email" id="" placeholder='Your Email' />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input required type="password" name="password" id="" placeholder='Password' />
                </div>
                <div>
                    <label htmlFor="password">Confirm Password</label>
                    <input required type="password" name="password" id="" placeholder='Confirm Password' />
                </div>
                <div>
                    <button className='btn' type="submit">Sign Up</button>
                </div>
                <p>Already have an account? <span className='highlight'><Link to='/login'>Login</Link></span></p>
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

export default Register;