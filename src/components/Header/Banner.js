import React from 'react';
import image from '../../images/bannerbackground.png';
import './banner.css'

const Banner = () => {
    return (
        <div>
                <div className="background">
              <img src={image} alt=""/>
              <div className="centered"><h1>Best Food For your Belly!!</h1>
              <input type="text"  placeholder="You can search your desired food Items" />
              <button className="btn btn-danger">search</button>
              </div>
              <div className="time-nav">
                <nav>
                <a href="breakfast">Breakfast</a>
                  <a href="home">Lunch</a>  
                  <a href="dinner">Dinner</a> 
                  <a href="seeAll">see all</a> 
                </nav>
            </div>
            </div>
           
        </div>
    );
};

export default Banner;