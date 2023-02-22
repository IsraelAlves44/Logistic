import './App.css';
import Header from './components/layout/header';
import React from 'react';
import Layout from './components/layout/sidebar';
import { Routes, Route } from "react-router-dom"


import {Home} from './components/pages/Home/Home';
import Shipmentnew from './components/pages/NewShipment/NewShipment';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Layout />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<Shipmentnew />} />
          </Routes>
      </div>
    </>

  );
}

export default App;
