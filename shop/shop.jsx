import React, { useState } from 'react';
import { data } from '../../cars.js';
import './shop.css';

export const Shop = () => {
    // Initialize counts array with zeros
    const initialCounts = Array(data.length).fill(0);
    const [counts, setCounts] = useState(initialCounts);

    // Function to handle click event and increment count for a specific item
    const handleAddToCart = (index) => {
        const newCounts = [...counts];
        newCounts[index]++;
        setCounts(newCounts);
    };

    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1>Mike's Garage</h1>
            </div>
            <div className='products'>
                {data.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt={item.title} />
                        <div className='attributes'> 
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Color: {item.color}</p>
                            {/* Pass the index to handleAddToCart */}
                            <button className='button' onClick={() => handleAddToCart(index)}>add to Cart</button>
                            {/* Display the count for the current item */}
                            {counts[index]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
