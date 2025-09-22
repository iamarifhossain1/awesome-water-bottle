import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handleCart}) => {
    // console.log(bottle);
    
   const {img, name, price, stock} = bottle;
    
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h3>Price ${price}</h3>
            <p>{stock} remaining</p>
            <button onClick={() => handleCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;