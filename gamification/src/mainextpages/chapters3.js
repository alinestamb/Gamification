// import React from "react";
// import { useParams } from "react-router-dom";
// import sectionsData from "./content";

// chapterData.js

import Sidebar from '../helpers/leftsidebar';
import Middlebar3 from '../helpers/middlebar_chapters3';
import RightBar from '../helpers/rightsidebar';
import Navbar from '../components/navbar';
import backgroundImg from '../assets/ai.png'; // Import the image
import '../fonts/fonts.css';
/*
const chapters = [
    {
      title: "CHAPTER 1",
      sections: [
        {
          title: "01. Introduction",
          link: "/helpers/leftsidebar.js",
        },
        {
          title: "02. Background",
          link: "/chapter1/background",
        },
        {
          title: "03. Literature",
          link: "/chapter1/literature",
        },
      ],
      finalQuiz: "Final Quiz 1",
      image: ch1img, // Define ch1img elsewhere
    },
    {
      title: "CHAPTER 2",
      sections: [
        {
          title: "01. Brainstorming",
          link: "/chapter2/brainstorming",
        },
        {
          title: "02. How might we",
          link: "/chapter2/how-might-we",
        },
        {
          title: "03. Decision-making",
          link: "/chapter2/decision-making",
        },
      ],
      finalQuiz: "Final Quiz 2",
      image: ch2Img, // Define ch2Img elsewhere
    },
  ];
*/
import { Grid, Typography, Box, Button} from '@mui/material'; 
import React from 'react';




const Chapters3 = () => {
    return (
      <Box sx={{ flexGrow: 1, backgroundColor:"#ffe" }}>
        <Navbar/>
{/* top image Row */}
        <Box sx ={{ position: 'relative'}}>
            <img src={backgroundImg} alt="Background" 
            style={{ width: '100%', height:350, borderRadius: 0, opacity: 0.73}} />
            <Typography variant='h3'
            style = {{
                position: 'absolute',
                top:'30%',
                left:'50%',
                transform: 'translate(-50%, -50%)',
                textAlign:'center',
                color: 'white',
                textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'
            }}
            >
                Introduction to Artificial Intelligence
            </Typography>
            <Button style = {{
                position: 'absolute',
                top:'70%',
                left:'50%',
                transform: 'translate(-50%, -50%)',
                textAlign:'center',
                backgroundColor: "#F5B92C", 
                borderRadius: "0px", 
                color: "Black",
                fontFamily:"Gamer",
                border:"2px solid Black"
                // textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'
            }}>
                Start Now!
            </Button>
        </Box>
{/* ACTUAL PAGE CONTENT */}

{/* left Column */}
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} p ={2}>
                <Grid item xs={2.3} md={2.3}> 
                    <Sidebar />
                </Grid>

{/* Middle Column */}
                <Grid item xs={6.7} md={6.7}> 
                <Middlebar3/>

                </Grid>

{/* Right Column */}
                <Grid item xs={3} md={3}> 
                       <RightBar /> 
                </Grid> 
            </Grid> 
        </Box>
    </Box>
    
    );
};
  
export default Chapters3;




// const SectionContent = () => {
//   const { chapter, section } = useParams();

//   const sectionData = sectionsData.find(
//     (data) =>
//       data.chapter === parseInt(chapter) &&
//       data.title.toLowerCase() === section.toLowerCase()
//   );

//   if (!sectionData) {
//     return <div>Section not found.</div>;
//   }

//   return (
//     <div>
//       <h2>{sectionData.title}</h2>
//       <p>{sectionData.content}</p>
//     </div>
//   );
// };

// export default SectionContent;