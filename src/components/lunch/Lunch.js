import React, { useState } from 'react';
import foods from '../../fakefoods/foods'
import FoodItem from '../fooditem/FoodItem';

const Hotel = () => {
    const foodItem = foods;
    const [food,setfood]=useState();
    const lunch = foodItem.filter(foods=> foods.categories==="lunch")
    console.log(lunch);
    
 
           
    return (
        <div>
            
           
           <div>
             {lunch.map( item => <FoodItem foodItem={item}></FoodItem> )}
            </div>
           
        </div>
        
       
    );
};

export default Hotel;