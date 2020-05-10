import React, { useState } from 'react';
import foods from '../../fakefoods/foods';
import FoodItem from '../fooditem/FoodItem';

const Breakfast = () => {
    const foodItem= foods;
    const[food,setFood] = useState();
    const breakfast = foodItem.filter( foods => foods.categories==="breakfast")
    return (
        <div>
            {breakfast.map(item=><FoodItem foodItem={item}></FoodItem>)}
        </div>
    );
};

export default Breakfast;