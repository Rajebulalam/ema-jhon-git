import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { loadData, removeFullCartFromStorage, setLocalStorageData } from '../Storage/Storage';
import UseProducts from '../UseProducts/UseProducts';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = UseProducts();

    const [cart, setCart] = useState([]);
    const btnHandler = (product) => {
        let newCart = [];
        const exists = cart.find(cart => cart.id === product.id);
        if (!exists) {
            const quantity = 1;
            product.quantity = quantity;
            newCart = [...cart, product];
        } else {
            const rest = cart.filter(cart => cart.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        setLocalStorageData(product.id);
    }


    useEffect(() => {
        const storedData = loadData();
        let savedCart = [];
        for (const id in storedData) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedData[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            setCart(savedCart);
        }
    }, [products])

    const clearCart = () => {
        setCart([]);
    }

    const removeCart = () => {
        clearCart();
        removeFullCartFromStorage();
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        btnHandler={btnHandler}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} key={cart.id}>
                    <div>
                        <button onClick={removeCart} className='clear-cart' type='button'>
                            <p>Clear Cart</p>
                        </button>
                        <button className='remove-cart' type='button'>
                            <Link to='/orders'><p>Review Order</p></Link>
                        </button>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;