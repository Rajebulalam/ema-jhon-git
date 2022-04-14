import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        toast('Log out success fully!!');
    }

    return (
        <div className='header-container'>
            <div>
                <Link className='logo' to='/'><img src={logo} alt="logo-img" /></Link>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='./inventory'>Inventory</Link>
                <Link to='./About'>About</Link>
                <Link className='link-register' to='/register'>Register</Link>
                {
                    user ? <button onClick={logOut} className='link-logout'>Log Out</button> : <Link className='link-login' to='/login'>Login</Link>
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default Header;