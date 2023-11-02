import React from 'react';
import './App.css';
// import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Startlearning from './mainpages/startlearning.js';
import Howtoplay from './mainpages/howtoplay.js';
import Aboutus from './mainpages/aboutus';
import Profile from './mainpages/profile.js';
import Chapters from "./mainextpages/chapters";
import Chapters2 from "./mainextpages/chapters2";
import Chapters3 from "./mainextpages/chapters3";
import Chapters4 from "./mainextpages/chapters4";
import Chapters5 from "./mainextpages/chapters5";
import Chapters6 from "./mainextpages/chapters6";
import QuizHome from "./mainextpages/quiz_home";
import QuizPages from "./mainextpages/quiz";
 
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
          <Route path = "/chapters2" element={<Chapters2/>}/>
          <Route path = "/chapters3" element={<Chapters3/>}/>
          <Route path = "/chapters4" element={<Chapters4/>}/>
          <Route path = "/chapters5" element={<Chapters5/>}/>
          <Route path = "/chapters6" element={<Chapters6/>}/>
          <Route path="/quizhome" element={<QuizHome/>}/>
          <Route path="/quiz" element={<QuizPages/>} />
        </Routes>
    </Router>
  );
}

export default App;

 
