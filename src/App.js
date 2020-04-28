import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hotel from './components/hotel/Hotel';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hotel></Hotel>
    </div>
  );
}

export default App;
