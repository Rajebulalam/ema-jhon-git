import React, { useState } from 'react';
import './Register.css';
import googleIcon from '../../images/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [err, setErr] = useState('');
    const [success, setSuccess] = useState('');
    const [
        createUserWithEmailAndPassword,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!/^(?=^.{8,}$)(?=.*[0-9])(?=.+[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;&gt;.&lt;;,]).{1,}$/.test(password)) {
            setErr('Password Should Contain at least 1 upper case, 1 lower case, 1 number, 1 special character and 8 or more digit!');
            return;
        } else {
            if (password === confirmPassword) {
                setSuccess('Looks Good!')
            } else {
                setErr('Your password does not match!')
            }
        }
        createUserWithEmailAndPassword(email, password)
    }

    if(user){
        navigate('/shop');
    }

    return (
        <div className='login-container'>
            <div className='child-login'>
                <form onSubmit={handleSubmit}>
                    <h2>Please Register !!</h2>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} required type="email" name="email" id="" placeholder='Your Email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} required type="password" name="password" id="" placeholder='Password' />
                    </div>
                    <div>
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} required type="password" name="password" id="" placeholder='Confirm Password' />
                    </div>
                    <div>
                        <p className='danger'> {err} </p>
                        <p className='success'> {success} </p>
                        <p> {error?.message} </p>
                        <p> {loading && 'Loading ...'} </p>
                    </div>
                    <div>
                        <button className='btn' type="submit">Sign Up</button>
                    </div>
                </form>
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