import React, { useState } from 'react';
import './Login.css';
import googleIcon from '../../images/google.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import gitHubIcon from '../../images/github.png';
import facebookIcon from '../../images/facebook.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleEmail = async (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!/^(?=^.{8,}$)(?=.*[0-9])(?=.+[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;&gt;.&lt;;,]).{1,}$/.test(password)) {
            setErr('Password Should Contain at least 1 upper case, 1 lower case, 1 number, 1 special character and 8 or more digit!');
            return;
        }
        await signInWithEmailAndPassword(email, password)
        toast('Login Success Fully!!');
    }

    if (user) {
        navigate(from, { replace: true });
    }

    // Sign In With Google
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    // Sign In With Github
    const [signInWithGithub] = useSignInWithGithub(auth);

    // Forget password
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleForgetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Set an Email!');
        }
    }


    return (
        <div className='login-container'>
            <Helmet>
                <title> Login - Ema Jhon Shop </title>
            </Helmet>
            <div className='child-login'>
                <form onSubmit={handleSubmit}>
                    <h2>Please login !!</h2>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} required type="email" name="email" id="" placeholder='Your Email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} required type="password" name="password" id="" placeholder='Password' />
                    </div>
                    <div>
                        <p className='danger'> {err} </p>
                        <p> {error?.message} </p>
                        <p> {loading && 'Loading ...'} </p>
                    </div>
                    <div>
                        <button className='btn' type="submit">Login</button>
                    </div>
                </form>
                <p>New to Ema-john? <span className='highlight'><Link to='/register'>Create New Account</Link></span></p>
                <p className='forgetPassword' onClick={handleForgetPassword}>Forget Password?</p>
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
                    <button className='btn' onClick={() => signInWithGithub()} type="submit">
                        <img src={gitHubIcon} alt="google-icon" />
                        <p>Continue With Github</p>
                    </button>
                    <button className='btn' type="submit">
                        <img src={facebookIcon} alt="google-icon" />
                        <p>Continue With Facebook</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;