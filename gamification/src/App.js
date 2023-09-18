import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import startlearning from './mainpages/startlearning';
import howtoplay from './mainpages/howtoplay';
import aboutus from './mainpages/aboutus';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/start-learning" component={startlearning} />
          <Route path="/how-to-play" component={howtoplay} />
          <Route path="/about-us" component={aboutus} />
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return <h1>Welcome to the Home Page</h1>;
};

export default App;

