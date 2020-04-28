import React from 'react';
import logo from '../../images/logo2.png'
import image from '../../images/bannerbackground.png'
import './Header.css'

const Header = () => {
    return ( 
    
       <div>
            <div className="res-header">
              <nav>
                <a href="/home"><img src={logo} alt=""/></a>
            
                  <a className="title" href="/sign"><button className="btn-danger signUp"> Sign up</button> </a>
                  <a className="title" href="/login">Login</a>
                
              </nav>
            </div>
            <div className="background-img1">
                
                <img src={image} alt=""/>
            
                
                
            </div>
       </div>
       
    );
};

export default Header;