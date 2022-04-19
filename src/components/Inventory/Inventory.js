import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Inventory.css';

const Inventory = () => {
    return (
        <div className='inventory-container'>
            <Helmet>
                <title> Inventory - Ema Jhon Shop </title>
            </Helmet>
            <h2>Inventory Product</h2>
        </div>
    );
};

export default Inventory;