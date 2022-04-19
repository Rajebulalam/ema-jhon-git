import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notFound-container'>
            <Helmet>
                <title> NotFound - Ema Jhon Shop </title>
            </Helmet>
            <h1>Opps!</h1>
            <h2>404 - PAGE NOT FOUND</h2>
            <p>The page you are looking for might have been removed</p>
            <p>had its name changed or is temporarily unavailable</p>
            <Link to="/">GO TO HOME PAGE</Link>
        </div>
    );
};

export default NotFound;