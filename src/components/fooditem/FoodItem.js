import React from 'react';
import './fooditem.css';
import { Link } from 'react-router-dom';

const FoodItem = (props) => {
   // console.log(props.foodItem.name);
    
    
    const  {name,image,price,title,id} = props.foodItem;

    return (
      <div>  <div className="container">
        <Link to={"/"+id}>
           {
               <div className="col-md-4 food-container">
               <img src={image} alt=""/>
               <h6>{name}</h6>
               <h3>${price}</h3>
               <h6> <small>{title}</small></h6>
             </div>
           } 
            </Link>
          
            
          
        </div>
       
        </div>
    );
};

export default FoodItem;