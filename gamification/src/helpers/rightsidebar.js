import {Box, Typography,Grid, List, ListItem} from "@mui/material";
import React, {useState, useEffect} from "react";
import Robotomono from '../fonts/robotomono.js';
import {ThemeProvider} from '@mui/material'; //themeprovider is used for custom fonts (robotmono.js) and themes
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Img6 from '../assets/quiz.png';
import Img7 from '../assets/time.png';



const RightBar = () => {
  const [course1Name, setCourse1Name] = useState(null);
  const [quiz1No, setQuiz1No] = useState(null);
  const [estimate1Time, setEstimate1Time] = useState(null);
  const [course2Name, setCourse2Name] = useState(null);
  const [quiz2No, setQuiz2No] = useState(null);
  const [estimate2Time, setEstimate2Time] = useState(null);
  

  useEffect(() => {
    fetch("http://localhost:3001/courses", {
      method: "GET",
      
    })
      .then((response) => response.json())
      .then((data) => {
        setCourse1Name(data[0].name);
        setQuiz1No(data[0].quizes);
        setEstimate1Time(data[0].estimateTime);
        setCourse2Name(data[1].name);
        setQuiz2No(data[1].quizes);
        setEstimate2Time(data[1].estimateTime);
      //  console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
    return(
//   {/* The below is for the calendar*/}
<Box>
        <Box flex={1} p={2} sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Grid>
                <Grid item xs ={12} sx={{border:'2px solid #4f4f4f'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar/>
                    </LocalizationProvider>
                </Grid>
            </Grid>
        </Box>
        <Box flex={1} p={2} sx={{flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid sx={{border:"2px solid 4f4f4f4"}}>
        <Grid item xs ={8} bgcolor="#D0C7E5" sx={{border:'10px solid #8E68E6', alignItems:"center", minWidth:"250px"}}>
          <Typography variant="h6" p={2} sx={{fontFamily:"Gamer"}}>Course</Typography>        
            <List>
              <ListItem>
                <Typography sx={{fontSize:"13px"}}>{course1Name}</Typography>
              </ListItem>
              <ListItem>
                <img src={Img6} alt="Quiz" style={{ width: '20px', height: '20px' }} />
                <Typography sx={{fontSize:"10px"}}> &nbsp;{quiz1No}  Quizzes</Typography>
              </ListItem>
              <ListItem>
                <img src={Img7} alt="Time" style={{ width: '20px', height: '20px' }} />
                <Typography sx={{fontSize:"10px"}}> &nbsp;{estimate1Time} mins</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <br />
        <Grid sx={{border:"2px solid 4f4f4f4"}}>
        <Grid item xs ={8} bgcolor="#e3e9df" sx={{border:'10px solid #c5d1be', alignItems:"center", minWidth:"250px"}}>
          <Typography variant="h6" p={2} sx={{fontFamily:"Gamer"}}>Course</Typography>        
            <List>
              <ListItem>
                <Typography sx={{fontSize:"13px"}}>{course2Name}</Typography>
              </ListItem>
              <ListItem>
                <img src={Img6} alt="Quiz" style={{ width: '20px', height: '20px' }} />
                <Typography sx={{fontSize:"10px"}}> &nbsp;{quiz2No} Quizzes</Typography>
              </ListItem>
              <ListItem>
                <img src={Img7} alt="Time" style={{ width: '20px', height: '20px' }} />
                <Typography sx={{fontSize:"10px"}}> &nbsp;{estimate2Time} mins</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RightBar;