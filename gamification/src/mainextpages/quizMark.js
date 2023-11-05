import Navbar from '../components/navbar';
import '../fonts/fonts.css';
import '../helpers/quizstyling.css';

import button from "../assets/quizassets/button.png";
import { Grid, Typography, Box, Button} from '@mui/material'; 
import React, {useState, useEffect} from 'react';
import Quiz_MC_Background from "../assets/quizassets/Quiz_MC_Background.png";

import Middlebar from '../helpers/middlebar_chapters';

const QuizMark = () => {
  document.body.style.backgroundColor = "#615A5A";
  const [isDone, setIsDone] = useState([]);
  const [completed, setCompleted] = useState(null);
  
 let mc_1_or_sa_2 = 1;
 let content;
 useEffect(() => {
     fetch("http://localhost:3002/1", {
       method: "GET",
       
     })
       .then((response) => response.json())
       .then((data) => {
         setIsDone(data.isDone);
         setCompleted(data.completed);
       })
       .catch((error) => console.log(error));
   }, []);


 const handleNextSection = (e) => {
     e.preventDefault();
      if ( isDone[3] == "finalQuiz1")
      {
        console.log(true);
        window.location.href='http://localhost:3000 '
      }
      else {

      setIsDone(isDone.push("finalQuiz1"));
    
      
      const dataToUpdate={

         isDone : isDone,
         completed : completed + 1
      }
      const jsonString = JSON.stringify(dataToUpdate);
  
      const url = "http://localhost:3002/1" ;
  
      const options = {
          method: 'PATCH',
          headers : {
              'Content-Type': 'application/json'
          },
          body : jsonString
      }
  
      fetch (url, options)
      .then(response => {
          if (!response.ok)
          {
              throw new Error(`HIIP error ${response.status}`);
          }
          return response.json();
      })
      .then(updatedData => {
          console.log('Data updated: ', updatedData);
      })
      .catch (error => {
          console.log('Error updating data:', error);
      });
      window.location.href='http://localhost:3000'
     }

 }

 if (mc_1_or_sa_2 === 1) {
   content = (
     <div className="question-text" style={{ marginTop: '220px', textSizeAdjust: '100px', color: 'black' }}>
          <br></br>
          <br></br>
          <br></br>
           <div class = "button-text" style = {{color: '#FFD16A', fontSize: '35px', marginLeft: '90%'}}> 3 out of 3 </div>
           
           <button onClick={handleNextSection} style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', marginLeft:'110%', margintop:'-180%'}}>
                       <a href="startLearning">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > Return to home </div>
                       </a>                       
                  </button>  

        {/* <div class="multiple-choice-grid">
            <div class="multiple-choice-button">
                  <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > AI encompasses ML and DL.</div>
                       </a>                       
                  </button>              
             </div>
            <div class="multiple-choice-button">
            <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > DL encompasses AI and ML </div>
                       </a>                       
                  </button>   
            </div>
            <div class="multiple-choice-button">
            <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > ML encompasses AI and DL</div>
                       </a>                       
                  </button>  
            </div>  
            <div class="multiple-choice-button">
            <button style={{ paddingBlock: '0px', paddingInline:'0px', borderWidth:'0px', lineHeight:'0px', margintop:'-100%'}}>
                       <a href="quiz">
                            <img src={button} alt="buttonpng"   />  
                            <div class="button-text" > AI encompasses ML but not DL</div>
                       </a>                       
                  </button>  
            </div>
        </div> */}
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
                <div class="question-no-text" > Marks: </div>
                <div class="question-text"  > You did great! </div>

                
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
  
export default QuizMark;
