const getCartFromLocalStorage = () => {
    const getCart = localStorage.getItem('cart');
    if (getCart) {
        const parseCart = JSON.parse(getCart);
        return parseCart;
    }
    return [];
}


const saveCartToLocalStorage = cart => {
    const stringifiedCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifiedCart)
}

const addItemToCartFromLocalStorage = id => { 
    const cart = getCartFromLocalStorage();
    cart.push(id);
    saveCartToLocalStorage(cart)
}