import React from 'react';
import './App.css';
// import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Startlearning from './mainpages/startlearning.js';
import Howtoplay from './mainpages/howtoplay.js';
import Aboutus from './mainpages/aboutus';
import Profile from './mainpages/profile.js';

 
function App() {
  return (
    <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/howtoplay" element={<Howtoplay />} />
          <Route path="/" element={<Startlearning />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
  );
}

export default App;

 
