import {Box, Typography,Grid, List, ListItem} from "@mui/material";
import React from "react";
import Robotomono from '../fonts/robotomono.js';
import {ThemeProvider} from '@mui/material'; //themeprovider is used for custom fonts (robotmono.js) and themes
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Img6 from '../assets/quiz.png';
import Img7 from '../assets/time.png';



const RightBar = () => {
  return (
    <Box>
      <Box flex={1} p={2} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid>
          <Grid item xs={12} sx={{ border: '2px solid #4f4f4f', justifyContent: 'center', alignItems: 'center' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
      <Box flex={1} p={2} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: "Gamer" }}>
        <Grid container justify="center" alignItems="center" sx={{ border: "2px solid #4f4f4f4" }}>
          <Grid item xs={8} bgcolor="#D0C7E5" sx={{ border: '10px solid #8E68E6', alignItems: "center", display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" p={2} sx={{ fontFamily: "Gamer" }}>Course</Typography>
            <List>
              <ListItem>
                <Typography sx={{ fontSize: "10px", fontFamily: "Gamer" }}>Learn this subject Content</Typography>
              </ListItem>
              <ListItem>
                <img src={Img6} alt="Quiz" style={{ width: '20px', height: '20px' }} />
                <Typography sx={{ fontSize: "8px" }}> &nbsp;3 Quizzes</Typography>
              </ListItem>
              <ListItem>
                <img src={Img7} alt="Time" style={{ width: '20px', height: '20px' }} />
                <Typography sx={{ fontSize: "8px" }}> &nbsp;70 mins</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <br />
        <Grid sx={{ border: "2px solid #4f4f4f4" }}>
          <Grid item xs={8} bgcolor="#e3e9df" sx={{ border: '10px solid #c5d1be', alignItems: "center", fontFamily: "Gamer", display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" p={2} sx={{ fontFamily: "Gamer" }}>Course</Typography>
            <List>
              <ListItem>
                <Typography sx={{ fontSize: "10px", fontFamily: "Gamer" }}>Learn this subject Content</Typography>
              </ListItem>
              <ListItem>
                <img src={Img6} alt="Quiz" style={{ width: '20px', height: '20px' }} />
                <Typography sx={{ fontSize: "8px" }}> &nbsp;3 Quizzes</Typography>
              </ListItem>
              <ListItem>
                <img src={Img7} alt="Time" style={{ width: '20px', height: '20px' }} />
                <Typography sx={{ fontSize: "8px" }}> &nbsp;70 mins</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RightBar;