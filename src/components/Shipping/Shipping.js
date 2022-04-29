import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Shipping.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    const handleSubmitInfo = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const country = event.target.country.value;
        const city = event.target.city.value;
        const zipCode = event.target.zipCode.value;

        const customer = {
            name, email, password, country, city, zipCode
        };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        console.log(customer);
    }

    return (
        <div className='login-container'>
            <Helmet>
                <title> Shipping - Ema Jhon Shop </title>
            </Helmet>
            <div className='child-login'>
                <form onSubmit={handleSubmitInfo}>
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
                        <input required type="text" name="city" id="" placeholder='City' />
                    </div>
                    <div>
                        <label htmlFor="zip">Zip Code</label>
                        <input required type="text" name="zipCode" id="" placeholder='Zip Code' />
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