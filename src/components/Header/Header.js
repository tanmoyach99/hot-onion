import React from 'react';
import logo from '../../images/logo2.png'
import './Header.css'
import { NavLink } from 'react-router-dom';


const Header = () => {

    return ( 
    
       <div>
            <div className="res-header">
              <nav>
                <a href="/home"><img src={logo} alt=""/></a>
            
                 <NavLink to="/sign"><button  className=" btn btn-danger signUp"> Sign up</button></NavLink> 
                  <a className="login" href="/login">Login</a>
                
              </nav>
            </div>
          
            
                
            
           
       </div>
       
    );
};

export default Header;