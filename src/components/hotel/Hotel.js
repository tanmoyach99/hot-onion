import React, { useState } from 'react';
import foods from '../../fakefoods/foods';
import FoodItem from '../fooditem/FoodItem';
import './hotel.css'

const Hotel = () => {
    const foodItem= foods;
    const [lunch,setlunch] = useState(foodItem)
    console.log(foodItem);
    return (
        <div>
            <div className="time-nav">
                <nav>
                <a href="/breakfast">Breakfast</a>
                    <a href="/home">Lunch</a>
                    <a href="/dinner">Dinner</a>
                </nav>
            </div>
           <div>
             {lunch.map( lunch => <FoodItem foodItem={lunch}></FoodItem> )}
            </div>
        </div>
        
       
    );
};

export default Hotel;