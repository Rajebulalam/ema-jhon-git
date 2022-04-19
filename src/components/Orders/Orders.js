import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderProduct from '../OrderProduct/OrderProduct';
import { removeFullCartFromStorage, removeSingleDataFromStorage } from '../Storage/Storage';
import UseCart from '../UseCart/UseCart';
import UseProducts from '../UseProducts/UseProducts';
import './Orders.css';

const Orders = () => {

    const [products, setProducts] = UseProducts();
    const [cart, setCart] = UseCart(products);

    const removeSingleProduct = (id) => {
        const removeItem = cart.filter(cart => cart.id !== id);
        setCart(removeItem);
        removeSingleDataFromStorage(id);
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeCart = () => {
        clearCart();
        removeFullCartFromStorage();
    }

    return (
        <div className='order-container'>
            <Helmet>
                <title> Orders - Ema Jhon Shop </title>
            </Helmet>
            <div className='orders-product'>
                {
                    cart.map(product => <OrderProduct
                        product={product}
                        removeSingleProduct={removeSingleProduct}
                    ></OrderProduct>)
                }
            </div>
            <div className='orders-cart'>
                <Cart cart={cart} key={cart.id}>
                    <div>
                        <button onClick={removeCart} className='clear-cart' type='button'>
                            <p>Clear Cart</p>
                        </button>
                        <button className='remove-cart' type='button'>
                            <Link to='/shipping'><p>Proceed Checkout</p></Link>
                        </button>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;