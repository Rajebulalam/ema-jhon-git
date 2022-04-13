const setLocalStorageData = id => {
    let shoppingCart = {};

    // Get Data
    const storedData = localStorage.getItem('shopping-cart');
    if (storedData) {
        shoppingCart = JSON.parse(storedData);
    }

    // Add Data
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const loadData = () => {
    let shoppingCart = {};

    // Get Data
    const storedData = localStorage.getItem('shopping-cart');
    if (storedData) {
        shoppingCart = JSON.parse(storedData);
    }
    return shoppingCart;
}



export {
    setLocalStorageData,
    loadData
}