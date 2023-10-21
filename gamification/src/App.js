import React from 'react';
import './App.css';
// import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Startlearning from './mainpages/startlearning.js';
import Howtoplay from './mainpages/howtoplay.js';
import Aboutus from './mainpages/aboutus';
import Profile from './mainpages/profile.js';
import Chapters from "./mainextpages/chapters";
import QuizHome from "./mainextpages/quiz_home";
 
function App() {
  return (
    <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/howtoplay" element={<Howtoplay />} />
          <Route path="/" element={<Startlearning />} />
          <Route path="/startlearning" element={<Startlearning />} />
          <Route path="/profile" element={<Profile />} />
          <Route path = "/chapters" element={<Chapters/>}/>
          <Route path="/quizhome" element={<QuizHome/>}/>
        </Routes>
    </Router>
  );
}

export default App;

 
