import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { grey, blueGrey } from '@mui/material/colors';
import { Link, Outlet } from 'react-router-dom';
import Howtoplay from '../mainpages/howtoplay';
import Startlearning from '../mainpages/startlearning';
import Aboutus from '../mainpages/aboutus';
import avatar from '../assets/avatar.png';
// import Profile from './mainextpages/content';
const pages = [
  { component: Howtoplay, path: '/howtoplay', name: "HOW TO PLAY" },
  { component: Startlearning, path: '/startlearning', name: "START LEARNING" },
  { component: Aboutus, path: '/aboutus', name:"ABOUT US"},
];

const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar position = "static" elevation={0} sx={{ background: grey[800] }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Gamer',
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
                key={page.path}
                component={Link}
                to={page.path}
                sx={{
                  my: 2,
                  color: grey[800],
                  display: 'block',
                  float: 'right',
                  margin: 3,
                  width: 200,
                  height: 40,
                  fontSize: '1em',
                  fontWeight: 700,
                  fontFamily:"Gamer",
                  backgroundColor: '#C1C1C1',
                  padding: 1,
                  borderRadius: 0,
                  textAlign: 'center',
                  '&:hover': { backgroundColor: grey[50] },
                }}
              >
                {/* {page.path.replace('/', '')} */}
                {page.name.split(' ').join(' ')} {/* Split and join with spaces */}
              </Button>
            ))}
          </Box>
          <Link to="/profile">
          <img src={avatar} alt="avatar" style={{ height: '60px', width: 'auto', marginRight: '20px' }}/>
          </Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;