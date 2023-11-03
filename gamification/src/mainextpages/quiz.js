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

  
 let questionNo = 1
 let content;
console.log(questionNo);
 if (questionNo === 1) {
   content = (
    <div style={{marginLeft: '-700%'}}>
    <div class="question-no-text" > Question No. 1: </div>
                <div class="question-text"  > What is the description of an AI, a per the quote given by the author .... ?</div>
    <div className="question-text" style={{ marginTop: '220px', textSizeAdjust: '100px', color: 'black' }}>
        <div class="multiple-choice-grid">
            <div class="multiple-choice-button">
                  <button onClick = { console.log('clicked')} style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}} >
                       
                            <img onClick = { console.log('clicked')} src={button} alt="buttonpng"   />  
                            <div onClick = { console.log('clicked')}class="button-text"> Answer 1</div>

                            {/* onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                            onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }} */}
                                             
                  </button>              
             </div>
            <div class="multiple-choice-button">
            <button onClick = { questionNo++} style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > Answer 2</div>
                                             
                  </button>   
            </div>
            <div class="multiple-choice-button">
            <button onClick = { questionNo++} style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > Answer 3</div>
                                             
                  </button>  
            </div>  
            <div class="multiple-choice-button">
            <button onClick = { questionNo++} style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                     
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > Answer 4</div>
                                              
                  </button>  
            </div>
        </div>
    </div>
    </div>
    
   );
 } else if (questionNo === 2) {
   content = (
    <div>
    <div class="question-no-text" > Question No. 2: </div>
                <div class="question-text"  > What is the description of an AI, a per the quote given by the author .... ?</div>
    <div className="question-text" style={{ marginTop: '220px', textSizeAdjust: '100px', color: 'black' }}>
        <div class="multiple-choice-grid">
            <div class="multiple-choice-button">
                  <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz1">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > Answer 1</div>
                       </a>                       
                  </button>              
             </div>
            <div class="multiple-choice-button">
            <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz1">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > Answer 2</div>
                       </a>                       
                  </button>   
            </div>
            <div class="multiple-choice-button">
            <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz1">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > Answer 3</div>
                       </a>                       
                  </button>  
            </div>  
            <div class="multiple-choice-button">
            <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz1">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > Answer 4</div>
                       </a>                       
                  </button>  
            </div>
        </div>
    </div>
    </div>
   );
 }



    return (
      <Box sx={{ flexGrow: 1, backgroundColor:"#615A5A" }}>
        <Navbar/>
           <div class="quiz-image-stack">
                
                
                {content}
                <button style={{marginLeft: '-210px', marginTop:'260px', width: '149px', height: '44px', paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'10%'}}>
                      <a href="quiz1">
                       <Button sx={{color:'black', fontFamily: "RobotoMonov"}} >
                            NEXT QUESTION
                       </Button>     
                       </a>
                  </button>

             <div class="quiz-image-stack__item quiz-image-stack__item--top">
                <img src={Quiz_MC_Background} alt="Quiz MC Background" style={{maxWidth: '150%', padding:'0px',}} />
             </div> 


          </div>
     </Box>
            
    );
};
  
export default QuizPages;
