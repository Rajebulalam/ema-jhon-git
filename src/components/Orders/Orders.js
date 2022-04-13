import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderProduct from '../OrderProduct/OrderProduct';
import UseCart from '../UseCart/UseCart';
import UseProducts from '../UseProducts/UseProducts';
import './Orders.css';

const Orders = () => {

    const [products, setProducts] = UseProducts();
    const [cart, setCart] = UseCart(products);

    const removeSingleProduct = (id) => {
        const removeItem = cart.filter(cart => cart.id !== id);
        setCart(removeItem);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <div className='order-container'>
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
                        <button onClick={clearCart} className='clear-cart' type='button'>
                            <p>Clear Cart</p>
                        </button>
                        <button className='remove-cart' type='button'>
                            <Link to='/orders'><p>Proceed Checkout</p></Link>
                        </button>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;