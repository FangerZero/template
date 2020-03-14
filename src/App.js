import React from 'react';
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Router from './Router';
import Navigation from './Common/Navigation';
import Footer from './Common/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;