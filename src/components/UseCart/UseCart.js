import { useEffect, useState } from "react";
import { loadData } from "../Storage/Storage";

const UseCart = (products) => {
    const [cart, setCart] = useState([]);
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
    return [cart, setCart];
}

export default UseCart;