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

const removeSingleDataFromStorage = id => {
    const stored = localStorage.getItem('shopping-cart');
    if (stored) {
        const shoppingCart = JSON.parse(stored);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const removeFullCartFromStorage = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    setLocalStorageData,
    loadData,
    removeSingleDataFromStorage,
    removeFullCartFromStorage
}