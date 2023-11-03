import React from 'react'
import Navbar from '../components/navbar'
import { Box, List, ListItem, ThemeProvider, Typography, Grid, Button, Stack } from '@mui/material';
import '../fonts/fonts.css';
//import img from '../assets/aboutus.jpg';
import img from '../assets/aboutus_2.gif';


const Aboutus = () => {
    const data = [
        {
          userId: "02b",
          comId: "017",
          fullName: "User",
          text: "I think you have a point🤔",
          avatarUrl: "https://ui-avatars.com/api/name=user&background=random",
          replies: [
            {
                "userId": "02a",
                "comId": "013",
                "fullName": "Adam Scott",
                "avatarUrl": "https://ui-avatars.com/api/name=Adam&background=random",
                "text": "Thanks! It took me 1 month to finish this project but I am glad it helped out someone!🥰"
              },
          ]
        }
      ];

    return(
        <Box sx={{ flexGrow: 1, backgroundColor:"#ffe", minHeight: "100vh" }}>
        <Navbar/>
    {/* top image Row */}
            <Box sx ={{ position: 'relative'}}>
                <img src={img} alt="Background" 
                style={{ width: '100%', height:350, borderRadius: 0}} />
                <Typography variant='h2'
                style = {{
                    position: 'absolute',
                    top:'49%',
                    left:'48%',
                    transform: 'translate(-50%, -50%)',
                    textAlign:'center',
                    color: '#E7C27D',
                    fontFamily:'Gamer',
                    textShadow: '-2px -2px 0 #504922, 2px -2px 0 #504922, -2px 2px 0 #504922, 2px 2px 0 #504922'
                }}
                >
                    About Us
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center',  alignItems: 'center' }}>
            <Box bgcolor="#E5E0E0" flex={1} p={2} sx={{ marginBottom: '20px', border: '2px solid #c1c1c1', maxWidth: '1200px' }} >
            <Grid item xs={12}>
                    <Typography variant='h5' fontFamily="Gamer">WHO ARE WE</Typography> <hr />
                    <Typography fontFamily="RobotoMonoV"> We are are group of 3 university students who are looking to improve tertiary education.</Typography> <br />
                        <Typography variant='h5' fontFamily="Gamer">MISSION & VISION</Typography> <hr />
                        <Typography fontFamily="RobotoMonoV">
                        With the morale and motivation being low and collaboration between students decreasing significationtly due to the onset of COVID-19, 
                        it is important that learning education is made fun again, even the most difficult topics! The current LMS, used by universities, are teacher-focused.
                        As a result, we have decided to create a gamified LMS which makes learning more fun and is student focused!</Typography> <br />
                        <Typography variant='h5' fontFamily="Gamer">OBJECTIVE</Typography> <hr />
                        <Typography fontFamily="RobotoMonoV">
                        The main objective of this website is to increase user engagement and collaboration through a gamified LMS.</Typography>
            </Grid>
            </Box>
            </Box>
      
        </Box>
    );
};

export default Aboutus
