import Navbar from '../components/navbar';
import '../fonts/fonts.css';

import '../helpers/quizstyling.css';

import Quiz_Bakcground from "../assets/quizassets/Quiz_Background.png";
import button from "../assets/quizassets/button.png";

import { Grid, Typography, Box, Button} from '@mui/material'; 
import React from 'react';


import aboutus from '../assets/aboutus.gif';
import ai from '../assets/ai.png';



const QuizHome = () => {
  document.body.style.backgroundColor = "#615A5A";
    return (
      <Box sx={{ flexGrow: 1, backgroundColor:"#615A5A" }}>
        <Navbar/>
        
        <div>
        <img src={Quiz_Bakcground} alt="Quiz Background" style={{ 
          maxWidth: '100%', 
          paddingTop:'13px'
          }} />
        </div>

        <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
        <a href="startlearning">
        <img src={button} alt="buttonpng"   />
        </a>
      </button>


      <div class="container-quiz">
        <p>CSS Grid Method</p>
           <div class="quiz-image-stack">
             <div class="quiz-image-stack__item quiz-image-stack__item--top">
                 <img src={aboutus} alt=""/>
             </div>
             <div class="quiz-image-stack__item quiz-image-stack__item--bottom">
                 <img src={ai} alt=""/>
             </div>
           </div>
         <p>Text can go down here yabba dabba do</p>
      </div>
    
    </Box>
    
    );
};
  
export default QuizHome;
