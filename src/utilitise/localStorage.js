/**
 * 1. to get something from local storage, you will get it as a string
 * 2. convert this to javascript object/array
 */

const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString) {
        const cartInfo = JSON.parse(storedCartString);
        return cartInfo
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToCartFromLocalStorage = id => {
    const cart = getCartFromLocalStorage();
    cart.push(id);

    // save cart to the local storage

    saveCartToLocalStorage(cart)
}

const removeFromLocalStorage = id => { 
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !== id)
    saveCartToLocalStorage(remainingCart);
}
export{getCartFromLocalStorage as getStoredCart, addItemToCartFromLocalStorage as addStoredCart, removeFromLocalStorage as removeFromCart}