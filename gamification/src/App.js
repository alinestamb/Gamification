import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import startlearning from './mainpages/StartLearning';
import howtoplay from './mainpages/HowToPlay';
import aboutus from './mainpages/AboutUs';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/start-learning" component={startlearning} />
          <Route path="/how-to-play" component={howtoplay} />
          <Route path="/about-us" component={aboutus} />
        </Routes>
      </div>
    </Router>
  );
}
 
const HomePage = () => {
  return <h1>Welcome to the Home Page</h1>;
};

export default App;