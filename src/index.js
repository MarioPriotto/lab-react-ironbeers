import './index.css'; 

import App from './App';
import Beers from './pages/Beers/Beers';
import RandomBeer from './pages/RandomBeer/RandomBeer';
import NewBeer from './pages/NewBeer/NewBeer';
import BeersDetailsId from './pages/BeersDetailsId/BeersDetailsId';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals'; 

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/Beers" element={<Beers/>} />
        <Route path="/BeersDetailsId/:id" element={<BeersDetailsId/>} />
        <Route path="/RandomBeer" element={<RandomBeer/>} />
        <Route path="/NewBeer" element={<NewBeer/>} />
        
        <Route path="/" element={<App/>} />
      </Routes>

    </BrowserRouter>  
  </React.StrictMode>
);

reportWebVitals();
