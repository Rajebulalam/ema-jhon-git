import React from 'react';
import './Home.css';
import home from '../../images/group.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='home-container'>
            <Helmet>
                <title> Home - Ema Jhon Shop </title>
            </Helmet>
            <div>
                <h4>Sale up to 70% off</h4>
                <h2>New Collection For Fall</h2>
                <p>Discover all the new arrivals of ready-to-wear collection.</p>
                <Link to='/shop'>SHOP NOW</Link>
            </div>
            <div>
                <img src={home} alt="home-img" />
            </div>
        </div>
    );
};

export default Home;