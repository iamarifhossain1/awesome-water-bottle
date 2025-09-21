import React, { use } from 'react';

const Bottles = ({bottlePromise}) => {
    const bottles = use(bottlePromise);
    console.log(bottles);
    
    return (
        <div>
            
        </div>
    );
};

export default Bottles;