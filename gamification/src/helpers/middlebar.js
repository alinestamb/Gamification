import { Grid, Typography, Box, ListItem, List, Divider, Link, Button} from '@mui/material'; 
import React from 'react';
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
                  <a href="chapters" style={{ color: 'black', textDecoration: 'none' }}> {section}</a> 
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
    return(
    <Box sx={{ flexGrow: 1, margin:"30px" }}>
        <Grid sx={{border:'2px solid #4f4f4f', padding:'15px'}}>
            <Typography>PROGRESS BAR: </Typography>
                <BorderLinearProgress variant="determinate" value={50}/>
        </Grid>        
        <Grid>
            <Chapter
                title="CHAPTER 1"
                sections={["01. Introduction", "02. Background","03. Literature"]}
                finalQuiz="Final Quiz 1"
                image={ch1img}
                />
            <Chapter
                title="CHAPTER 2"
                sections={["01. Brainstorming", "02. How might we", "03. Decision-making"]}
                finalQuiz="Final Quiz 2"
                image={ch2Img}
                />
            </Grid> 
</Box>
    );
};
export default Middlebar