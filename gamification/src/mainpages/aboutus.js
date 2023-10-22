import React from 'react'
import Navbar from '../components/navbar'
import { Box, List, ListItem, ThemeProvider, Typography, Grid, Button, Stack } from '@mui/material';
import '../fonts/fonts.css';
//import img from '../assets/aboutus.jpg';
import img from '../assets/aboutus_2.gif';


const Aboutus = () => {
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
        </Box>
    );
};

export default Aboutus
