import React, { useState } from 'react';
import FoodItem from '../fooditem/FoodItem';
import foods from '../../fakefoods/foods';

const Dinner = () => {
    const foodItem = foods;
    const [food,setFood]=useState();
    const dinner = foodItem.filter(foods=> foods.categories==="dinner")
    return (
        <div>
            {dinner.map( item => <FoodItem foodItem={item}></FoodItem>)}
        </div>
    );
};

export default Dinner;