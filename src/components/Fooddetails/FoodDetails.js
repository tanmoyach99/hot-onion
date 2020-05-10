import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import foods from '../../fakefoods/foods';
import './details.css'


const FoodDetails = (props) => {
    
    const {id} = useParams(); 
    const foodItem= foods;
    const[food,setFood]=useState();
    const fd=foodItem.find(fds=>fds.id === parseInt(id));
    console.log(fd);
    


    return (
        <div className="row col-md-8 d-flex ">
        <div>
            <div className=" d-flex details">
               <div className="col-md-6 text">
               <h1>{fd.name}</h1>
               <br/>
                <span><p>{fd.description}</p></span>
                <br/>
                <div>
                <h2>${fd.price} only</h2>
                <button className="btn btn-danger">Add Cart</button>
                </div>
               </div>
                <div className=" col-md-6">
                <img src={fd.image} alt=""/>
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default FoodDetails;