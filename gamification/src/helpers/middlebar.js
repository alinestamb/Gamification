import { Grid, Typography, Box, ListItem, List, Divider, Link, Button} from '@mui/material'; 
import React, {useState, useEffect} from 'react';
// import Robotomono from '../fonts/robotomono.js';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'; //This line is the progress bar 
import { styled } from '@mui/material/styles';
import ch1img from '../assets/earth.jpg';
import ch2Img from '../assets/Paper.jpg';
import '../helpers/middlebar_chapters.css'
// import Introduction from '../mainextpages/content';

// For the progress Bar 
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

// For the chpaters 
const Chapter = ({ title, sections, finalQuiz, image, isDisabled, greyedOut}) => {
    return (
      <Box sx={{ flexGrow: 1, margin: "30px", opacity: greyedOut}}>
        <Grid sx={{ border: '3px solid #4f4f4f', padding: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={image} alt={`Chapter ${title}`} width={26} height={26} style={{ marginRight: '10px', display:"inline" }} />
          <Typography variant="h6" sx={{fontFamily:"Gamer"}}>{title}</Typography>
        </div>
            <List>
              {sections.map((section, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontFamily:"Gamer"}}>
                  <a href="http://localhost:3000/chapters" style={{ color: 'black', textDecoration: 'none', pointerEvents:isDisabled }}> {section}</a>
                    <Divider flexItem sx={{ width: '60%', textAlign: "left", borderBottom: '2px solid #4f4f4f',}} />
                  </ListItem>
                </React.Fragment>
              ))}
              <Link to="/chapter1/final-quiz" style={{
                    textDecoration: 'none', // Remove underlines
                    color: 'black', // Change the font color to black
                    '&:hover': { backgroundColor:"white"},   
                    }}>
              <ListItem sx={{ fontSize: '15px', fontFamily: "Gamer" ,  pointerEvents:isDisabled }}>{finalQuiz}</ListItem>
              </Link>
            </List>
        </Grid>
      </Box>
    );
  };

  const Middlebar = () => {
    const [completed, setCompleted] = useState(null);
  

  useEffect(() => {
    fetch("http://localhost:3002/1", {
      method: "GET",
      
    })
      .then((response) => response.json())
      .then((data) => {
        setCompleted(data.completed);
      //  console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
    var progressValue = completed/8 *100;

    const courseId = "course1";
    const userId = "1";
    const [chapter1Title, setChapter1Title] = useState(null);
    const [chapter1Section1Title, setChapter1Section1Title] = useState(null);
    const [chapter1Section2Title, setChapter1Section2Title] = useState(null);
    const [chapter1Section3Title, setChapter1Section3Title] = useState(null);
    const [chapter1FinalQuizTitle, setChapter1FinalQuizTitle] = useState(null);
    const [chapter2Title, setChapter2Title] = useState(null);
    const [chapter2Section1Title, setChapter2Section1Title] = useState(null);
    const [chapter2Section2Title, setChapter2Section2Title] = useState(null);
    const [chapter2Section3Title, setChapter2Section3Title] = useState(null);
    const [chapter2FinalQuizTitle, setChapter2FinalQuizTitle] = useState(null);



    useEffect(() => {
      fetch("http://localhost:3001/"+courseId, {
        method: "GET",
        
      })
        .then((response) => response.json())
        .then((data) => {
       
          console.log(data);
          setChapter1Title(data.chapter1.name);
          setChapter1Section1Title(data.chapter1.section1.title);
          setChapter1Section2Title(data.chapter1.section2.title);
          setChapter1Section3Title(data.chapter1.section3.title);
          setChapter1FinalQuizTitle(data.chapter1.finalQuiz);

          setChapter2Title(data.chapter2.name);
          setChapter2Section1Title(data.chapter2.section1.title);
          setChapter2Section2Title(data.chapter2.section2.title);
          setChapter2Section3Title(data.chapter2.section3.title);
          setChapter2FinalQuizTitle(data.chapter2.finalQuiz);
          
        })
        .catch((error) => console.log(error));
    }, []);

    const [isDone, setIsDone] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3002/" +userId, {
        method: "GET",
        
      })
        .then((response) => response.json())
        .then((data) => {
          setIsDone(data.isDone);
          
          console.log(data);
        })
        .catch((error) => console.log(error));
    }, []);

    console.log(isDone);
//console.log(isDone.length);
    let chapter1Done = "";
    let chapter2Done = "";
/*
    for (let i = 0; i<isDone.length; i++)
    {
      console.log(isDone[i]);
      console.log(isDone[i].includes("chapter1.section1"));
      console.log(isDone[i].includes("chapter1"));
 
      if(isDone[i].includes("chapter1") == true)
      {
        chapter1Done = "auto";
        chapter2Done = "none";
      }
      else if (isDone[i].includes("chapter2") == true)
      {
        chapter2Done = "auto";
        chapter1Done = "auto";
      }
      else{
        chapter1Done = "none";
        chapter2Done = "none";
      }

    }*/

    console.log("chapter1Done" + chapter1Done);
    console.log("chapter2Done" + chapter2Done);
let chapter1opacity = "";
let chapter2opacity = "";
    if (chapter1Done = "auto")
    {
      chapter1opacity = 1;
      chapter2opacity = 0.3;
    }
    else if (chapter2Done = "auto")
    {
      chapter1opacity = 1;
      chapter2opacity = 1;
    }
    else
    {
      chapter1opacity = 0.3;
      chapter2opacity = 0.3;
    }



    return(
    <Box sx={{ flexGrow: 1, margin:"30px" }}>
        <Grid sx={{border:'2px solid #4f4f4f', padding:'15px'}}>
            <Typography>PROGRESS BAR: </Typography>
                <BorderLinearProgress variant="determinate" value={progressValue}/>
        </Grid>        
        <Grid>
            <Chapter 
                title={chapter1Title}
                sections ={[
                  <a href="aboutus"  style={{ textDecoration: 'none', color: 'black'}}> {chapter1Section1Title}</a>, 
                  <a href="chapters" style={{ textDecoration: 'none', color: 'black'}}> {chapter1Section2Title}</a>,
                  <a href="chapters" style={{ textDecoration: 'none', color: 'black'}}>  {chapter1Section3Title}</a>
                ]}
                finalQuiz={<a href="quizhome" style={{ textDecoration: 'none', color: 'black'}}>{chapter1FinalQuizTitle}</a>}
                image={ch1img}
                isDisabled={chapter1Done}
                greyedOut = {chapter1opacity}
                />
            <Chapter class="chapter2"
                title={chapter2Title}
                sections={[
                  <a href="aboutus" style={{ textDecoration: 'none', color: 'black'}}>   {chapter2Section1Title}</a>, 
                  <a href="chapters" style={{ textDecoration: 'none', color: 'black'}}>  {chapter2Section2Title}</a>,
                  <a href="chapters" style={{ textDecoration: 'none', color: 'black'}}> {chapter2Section3Title}</a>
                ]}
                finalQuiz={<a href="quizhome" style={{ textDecoration: 'none', color: 'black', pointerEvents: chapter2Done}}>{chapter2FinalQuizTitle}</a>}
                image={ch2Img}
                isDisabled={chapter2Done}
                greyedOut = {chapter2opacity}
                />
            </Grid> 
</Box>
    );
};
export default Middlebar