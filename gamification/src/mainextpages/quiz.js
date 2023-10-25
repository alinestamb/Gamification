import Navbar from '../components/navbar';
import '../fonts/fonts.css';
import '../helpers/quizstyling.css';

import button from "../assets/quizassets/button.png";
import { Grid, Typography, Box, Button} from '@mui/material'; 
import React from 'react';
import Quiz_MC_Background from "../assets/quizassets/Quiz_MC_Background.png";

import Middlebar from '../helpers/middlebar_chapters';


const QuizPages = () => {
  document.body.style.backgroundColor = "#615A5A";
    return (
      <Box sx={{ flexGrow: 1, backgroundColor:"#615A5A" }}>
        <Navbar/>
        
        
           <div class="quiz-image-stack">
                <div class="question-no-text" > Question No. 1: </div>
                <div class="question-text"  > What is the description of an AI, a per the quote given by the author .... ?</div>
             <div class="quiz-image-stack__item quiz-image-stack__item--top">
                <img src={Quiz_MC_Background} alt="Quiz MC Background" style={{maxWidth: '150%', padding:'0px',}} />


             </div>
             <div class="quiz-image-stack__item--bottom">
                  <button class="button" style={{paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="startlearning">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" style={{fontFamily: "RobotoMonov"}} > Next Question</div>
                       </a>                     
                  </button>
             </div>
           
         
      </div>
    
      <Grid item xs={6.7} md={6.7}> 
        <Middlebar/>

        </Grid>
    </Box>
        
 
    
    
    );
};
  
export default QuizPages;
