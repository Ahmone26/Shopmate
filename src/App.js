import React from 'react';
import { Router } from '@reach/router';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Shoes from './components/Shoes';
import Brands from './components/Brands';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {
  const navLinks = [
    {
      text: 'Women',
      path: '/women'
    },
    {
      text: 'Men',
      path: '/men'
    },
    {
      text: 'Kids',
      path: '/kids'
    },
    {
      text: 'Shoes',
      path: '/shoes'
    },
    {
      text: 'Brands',
      path: '/brands'
    }
  ]

  return (
    <div className="App">
          <Navbar 
            navLinks = {navLinks}
            />
          <Router>
              <Home path="/home" />
              <Women path="/women" />
              <Men path="/men" />
              <Kids path="/kids" />
              <Shoes path="/shoes" />
              <Brands path="/brands" />
          </Router>
    </div>
  );
}

export default App;
