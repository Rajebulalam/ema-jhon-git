import React from 'react';
import './Product.css';

const Product = ({product, btnHandler}) => {

    const {img, name, price, seller, ratings} = product;

    return (
        <div className='product-container'>
            <img src={img} alt="product-img" />
            <div>
                <h2> {name.length > 20 ? name.slice(0, 20) + '...' : name} </h2>
                <h3> Price : $ {price} </h3>
                <p> Manufacture : {seller} </p>
                <p> Ratings : {ratings} star </p>
            </div>
            <button onClick={() => btnHandler(product)} className='cart-btn' type='button'>Add to cart</button>
        </div>
    );
};

export default Product;