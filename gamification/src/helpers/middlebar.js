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
const Chapter = ({ title, sections, finalQuiz, image }) => {
    return (
      <Box sx={{ flexGrow: 1, margin: "30px"}}>
        <Grid sx={{ border: '3px solid #4f4f4f', padding: '15px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={image} alt={`Chapter ${title}`} width={26} height={26} style={{ marginRight: '10px', display:"inline" }} />
          <Typography variant="h6" sx={{fontFamily:"Gamer"}}>{title}</Typography>
        </div>
            <List>
              {sections.map((section, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontFamily:"Gamer"}}>
                  <a href="http://localhost:3000/chapters" style={{ color: 'black', textDecoration: 'none' }}> {section}</a>
                    <Divider flexItem sx={{ width: '60%', textAlign: "left", borderBottom: '2px solid #4f4f4f',}} />
                  </ListItem>
                </React.Fragment>
              ))}
              <Link to="/chapter1/final-quiz" style={{
                    textDecoration: 'none', // Remove underlines
                    color: 'black', // Change the font color to black
                    '&:hover': { backgroundColor:"white"},   
                    }}>
              <ListItem sx={{ fontSize: '15px', fontFamily: "Gamer" }}>{finalQuiz}</ListItem>
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

    useEffect(() => {
      fetch("http://localhost:3001/"+courseId, {
        method: "GET",
        
      })
        .then((response) => response.json())
        .then((data) => {
       
          console.log(data);
        })
        .catch((error) => console.log(error));
    }, []);



    return(
    <Box sx={{ flexGrow: 1, margin:"30px" }}>
        <Grid sx={{border:'2px solid #4f4f4f', padding:'15px'}}>
            <Typography>PROGRESS BAR: </Typography>
                <BorderLinearProgress variant="determinate" value={progressValue}/>
        </Grid>        
        <Grid>
            <Chapter
                title="CHAPTER 1"
                sections={[
                  <a href="aboutus" style={{ textDecoration: 'none', color: 'black'}}>   01. Introduction</a>, 
                  <a href="chapters" style={{ textDecoration: 'none', color: 'black'}}>  02. Background</a>,
                  <a href="chapters" style={{ textDecoration: 'none', color: 'black'}}>  03. Literature</a>
                ]}
                finalQuiz={<a href="howtoplay" style={{ textDecoration: 'none', color: 'black'}}>Final Quiz 1</a>}
                image={ch1img}
                />
            <Chapter
                title="CHAPTER 2"
                sections={[
                  <a href="aboutus" style={{ textDecoration: 'none', color: 'black'}}>   01. Brainstorming</a>, 
                  <a href="chapters" style={{ textDecoration: 'none', color: 'black'}}>  02. How Might We</a>,
                  <a href="chapters" style={{ textDecoration: 'none', color: 'black'}}>  03. Decision-Making</a>
                ]}
                finalQuiz={<a href="howtoplay" style={{ textDecoration: 'none', color: 'black'}}>Final Quiz 2</a>}
                image={ch2Img}
                />
            </Grid> 
</Box>
    );
};
export default Middlebar