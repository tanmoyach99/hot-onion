import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Lunch from './components/lunch/Lunch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dinner from './components/Dinner/Dinner';
import Breakfast from './components/Breakfast/Breakfast';
import AllFoods from './components/AllFoods/AllFoods';
import FoodDetails from './components/Fooddetails/FoodDetails';
import Banner from './components/Header/Banner';
import Footer from './components/FOOTER/Footer';
import FooterDeatils from './components/FOOTER/FooterDeatils';
import FooterTop from './components/FOOTER/FooterTop';
import SignUp from './components/Login/SignUp';


function App() {
  return (
    <div className="App">
       
      
    
      <Router>
      <Header></Header>
      
        <Switch>
          
        
          <Route path="/home"> 
           
           <Banner></Banner>
            <Lunch></Lunch>
            <FooterDeatils></FooterDeatils>
            <FooterTop></FooterTop>
           </Route>
          <Route path="/dinner">
            
            <Banner></Banner>
            <Dinner></Dinner>
            <FooterDeatils></FooterDeatils>
            <FooterTop></FooterTop>
          </Route>
          <Route path="/breakfast">
          
          <Banner></Banner>
            <Breakfast></Breakfast>
            <FooterDeatils></FooterDeatils>
            <FooterTop></FooterTop>
          </Route>
          <Route path="/seeAll">
          
          <Banner></Banner>
            <AllFoods></AllFoods>
            <FooterDeatils></FooterDeatils>
            <FooterTop></FooterTop>
          </Route>
          <Route path="/:id">
            
          <FoodDetails></FoodDetails>
          </Route>
         
          <Route path="/">
         
           <Banner></Banner>
            <Lunch></Lunch>
            <FooterDeatils></FooterDeatils>
            <FooterTop></FooterTop>
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
