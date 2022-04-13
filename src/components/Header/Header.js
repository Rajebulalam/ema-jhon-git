import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <img src={logo} alt="logo-img" />
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='./inventory'>Inventory</Link>
                <Link to='./About'>About</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;