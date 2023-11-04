import {Box, Typography,Grid, List, ListItem, Button, ListItemText} from "@mui/material";
import React, {useState, useEffect} from "react";
import Robotomono from '../fonts/robotomono.js';
import {ThemeProvider} from '@mui/material'; //themeprovider is used for custom fonts and themes
import Img1 from '../assets/dailyStreak.png';
import Img2 from '../assets/points.png';
import badge1 from "../assets/badges/badge1.png" ;
import badge2 from "../assets/badges/badge2.png" ;
import badge3 from "../assets/badges/badge3.png" ;
import badge4 from "../assets/badges/badge4.png" ;
import badge5 from "../assets/badges/badge5.png" ;
import badge6 from "../assets/badges/badge6.png" ;
import badge7 from "../assets/badges/badge7.png" ;
import badge8 from "../assets/badges/badge8.png" ;

import Img3 from '../assets/completed.png';


import Leaderboard from "../components/leaderboard.js";
// &nbsp; - space 

const Sidebar = ({}) => {
  const [completed, setCompleted] = useState(null);
  const [dailyStreak, setDailyStreak] = useState(null);
  const [points, setPoints] = useState(null);
  const [name, setName] = useState(null);
  const [badges, setBadges] = useState([]);

  let displayBadge1 = "none";
  let displayBadge2 = "none";
  let displayBadge3 = "none";
  let displayBadge4 = "none";
  let displayBadge5 = "none";
  let displayBadge6 = "none";
  let displayBadge7 = "none";
  let displayBadge8 = "none";

  

  const userId = "1";
  useEffect(() => {
    fetch("http://localhost:3002/" +userId, {
      method: "GET",
      
    })
      .then((response) => response.json())
      .then((data) => {
        setCompleted(data.completed);
        setDailyStreak(data.dailyStreak);
        setPoints(data.points);
        setName(data.name);
        setBadges(data.badges);
        
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
console.log('badges' , badges);



// idk
  displayBadge4 = "auto";
  displayBadge5 = "auto";
  displayBadge8 = "auto";
  displayBadge7 = "auto";
  
  // comment badge 4
  // if how to play badge 5
  // reader finish chapter badge 8
  // personalisation badge 7



  return (
    <ThemeProvider theme={Robotomono}>
    <Box bgcolor="#e5e0e0" flex={1} p={2} sx={{ marginBottom: '20px', border: '2px solid #c1c1c1' }}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ marginBottom: '1px', textAlign: 'center', fontFamily:"Gamer" }}>My Stats</Typography>
          </Grid>
          <Grid item xs={12}>
          <List>
            <ListItem>
          <Typography sx={{textAlign: 'center', fontFamily:"Gamer"}}>{name}</Typography>
          </ListItem>
          </List>
            <List>
              <ListItem>
                <img src={Img1} alt="DailyStreak" style={{ width: '20px', height: '20px' }} />
                <Typography sx = {{fontSize:'12px', fontFamily:"Gamer"}}> &nbsp;Daily Streak: {dailyStreak}</Typography>
              </ListItem>
              <ListItem>
                <img src={Img2} alt="Points" style={{ width: '20px', height: '20px' }} />
                <Typography sx = {{fontSize:'12px', fontFamily:"Gamer"}}>&nbsp;Points: {points}</Typography>
              </ListItem>
              <ListItem>
                <img src={Img3} alt="Completed" style={{ width: '20px', height: '20px' }} />
                <Typography sx = {{fontSize:'12px', fontFamily:"Gamer"}}>&nbsp;Completed: {completed}</Typography>
              </ListItem>
              <ListItem>
                <Typography sx = {{fontSize:'12px', fontFamily:"Gamer"}}>Badges</Typography>&nbsp;
                <br />&nbsp;
                {
                  
              //  badges.map((badges) => <img src={badges} alt={"Badge "+badges} style={{ width: '30px', height: '30px' }} />)
              
                }
                <img src={badge1}
                style={{width:'20%', height:'20%', display: displayBadge1}}
                onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                
                />
                <img src={badge2}
                style={{width:'20%', height:'20%', display: displayBadge2}}
                onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                />
                <img src={badge3}
                style={{width:'20%', height:'20%', display: displayBadge3}}
                onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                />
                <img src={badge4}
                style={{width:'20%', height:'20%', display: displayBadge4}}
                onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                />
                <img src={badge5}
                style={{width:'20%', height:'20%', display: displayBadge5}}
                onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                />
                 <img src={badge6}
                style={{width:'20%', height:'20%', display: displayBadge6}}
                onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                />
                 <img src={badge7}
                style={{width:'20%', height:'20%', display: displayBadge7}}
                onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                />
                 <img src={badge8}
                style={{width:'20%', height:'20%', display: displayBadge8}}
                onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                />

                              
                
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
      {/* Rest of the code for LeaderBoard */}
    <Box bgcolor="#e5e0e0" flex={1} p={4} 
    sx={{ marginBottom: '20px', border: '2px solid #c1c1c1', position: 'relative' }}>
        <Grid spacing={1}>
          <Typography variant="h6" 
          sx={{ marginBottom: '1px', textAlign: 'center', fontFamily:"Gamer" }}
              >LeaderBoard
          </Typography>
          {/* The below are the designs for the leaderboard */}
          <ThemeProvider theme={Robotomono}>
          <Leaderboard></Leaderboard>
            {/*<Button variant = "contained" sx={{
                  width:'200px', 
                  background:'#5a8da1', 
                  marginBottom:'10px',
                  borderRadius:'20px',
                  height: '25px', 
                  fontFamily:"Gamer", 
                  fontSize:"10px",
                  '&:hover': {
                    backgroundColor: '#5a8da1'}}}>
                  <span style={{ color: 'white'}}>1. </span>&nbsp;
                  <span style={{ color: 'white'}}> Lovetostudy </span>&nbsp;
                  <span style={{ color: '#f5b92c'}}>8588 </span>
              </Button>
              <Button variant = "contained" sx={{
                  width:'200px', 
                  background:'#5a8da1', 
                  marginBottom:'10px',
                  borderRadius:'20px',
                  height: '25px',
                  fontFamily:"Gamer", 
                  fontSize:"10px",
                  '&:hover': {
                    backgroundColor: '#5a8da1'}}}>
                  <span style={{ color: 'white' }}>2. </span>&nbsp;
                  <span style={{ color: 'white' }}> Studying </span>&nbsp;
                  <span style={{ color: '#f5b92c' }}>7980 </span>
              </Button>
              <Button variant = "contained" sx={{
                  width:'200px', 
                  background:'#5a8da1', 
                  marginBottom:'10px',
                  borderRadius:'20px',
                  fontFamily:"Gamer", 
                  fontSize:"10px",
                  height: '25px',
                  '&:hover': {
                    backgroundColor: '#5a8da1'}}}>
                  <span style={{ color: 'white' }}>3. </span>&nbsp;
                  <span style={{ color: 'white' }}> studyislife </span>&nbsp;
                  <span style={{ color: '#f5b92c' }}>6800 </span>
              </Button>
              <Button variant = "contained" sx={{
                  width:'200px', 
                  background:'#5a8da1', 
                  marginBottom:'10px',
                  borderRadius:'20px',
                  height: '25px',
                  fontFamily:"Gamer", 
                  fontSize:"10px",
                  '&:hover': {
                    backgroundColor: '#5a8da1'}}}>
                  <span style={{ color: 'white' }}>4. </span>&nbsp;
                  <span style={{ color: 'white' }}> allisstudy </span>&nbsp;
                  <span style={{ color: '#f5b92c' }}>5840 </span>
              </Button>
              <Button variant = "contained" sx={{
                  width:'200px', 
                  background:'#5a8da1', 
                  marginBottom:'10px',
                  borderRadius:'20px',
                  height: '25px',
                  fontFamily:"Gamer", 
                  fontSize:"10px",
                  '&:hover': {
                    backgroundColor: '#5a8da1'}}}>
                  <span style={{ color: 'white' }}>5. </span>&nbsp;
                  <span style={{ color: 'white' }}> studytime </span>&nbsp;
                  <span style={{ color: '#f5b92c' }}>4790 </span>
              </Button>
              <Typography sx = {{fontSize:'20px'}}>ME:</Typography>
              <Button variant = "contained" sx={{
                  width:'200px', 
                  background:'#5a8da1', 
                  marginBottom:'10px',
                  borderRadius:'20px',
                  height: '25px',
                  fontFamily:"Gamer", 
                  fontSize:"10px",
                  '&:hover': {
                    backgroundColor: '#5a8da1'}}}>
                  <span style={{ color: 'white' }}>10. </span>&nbsp;
                  <span style={{ color: 'white' }}> student </span>&nbsp;
                  <span style={{ color: '#f5b92c' }}>1050 </span>
              </Button>
                  */}
            </ThemeProvider>
        </Grid>
      </Box>
    </ThemeProvider>
    );
  };
  
  export default Sidebar;

  // to do 
  // fix th epadding between the divs 