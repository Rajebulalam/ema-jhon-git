import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let quantity = 0;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.10).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart-details'>
            <h2>Order Summary</h2>
            <div>
                <h3>Selected Items : {quantity} </h3>
                <p> Total Price : $ {total} </p>
                <p> Shipping : $ {shipping} </p>
                <p> Tax : $ {tax} </p>
                <h3> Grand Total : ${grandTotal} </h3>
            </div>
        </div>
    );
};

export default Cart;