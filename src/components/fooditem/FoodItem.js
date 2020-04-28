import React from 'react';
import './fooditem.css';

const FoodItem = (props) => {
    console.log(props.foodItem.name);
    const{name,image,price,title,description}=props.foodItem;
    return (
        <div>
          <div >
          <div className=" col-md-4 food-container">
              <img src={image} alt=""/>
              <h6>{name}</h6>
              <h3>${price}</h3>
              <h6> <small>{title}</small></h6>
             

             
            </div>
          </div>
        </div>
    );
};

export default FoodItem;