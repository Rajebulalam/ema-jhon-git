import React from 'react';
import './OrderProduct.css';

const OrderProduct = ({ product, removeSingleProduct }) => {

    const { id, img, name } = product;

    return (
        <div className='order-product'>
            <div className='child-order'>
                <img src={img} alt="product-img" />
                <h2> {name.length > 15 ? name.slice(0, 15) + '...' : name} </h2>
            </div>
            <div>
                <button onClick={() => removeSingleProduct(id)}>X</button>
            </div>
        </div>
    );
};

export default OrderProduct;