import { Grid, Typography, Box, ListItem, List, Divider, Link, Button, Paper} from '@mui/material'; 
import React, {useState, useEffect} from 'react';
// import Robotomono from '../fonts/robotomono.js';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'; //This line is the progress bar 
import ch2Img from '../assets/Paper.jpg';
import book from "../assets/book.png";
import '../helpers/middlebar_chapters.css'
// import Introduction from '../mainextpages/content';

// Title:
   // const title = "1. Introduction"; 
  
// For the chapters- book
let nextSection = 0;
let chapterIndex = 1;
let sectionIndex = 1;
let content1 = "";
let content2 = "";
let title = "";

console.log(sectionIndex);

  const Middlebar = () => {
    const [points, setPoints] = useState(null);
    const [section1Title, setSection1Title] = useState(null);
    const [section2Title, setSection2Title] = useState(null);
    const [chapter1Section1Content1, setChapter1Section1Content1] = useState(null);
    const [chapter1Section1Content2, setChapter1Section1Content2] = useState(null);
    const [chapter1Section2Content1, setChapter1Section2Content1] = useState(null);
    const [chapter1Section2Content2, setChapter1Section2Content2] = useState(null);

    
    useEffect(() => {
      fetch("http://localhost:3001/course1", {
        method: "GET",
        
      })
        .then((response) => response.json())
        .then((data) => {
          setPoints(data.chapter1.section1.points);
          setSection1Title(data.chapter1.section1.title);
          setSection2Title(data.chapter1.section2.title);
          setChapter1Section1Content1 (data.chapter1.section1.content1);
          setChapter1Section1Content2 (data.chapter1.section1.content2);
          setChapter1Section2Content1 (data.chapter1.section2.content1);
          setChapter1Section2Content2 (data.chapter1.section2.content2);
        //  console.log(data);
        })
        .catch((error) => console.log(error));
    }, []);
    

    const [isDone, setIsDone] = useState(null);
    const [userPoints, setUserPoints] = useState(null);
    const [ userCompleted, setUserCompleted] = useState(null);

    useEffect(() => {
      fetch("http://localhost:3002/1", {
        method: "GET",
        
      })
        .then((response) => response.json())
        .then((data) => {
          setIsDone(data.isDone);
          setUserPoints(data.points);
          setUserCompleted (data.completed);
        })
        .catch((error) => console.log(error));
    }, []);

    if (chapterIndex == 1 && sectionIndex == 1) {
      title = section1Title;
     content1 = chapter1Section1Content1;
     content2 = chapter1Section1Content2;
    }

    else if (chapterIndex == 1 && sectionIndex == 2) {
      title = section2Title;
      content1 = chapter1Section2Content1;
      content2 = chapter1Section2Content2;
    }
     
    const handleNextSection = () => {
      if (sectionIndex > 1 && sectionIndex < 4){
        sectionIndex++;
        nextSection ++;
      }
      else
      {
        sectionIndex = 1;
        nextSection = nextSection;
      }
     // setUserPoints (points + userPoints);
    //  setUserCompleted (userCompleted++);

    setUserPoints(2);
   // setUserCompleted(2);
      // data to Update to be the values in the text fields on handleChangeValue probable useState
      const dataToUpdate={
          points: userPoints,
          completed: userCompleted,
          
      }
      
      const jsonString = JSON.stringify(dataToUpdate);
    
      const url = "http://localhost:3002/1";
    
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
      
    
      
    }
    
  



    return(
    <Box sx={{ flexGrow: 1, margin:"30px"}}>
       <Typography >
            <h1>  {title}  </h1>  
        </Typography>        
        <div class="book-container">
           <img src={book} alt="Book" style={{ maxWidth: '100%'}} />
            <div class = "left-book scrollbar" style={{fontSize: '25px', top:'40px', paddingRight:'11px', whiteSpace: 'pre-wrap'}}> <br /><p>{content1}</p><br /><br/> </div>
            <div class="right-book"style={{fontSize:'25px', top:'90px', marginRight:'50px', whiteSpace: 'pre-wrap'}}> {content2} </div>
           {/* <div class="right-book"style={{fontSize:'20px', top:'170px'}}>  <br /><br />    - These are some bullet points.<br />
                                                                                            - These are some bullet points.<br />
                                                                                            - These are some more bullet points.<br /><br />
                                                                                             And here is an image about AI.    </div>
                             
            <div class = "right-image">
            <img src={ch2Img} alt="Image" style={{maxWidth: '40%', paddingTop:'280px', paddingLeft:'80px'}} />

                </div>                
    */ }

    
            <div class ="nxtpagebutton nxtpagebutton-text">
            
            <Button sx={{color:'white'}} onClick= {handleNextSection()} >
                NXT PG
               </Button> 
                
            </div>
                     
          
         </div>

         </Box>
  );
};
const handleCompleted = () => {

};


export default Middlebar;