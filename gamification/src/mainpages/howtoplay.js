import React from 'react'
import Navbar from '../components/navbar'
import { Box, List, ListItem, ThemeProvider, Typography, Grid, Button, Stack } from '@mui/material';
// import Robotomono from '../fonts/robotomono';
import '../fonts/fonts.css';
import img from '../assets/howtoplay.png';

const Howtoplay = () => {
    return (
    <Box sx={{ flexGrow: 1, backgroundColor:"#ffe", minHeight: "100vh" }}>
    <Navbar/>
{/* top image Row */}
        <Box sx ={{ position: 'relative'}}>
            <img src={img} alt="Background" 
            style={{ width: '100%', height:300, borderRadius: 0, opacity: 0.73}} />
            <Typography variant='h2'
            style = {{
                position: 'absolute',
                top:'40%',
                left:'50%',
                transform: 'translate(-50%, -50%)',
                textAlign:'center',
                color: '#E7C27D',
                fontFamily:"Gamer",
                textShadow: '-2px -2px 0 #504922, 2px -2px 0 #504922, -2px 2px 0 #504922, 2px 2px 0 #504922'
            }}
            >
                How to Play?
            </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, marginTop:"20px"}} >
            <Grid item xs={12}>
              <List>            
                <Stack direction="row" spacing={2}>
                <ListItem>
                  <Button variant="outlined" disabled style={{borderRadius:"40px", backgroundColor:"#F5B92C", color:"black", height:"90px"}} >
                    <Typography variant='h6' fontFamily="Gamer">01.</Typography> <Typography fontFamily="Gamer">
                        Read through the course content</Typography>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button variant="outlined" disabled style={{borderRadius:"40px", backgroundColor:"#F5B92C", color:"black", height:"90px"}}>
                        <Typography variant='h6' fontFamily="Gamer">02.</Typography> <Typography fontFamily="Gamer">
                            Collect points and ask questions in Q&A to deepen understanding</Typography>
                    </Button>
                </ListItem>
                <ListItem>
                    <Button variant="outlined" disabled style={{borderRadius:"40px", backgroundColor:"#F5B92C", color:"black", height:"90px"}}>
                        <Typography variant='body1' fontFamily="Gamer">03.</Typography> <br/> <Typography variant="body1" fontFamily="Gamer">
                            Attempt the final Quiz and get badges!</Typography>
                    </Button>
                </ListItem>
                </Stack>
              </List>
            </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} p ={5}>
                <Grid item xs={5} md={5}> 
                    <Box bgcolor="#E5E0E0" flex={1} p={2} sx={{ margin: '20px', border: '2px solid #c1c1c1', width:"560px" }}>
                    <Grid xs={12}>
                    <Typography variant='h6' fontFamily="Gamer" gutterBottom>Rules</Typography>
                    <Typography fontFamily="RobotoMonov" gutterBottom sx={{fontSize:"14px"}}>
                        There are three levels of difficulty assigned to each course material and question in the quiz and they each give a different number of points (XP).  
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography>•</Typography>
                            <Button fontFamily="Gamer" style={{backgroundColor:"#68CD31", borderRadius:"40px", color:"white", width:"40px", height:"25px", fontFamily:"Gamer", fontSize:"9px"}}>
                                Easy </Button> &nbsp;
                            <Typography fontFamily="Gamer" sx={{fontSize:"12px"}}>5PX</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>• </Typography>
                            <Button style={{backgroundColor:"#FFCC00", borderRadius:"40px", color:"white", width:"40px", height:"25px", fontFamily:"Gamer", fontSize:"9px"}}>
                                Medium</Button> &nbsp;
                            <Typography fontFamily="Gamer" sx={{fontSize:"12px"}}>10PX</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>• </Typography>
                            <Button style={{backgroundColor:"#CF571A", borderRadius:"40px", color:"white", width:"40px", height:"25px", fontFamily:"Gamer", fontSize:"9px"}}>
                                Hard</Button> &nbsp;
                            <Typography fontFamily="Gamer" sx={{fontSize:"12px"}}>15PX</Typography>
                        </ListItem>
                    </List>
                    <Typography fontFamily="RobotoMonov" gutterBottom sx={{fontSize:"14px"}}>
                    • Some content is locked and that can be accessed once the final exam is completed for a chapter within a course.   
                    </Typography>
                    <Typography fontFamily="RobotoMonov" gutterBottom sx={{fontSize:"14px"}}>
                    • Badges can also be attained for significant achievements at different points of the course.    
                    </Typography>
                    <Typography fontFamily="RobotoMonov" gutterBottom sx={{fontSize:"14px"}}>
                    • The Leaderboard shows the top 5 users who have attained the most number of points.    
                    </Typography>
                    <Typography fontFamily="RobotoMonov" gutterBottom sx={{fontSize:"14px"}}>
                    • The progress bar displays how much you have progressed in the course.    
                    </Typography>
                    </Grid>

                    </Box>

                </Grid>

{/* Right Column */}
                <Grid item xs={7} md={7}> 
                <Box bgcolor="#e3e9df" flex={1} p={2.2} sx={{ margin: '20px', border: '2px solid #c5d1be'}}>
                    <Grid xs={12}>
                    <Typography fontFamily="Gamer" variant="h6">Frequently Asked Questions</Typography> <hr />
                    <Typography fontFamily="RobotoMonov" sx={{fontSize:"16px", color:"Green"}}>1. What is the purpose of this website?</Typography>
                    <Typography fontFamily="RobotoMonov" sx={{fontSize:"14px"}}> The main objective of this website is to increase user engagement and collaboration through a gamified LMS.</Typography>
                    <Typography fontFamily="RobotoMonov" sx={{fontSize:"16px", color:"Green"}}>2. How can I contribute to the discussion?</Typography>
                    <Typography fontFamily="RobotoMonov" sx={{fontSize:"14px"}}> Just click on "Type a response" and then click submit to contribute to the discussion.</Typography>
                    <Typography fontFamily="RobotoMonov" sx={{fontSize:"16px", color:"Green"}}>3. How many times can I attempt the quiz.</Typography>
                    <Typography fontFamily="RobotoMonov" sx={{fontSize:"14px"}}> You can attempt the quiz as many times as you like. We suggest understanding the content 
                    and revising any areas that you may be having trouble with before re-doing the quiz.</Typography>
                    <Typography fontFamily="RobotoMonov" sx={{fontSize:"16px", color:"Green"}}>4. Why can't I access chapter 2?</Typography>
                    <Typography fontFamily="RobotoMonov" sx={{fontSize:"14px"}}> To access the next chapters, you need to first pass the final quiz of the previous chapter.</Typography> <br />
                    <Typography fontFamily="Gamer" variant="h6">MORE QUESTIONS?</Typography> <hr />
                    <Grid>
                    <Stack direction="row">
                        <List>
                        <ListItem><Typography fontFamily="RobotoMonov" sx={{fontSize:"16px"}}> Got more Questions? Contact us on:  
                        <Button fontFamily="RobotoMonov" color = "secondary" href = "https://www.uts.edu.au/" sx={{fontSize:"14px", color:"blue", textAlign:'center',}}>student@uts.edu.au</Button> </Typography></ListItem>
                    </List>
                    </Stack>
                    </Grid>
                    </Grid>
                    </Box>
                </Grid> 
            </Grid> 
        </Box>
    </Box>
    );
  };
  
  export default Howtoplay;

