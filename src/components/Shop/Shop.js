import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { loadData, setLocalStorageData } from '../Storage/Storage';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

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
        for(const id in storedData){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedData[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            setCart(savedCart);
        }
    }, [products])

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;