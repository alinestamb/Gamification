import React from 'react';
import './App.css';
// import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Startlearning from './mainpages/StartLearning';
import Howtoplay from './mainpages/HowToPlay';
import AboutUs from './mainpages/AboutUs';
import Profile from './mainpages/profile';
import Chapters from "./mainextpages/chapters";
 
 
function App() {
  return (
    <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/howtoplay" element={<Howtoplay />} />
          <Route path="/" element={<Startlearning />} />
          <Route path="/profile" element={<Profile />} />
          <Route path = "/chapters" element={<Chapters />} />
          
        </Routes>
    </Router>
  );
}

export default App;

 
