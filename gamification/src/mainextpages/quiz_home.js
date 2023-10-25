import Navbar from '../components/navbar';
import '../fonts/fonts.css';
import '../helpers/quizstyling.css';
import Quiz_Background from "../assets/quizassets/Quiz_Background.png";
import button from "../assets/quizassets/button.png";
import { Grid, Typography, Box, Button} from '@mui/material'; 
import React from 'react';


const QuizHome = () => {
  document.body.style.backgroundColor = "#615A5A";
    return (
      <Box sx={{ flexGrow: 1, backgroundColor:"#615A5A" }}>
        <Navbar/>
        
      <div class="container-quiz">
           <div class="quiz-image-stack">
             <div class="quiz-image-stack__item quiz-image-stack__item--top">
                <img src={Quiz_Background} alt="Quiz Background" style={{maxWidth: '150%', paddingTop:'13px'}} />
             </div>
             <div class="quiz-image-stack__item quiz-image-stack__item--bottom">
                  <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > Are You Ready?</div>
                       </a>
                       <div class="white-text"> Let's Get Started! </div>
                       
                  </button>
             </div>
           </div>
         
      </div>
    
    </Box>
    
    );
};
  
export default QuizHome;
