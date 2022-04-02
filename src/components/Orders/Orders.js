import React from 'react';
import Cart from '../Cart/Cart';
import OrderProduct from '../OrderProduct/OrderProduct';
import Product from '../Product/Product';
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;