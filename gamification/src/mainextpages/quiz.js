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

  
 let mc_1_or_sa_2 = 1;
 let content;

 if (mc_1_or_sa_2 === 1) {
   content = (
     <div className="question-text" style={{ marginTop: '220px', textSizeAdjust: '100px', color: 'black' }}>
        <div class="multiple-choice-grid">
            <div class="multiple-choice-button"
            
            onMouseOver={(e) => { e.target.style.filter = 'brightness(50%)'; }}
            onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
            >
               <button style={{color:'black', fontFamily: "RobotoMonov"}} > NXT QUESTION 
                                                  </button>
                                                  
             </div>
            <div class="multiple-choice-button">
            <button style={{color:'black', fontFamily: "RobotoMonov"}} > NXT Answer 2 </button>
            </div>
            <div class="multiple-choice-button">
            <button style={{color:'black', fontFamily: "RobotoMonov"}} > NXT answer 3 </button></div>  
            <div class="multiple-choice-button">
            <button style={{color:'black', fontFamily: "RobotoMonov"}} > NXT answer 4 </button>
            </div>
        </div>
    </div>
    
   );
 } else if (mc_1_or_sa_2 === 2) {
   content = (
     <div className="question-text" style={{ marginTop: '250px', fontSize: '20px', color: 'black' }}>SHORT ANSWER</div>
   );
 }



    return (
      <Box sx={{ flexGrow: 1, backgroundColor:"#615A5A" }}>
        <Navbar/>
           <div class="quiz-image-stack">
                <div class="question-no-text" > Question No. 1: </div>
                <div class="question-text"  > What is the description of an AI, a per the quote given by the author .... ?</div>
                
                {content}
                               
             <div class="quiz-image-stack__item quiz-image-stack__item--top">
                <img src={Quiz_MC_Background} alt="Quiz MC Background" style={{maxWidth: '150%', padding:'0px',}} />
             </div> 

             <div class="quiz-image-stack__item--bottom">
                  <button class="quiz-button" style={{paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'100%'}}>
                       <a href="startlearning">
                       <Button sx={{color:'black', fontFamily: "RobotoMonov"}} >
                            NXT QUESTION
                       </Button> 
                       </a>                     
                  </button>
             </div>

          </div>
     </Box>
            
    );
};
  
export default QuizPages;
