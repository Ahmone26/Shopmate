import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Shoes from './components/Shoes';
import Brands from './components/Brands';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {


  return (
    <div className="App">
          <Router>
            <div>
              <Navbar />
              <div>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/home" component={Home}/>
                  <Route exact path="/women" component={Women}/>
                  <Route exact path="/men" component={Men}/>
                  <Route exact path="/kids" component={Kids}/>
                  <Route exact path="/shoes" component={Shoes}/>
                  <Route exact path="/brands" component={Brands}/>
              </div>
            </div>
          </Router>
    </div>
  );
}

export default App;
