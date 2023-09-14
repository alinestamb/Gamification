import React from 'react'
import Navbar from '../components/navbar'
import { Grid } from '@mui/material';

const startlearning = () => {
    return(
        <div>
            <Navbar /> 
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    {/* Left Column */}
                    {/* Add your content for the left column here */}
                </Grid>
                <Grid item xs={4}>
                 {/* Middle Column */}
                 {/* Add your content for the middle column here */}
                </Grid>
                <Grid item xs={4}>
                {/* Right Column */}
                {/* Add your content for the right column here */}
                </Grid>   
            </Grid>
        </div>
    );

};

export default startlearning

