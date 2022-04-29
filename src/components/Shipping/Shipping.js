import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Shipping.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    return (
        <div className='login-container'>
            <Helmet>
                <title> Shipping - Ema Jhon Shop </title>
            </Helmet>
            <div className='child-login'>
                <form>
                    <h2>Shipping Information</h2>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input required type="text" name="name" id="" placeholder='Your Name' autoComplete='off' />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input required type="email" name="email" id="" value={user.email} placeholder='Your Email' readOnly disabled />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input required type="password" name="password" id="" placeholder='Password' />
                    </div>
                    <div>
                        <label htmlFor="country">Country</label>
                        <input required type="text" name="country" id="" placeholder='Country' />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input required type="text" name="City" id="" placeholder='City' />
                    </div>
                    <div>
                        <label htmlFor="zip">Zip Code</label>
                        <input required type="text" name="zip-code" id="" placeholder='Zip Code' />
                    </div>
                    <div>
                        <button className='btn' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Shipping;