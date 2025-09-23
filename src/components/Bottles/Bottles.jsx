import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addStoredCart, getStoredCart, removeFromCart } from '../../utilitise/localStorage';
import Cart from '../Cart/Cart';


const Bottles = ({bottlePromise}) => {
    const bottles = use(bottlePromise);

    // console.log(bottles);
    const [cart, setCart] = useState([])
    const handleCart = (bottle) => {
        console.log('cart btn clicked', bottle);
        const newCart = [...cart, bottle]
        setCart(newCart);
        // save the product id in the storage
        addStoredCart(bottle.id)

    }

    const handleRemoveItemFromCart = id => { 
            console.log('remove item', id);  
            const remainingCart = cart.filter(bottle => bottle.id !== id)
            setCart(remainingCart)
            removeFromCart(id)
        }

    // useEffect
        useEffect(() => {
            const storeCartIds = getStoredCart();
            // console.log(storeCartIds, bottles);
            const storedCart = [];
            for ( const id of storeCartIds) {
                console.log(id);
                
                const cartBottle = bottles.find(bottle => bottle.id === id)
                if (cartBottle) {
                    storedCart.push(cartBottle)
                    
                }
            }
            
            console.log('stored cart', storedCart);
            setCart(storedCart)
            
        }, [bottles])

    
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Total cart added {cart.length}</p>
            <Cart cart={cart} handleRemoveItemFromCart={handleRemoveItemFromCart}></Cart>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleCart={handleCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;