import React , {useState, useEffect} from 'react';
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
  let [avatar, setAvatar] = useState(null);
  let userId = '1';
  useEffect(() => {
    fetch("http://localhost:3002/" +userId, {
      method: "GET",
      
    })
      .then((response) => response.json())
      .then((data) => {
        setAvatar (data.avatar);
      })
      .catch((error) => console.log(error));
  }, []);

  let avatarName = '';
        
  if (avatar == "avatar1") {
    avatarName =
      "http://localhost:3000//static/media/avatar1.b360894f.png";
  }
  if (avatar == "avatar2") {
    avatarName =
      "http://localhost:3000/static/media/avatar2.9d911d91.png";
  }
  if (avatar == "avatar3") {
    avatarName =
      "http://localhost:3000/static/media/avatar3.96c870ce.png";
  }
  if (avatar == "avatar4") {
    avatarName =
      "http://localhost:3000/static/media/avatar4.ed412a38.png";
  }
  if (avatar == "avatar5") {
    avatarName =
      "http://localhost:3000/static/media/avatar5.1f6e08da.png";
  }
  if (avatar == "avatar6") {
    avatarName =
      "http://localhost:3000/static/media/avatar6.d62244f6.png";
  }
  if (avatar == "avatar7") {
    avatarName =
      "http://localhost:3000/static/media/avatar7.588c5a28.png";
  }
  if (avatar == "avatar8") {
    avatarName =
      "http://localhost:3000/static/media/avatar8.f338543c.png";
  }
  if (avatar == "avatar9") {
    avatarName =
      "http://localhost:3000/static/media/avatar9.661709cd.png";
  }
  if (avatar == "avatar10") {
    avatarName =
      "http://localhost:3000/static/media/avatar10.3b21522a.png";
  }
  if (avatar == "avatar11") {
    avatarName =
      "http://localhost:3000/static/media/avatar11.4ab874b4.png";
  }
  if (avatar == "avatar12") {
    avatarName =
      "http://localhost:3000/static/media/avatar12.21e354cd.png";
  }
  if (avatar == "avatar13") {
    avatarName =
      "http://localhost:3000/static/media/avatar13.3b43239c.png";
  }
  if (avatar == "avatar14") {
    avatarName =
      "	http://localhost:3000/static/media/avatar14.fbff46c3.png";
  }
  if (avatar == "avatar15") {
    avatarName =
      "http://localhost:3000/static/media/avatar15.6478f264.png";
  }

  if (avatar == "avatar16") {
    avatarName =
      "http://localhost:3000/static/media/avatar16.e4601f42.png";
  }
  if (avatar == "avatar17") {
    avatarName =
      "http://localhost:3000/static/media/avatar17.f0daa163.png";
  }
  if (avatar == "avatar18") {
    avatarName =
      "http://localhost:3000/static/media/avatar18.98b154b1.png";
  }
  if (avatar == "avatar19") {
    avatarName =
      "http://localhost:3000/static/media/avatar19.b21925ca.png";
  }
  if (avatar == "avatar20") {
    avatarName =
      "http://localhost:3000/static/media/avatar20.40c1dc41.png";
  }
  if (avatar == "avatar21") {
    avatarName =
      "http://localhost:3000/static/media/avatar21.d37eb13c.png";
  }
  if (avatar == "avatar22") {
    avatarName =
      "http://localhost:3000/static/media/avatar22.b57fab9c.png";
  }
  if (avatar == "avatar23") {
    avatarName =
      "http://localhost:3000/static/media/avatar23.4f7c4f1e.png";
  }
  if (avatar == "avatar24") {
    avatarName =
      "http://localhost:3000/static/media/avatar24.11cb3ac8.png";
  }
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
          <img src={avatarName} alt="avatar" style={{ height: '60px', width: 'auto', marginRight: '20px' }}/>
          </Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </React.Fragment>
  );
};

export default Navbar;