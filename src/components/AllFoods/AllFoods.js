import React from 'react';
import foods from '../../fakefoods/foods';
import FoodItem from '../fooditem/FoodItem';


const AllFoods = () => {
     const foodItems =foods;
    
    return (
        <div>
            {foodItems.map( item => <FoodItem foodItem={item}></FoodItem> )}
            
        </div>
    );
};

export default AllFoods;