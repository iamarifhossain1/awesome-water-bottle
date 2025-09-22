import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'


const Bottles = ({bottlePromise}) => {
    const bottles = use(bottlePromise);
    // console.log(bottles);
    const [cart, setCart] = useState([])
    const handleCart = (bottle) => {
        console.log('cart btn clicked', bottle);
        
    }
    
    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleCart={handleCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;