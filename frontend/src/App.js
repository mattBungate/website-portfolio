import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { TruckDroneDelivery } from './projectPages/TruckDroneDeliveryPage/TruckDroneDelivery';
import { ConnectFour } from './projectPages/ConnectFourPage/ConnectFour';
import { Chess } from './projectPages/ChessPage/Chess';

import { Home } from './Home';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/truck-drone-delivery' element={<TruckDroneDelivery/>}/>
        <Route path='/connectFour' element={<ConnectFour/>}/>
        <Route path='/chess' element={<Chess/>}/>
      </Routes>
    </div>
  );
}


export default App;
