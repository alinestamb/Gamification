// import "./navbar.css"
import React from 'react'
import {AppBar,Toolbar,Typography, Button, Box} from '@mui/material';
import { grey, blueGrey} from '@mui/material/colors';




const pages = ['HOW TO PLAY', 'START LEARNING', 'ABOUT US']
const Navbar = () => {
    return(
        <React.Fragment>
            <AppBar sx={{background: grey[800]}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize: '2em', 
                        letterSpacing: '.3rem',
                        color: blueGrey[50],
                        textDecoration: 'none',
                        }}
                    >
                        GAMIFYING
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ 
                                my: 2, 
                                color: grey[800], 
                                display: 'block', 
                                float:"right", 
                                margin: 3, 
                                width:200,
                                height:40,
                                fontSize: '1em',
                                fontWeight: 700,
                                backgroundColor: "#C1C1C1",                              
                                padding: 1,
                                borderRadius:0,
                                "&:hover":{backgroundColor: grey[50]} 
                            }}
                        >
                        {page}
                         </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
};

export default Navbar;
