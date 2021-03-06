import React, { useState } from 'react';
import './Register.css';
import googleIcon from '../../images/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import gitHub from '../../images/github.png';
import facebook from '../../images/facebook.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

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
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
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

    const handleSubmit = async (event) => {
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
        await createUserWithEmailAndPassword(email, password);
        toast('Success Fully User Created');
    }

    if (user) {
        navigate('/shop');
    }

    // Sign In With Google
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    // Sign In With Github
    const [signInWithGithub] = useSignInWithGithub(auth);

    return (
        <div className='login-container'>
            <Helmet>
                <title> Register - Ema Jhon Shop </title>
            </Helmet>
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
                <ToastContainer />
                <div className='social-btn'>
                    <button className='btn' onClick={() => signInWithGoogle()} type="submit">
                        <img src={googleIcon} alt="google-icon" />
                        <p>Continue With Google</p>
                    </button>
                    <button className='btn' type="submit">
                        <img onClick={() => signInWithGithub()} src={gitHub} alt="google-icon" />
                        <p>Continue With GitHub</p>
                    </button>
                    <button className='btn' type="submit">
                        <img src={facebook} alt="google-icon" />
                        <p>Continue With Facebook</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;