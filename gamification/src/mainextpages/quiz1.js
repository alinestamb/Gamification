import Navbar from '../components/navbar';
import '../fonts/fonts.css';
import '../helpers/quizstyling.css';

import button from "../assets/quizassets/button.png";
import { Grid, Typography, Box, Button} from '@mui/material'; 
import React from 'react';
import Quiz_MC_Background from "../assets/quizassets/Quiz_MC_Background.png";

import Middlebar from '../helpers/middlebar_chapters';

const QuizPages1 = () => {
  document.body.style.backgroundColor = "#615A5A";

  
 let mc_1_or_sa_2 = 1;
 let content;

 if (mc_1_or_sa_2 === 1) {
   content = (
     <div className="question-text" style={{ marginTop: '220px', textSizeAdjust: '100px', color: 'black' }}>
        <div class="multiple-choice-grid">
            <div class="multiple-choice-button">
                  <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz2">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > AI encompasses ML and DL.</div>
                       </a>                       
                  </button>              
             </div>
            <div class="multiple-choice-button">
            <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz2">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > DL encompasses AI and ML </div>
                       </a>                       
                  </button>   
            </div>
            <div class="multiple-choice-button">
            <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz2">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > ML encompasses AI and DL</div>
                       </a>                       
                  </button>  
            </div>  
            <div class="multiple-choice-button">
            <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz2">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > AI encompasses ML but not DL</div>
                       </a>                       
                  </button>  
            </div>
        </div>
    </div>
    
   );
 } else if (mc_1_or_sa_2 === 2) {
   content = (
     <div>
     <div className="question-text" style={{ marginTop: '250px', fontSize: '20px', color: 'black' }}>SHORT ANSWER</div>
     
     </div>
   );
 }



    return (
      <Box sx={{ flexGrow: 1, backgroundColor:"#615A5A" }}>
        <Navbar/>
           <div class="quiz-image-stack">
                <div class="question-no-text" > Question No. 2: </div>
                <div class="question-text"  > Which statement is correct?</div>
                
                {content}
                {/* <button style={{marginLeft: '-210px', marginTop:'260px', width: '149px', height: '44px', paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'10%'}}>
                       <Button sx={{color:'black', fontFamily: "RobotoMonov"}} >
                            NEXT QUESTION
                       </Button>     
                  </button> */}

             <div class="quiz-image-stack__item quiz-image-stack__item--top">
                <img src={Quiz_MC_Background} alt="Quiz MC Background" style={{maxWidth: '150%', padding:'0px',}} />
             </div> 


          </div>
     </Box>
            
    );
};
  
export default QuizPages1;
