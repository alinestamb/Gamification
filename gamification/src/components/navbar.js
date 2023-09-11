// import "./navbar.css"
import React from 'react'
import {AppBar,Toolbar,Typography} from '@mui/material';



const Navbar = () => {
    return(
        <React.Fragment>
            <AppBar sx={{background: "gray"}}>
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
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        GAMIFYING EDUCATION
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
};

export default Navbar;