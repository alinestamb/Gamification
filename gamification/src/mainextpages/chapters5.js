import Sidebar from '../helpers/leftsidebar';
import Middlebar5 from '../helpers/middlebar_chapters5';
import RightBar from '../helpers/rightsidebar';
import Navbar from '../components/navbar';
import backgroundImg from '../assets/ai.png'; // Import the image
import '../fonts/fonts.css';

import { Grid, Typography, Box, Button} from '@mui/material'; 
import React from 'react';




const Chapters2 = () => {
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
                <Middlebar5/>

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
  
export default Chapters2;

