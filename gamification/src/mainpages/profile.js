// this page is to create the profile/avatar 
import React , {useState, useEffect} from 'react'
import Navbar from '../components/navbar'
import { Box, Grid, Typography, List, ListItem, Item, Button} from '@mui/material';
// import Robotomono from '../fonts/robotomono';
import '../fonts/fonts.css';
import avatar from '../assets/avatar.png';
import TextField from '@mui/material/TextField';
import courseImg from '../assets/ai.png'; // Import the image

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



import avatar1 from '../assets/profileavatars/avatar1.png';
import avatar2 from '../assets/profileavatars/avatar2.png';
import avatar3 from '../assets/profileavatars/avatar3.png';
import avatar4 from '../assets/profileavatars/avatar4.png';
import avatar5 from '../assets/profileavatars/avatar5.png';
import avatar6 from '../assets/profileavatars/avatar6.png';
import avatar7 from '../assets/profileavatars/avatar7.png';
import avatar8 from '../assets/profileavatars/avatar8.png';
import avatar9 from '../assets/profileavatars/avatar9.png';
import avatar10 from '../assets/profileavatars/avatar10.png';
import avatar11 from '../assets/profileavatars/avatar11.png';
import avatar12 from '../assets/profileavatars/avatar12.png';
import avatar13 from '../assets/profileavatars/avatar13.png';
import avatar14 from '../assets/profileavatars/avatar14.png';
import avatar15 from '../assets/profileavatars/avatar15.png';
import avatar16 from '../assets/profileavatars/avatar16.png';
import avatar17 from '../assets/profileavatars/avatar17.png';
import avatar18 from '../assets/profileavatars/avatar18.png';
import avatar19 from '../assets/profileavatars/avatar19.png';
import avatar20 from '../assets/profileavatars/avatar20.png';
import avatar21 from '../assets/profileavatars/avatar21.png';
import avatar22 from '../assets/profileavatars/avatar22.png';
import avatar23 from '../assets/profileavatars/avatar23.png';
import avatar24 from '../assets/profileavatars/avatar24.png';


const userId = "1";
let setName = "";
let setLink = "";
let setBio = "";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));


const Profile = () => {
}




export default function CustomizedDialogs() {
    
    let [completed, setCompleted] = useState(null);
    let [dailyStreak, setDailyStreak] = useState(null);
    let [points, setPoints] = useState(null);
    let [UserName, setName] = useState(null);
    let [badges, setBadges] = useState([]);
    let [bio, setBio] = useState(null);
    let [link, setLink] = useState(null);
    let [courseName, setCourseName] = useState(null);
    let BadgeName = "";
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setName(UserName);
        setBio (bio);
        setLink (link);
        // data to Update to be the values in the text fields on handleChangeValue probable useState
        const dataToUpdate={
            name: UserName,
            links: bio,
            bio: link,
        }
        const jsonString = JSON.stringify(dataToUpdate);
    
        const url = "http://localhost:3002/" +userId;
    
        const options = {
            method: 'PATCH',
            headers : {
                'Content-Type': 'application/json'
            },
            body : jsonString
        }
    
        fetch (url, options)
        .then(response => {
            if (!response.ok)
            {
                throw new Error(`HIIP error ${response.status}`);
            }
            return response.json();
        })
        .then(updatedData => {
            console.log('Data updated: ', updatedData);
        })
        .catch (error => {
            console.log('Error updating data:', error);
        });
        
    
    };
    
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
          setBio(data.bio);
          setLink(data.links);
          setCourseName(data.enrolled);
          
          console.log(data);
        })
        .catch((error) => console.log(error));
    }, []);

    
        const [open, setOpen] = React.useState(false);
        const [open1, setOpen1] = React.useState(false);
        const [selectedAvatar, setSelectedAvatar] = useState(null);

            
        const handleClickOpen_avatar = () => {
          setOpen(true);
          setSelectedAvatar(avatar);
        };

        const handleClickOpen_badge = () => {
            setOpen1(true);
          };

        const handleClose = () => {
          setOpen(false);
          setOpen1(false);
        };

        const handleImageClick = (avatar) => {
            setSelectedAvatar(avatar);
        }
      
        return (
        <Box sx={{ flexGrow: 1, backgroundColor:"#ffe", }}>
        <Navbar />
        <Box sx={{flexGrow: 1, backgroundColor: "#ffe",
            display: "flex", // Ensure full viewport height
            flexDirection: "column", // arrange vertically
            overflowX: "hidden", // Prevent horizontal scrolling
            }}>
            {/* The below is for the first part of the page  */}
        <Grid container spacing={2} style={{margin:"50px", marginLeft:"100px"}}>
                <Grid item xs={4} md={4} direction={"column"} alignItems={"center"} > 
                <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={avatar} alt="avatar" style={{ height: '270px', width: 'auto' }} />
                   
                    <Button variant="outlined" onClick={handleClickOpen_avatar} style={{marginBottom: '20px'}}>
                        Customise!
                        </Button>
                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                        <DialogTitle sx={{ m: 0, p: 2 }}>            
                        🎨🎨 Customise Your Avatar!
                        </DialogTitle>
                        <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            fontFamily:'RobotoMonov',
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                        >
                        <CloseIcon />
                        </IconButton>
                        
                        <DialogContent dividers>
                        <Typography>
                        Pick one of the images below, and press save.
                        </Typography>

                            
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <img
                                    src={avatar1}
                                    alt="Avatar 1"
                                    data-avatar="avatar1" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar1` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar1')} 
                                    />

                                <img
                                    src={avatar2}
                                    alt="Avatar 2" 
                                    data-avatar="avatar2" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar2` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar2')} 
                                    />
                                    
                                <img
                                    src={avatar3}
                                    alt="Avatar 3"
                                    data-avatar="avatar3" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar3` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar3')} 
                                    />
                                    
                                <img
                                    src={avatar4}
                                    alt="Avatar 4"
                                    data-avatar="avatar4"

                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar4` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar4')} 
                                    />
                                    
                                <img
                                    src={avatar5}
                                    alt="Avatar 5"
                                    data-avatar="avatar5" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        border: selectedAvatar === `avatar5` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar5')} 
                                    />
                                    
                                <img
                                    src={avatar6}
                                    alt="Avatar 6"
                                    data-avatar="avatar6" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar6` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar6')} 
                                    />
                                    
                                <img
                                    src={avatar7}
                                    alt="Avatar 7"
                                    data-avatar="avatar7" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar7` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar7')} 
                                    />
                                    
                                <img
                                    src={avatar8}
                                    alt="Avatar 8"
                                    data-avatar="avatar8" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar8` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar8')} 
                                    />
                                    
                                <img
                                    src={avatar9}
                                    alt="Avatar 9"
                                    data-avatar="avatar9" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar9` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar9')} 
                                    />
                                    
                                <img
                                    src={avatar10}
                                    alt="Avatar 10"
                                    data-avatar="avatar10" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar10` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar10')} 
                                    />
                                    
                                <img
                                    src={avatar11}
                                    alt="Avatar 11"
                                    data-avatar="avatar11" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar11` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar11')} 
                                    />
                                    
                                <img
                                    src={avatar12}
                                    alt="Avatar 12"
                                    data-avatar="avatar12" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar12` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar12')} 
                                    />

<img
                                    src={avatar13}
                                    alt="Avatar 13"
                                    data-avatar="avatar13" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar13` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar13')} 
                                    />

                                <img
                                    src={avatar14}
                                    alt="Avatar 14" 
                                    data-avatar="avatar14" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar14` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar14')} 
                                    />
                                    
                                <img
                                    src={avatar15}
                                    alt="Avatar 15"
                                    data-avatar="avatar15" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar15` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar15')} 
                                    />
                                    
                                <img
                                    src={avatar16}
                                    alt="Avatar 16"
                                    data-avatar="avatar16"

                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar16` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar16')} 
                                    />
                                    
                                <img
                                    src={avatar17}
                                    alt="Avatar 17"
                                    data-avatar="avatar17" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        border: selectedAvatar === `avatar17` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar17')} 
                                    />
                                    
                                <img
                                    src={avatar18}
                                    alt="Avatar 18"
                                    data-avatar="avatar18" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar18` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar18')} 
                                    />
                                    
                                <img
                                    src={avatar19}
                                    alt="Avatar 19"
                                    data-avatar="avatar19" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar19` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar19')} 
                                    />
                                    
                                <img
                                    src={avatar20}
                                    alt="Avatar 20"
                                    data-avatar="avatar20" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar20` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar20')} 
                                    />
                                    
                                <img
                                    src={avatar21}
                                    alt="Avatar 21"
                                    data-avatar="avatar21" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar21` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar21')} 
                                    />
                                    
                                <img
                                    src={avatar22}
                                    alt="Avatar 22"
                                    data-avatar="avatar22" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar22` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar22')} 
                                    />
                                    
                                <img
                                    src={avatar23}
                                    alt="Avatar 23"
                                    data-avatar="avatar23" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar23` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar23')} 
                                    />
                                    
                                <img
                                    src={avatar24}
                                    alt="Avatar 24"
                                    data-avatar="avatar24" 
                                    
                                    style={{
                                        width: '20%',  height: '20%', 
                                        margin: '5px',
                                        cursor: 'pointer', transition: 'filter 0.2s',
                                        border: selectedAvatar === `avatar24` ? '2px solid blue' : 'none'
                                    }}
                                    onMouseOver={(e) => { e.target.style.filter = 'brightness(80%)'; }}
                                    onMouseOut={(e) => { e.target.style.filter = 'brightness(100%)'; }}
                                    onClick={() => handleImageClick('avatar24')} 
                                    />

                            {/* 
                            LOOP - BUT IMAGES ARE NOT WORKING!
                            {Array.from({ length: 12 }).map((_, index) => (
                            <img
                                key={index}
                                src={`../assets/profileavatars/avatar${index + 1}.jpg`}
                                alt={`Image ${index + 1}`}
                                style={{ width: '100px', height: '100px', margin: '5px', cursor: 'pointer' }}
                                
                            />
                            ))} */}
                        </div>
                        </DialogContent>

                        <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Save
                        </Button> 
                        </DialogActions>
                            
                    </BootstrapDialog>




                    
                 <Typography sx={{ fontFamily: "Gamer" }}>{UserName}</Typography>
                </Grid>
                </Grid>
                <Grid item xs={9} md={3} sx={{ fontFamily: "RobotoMonoV", fontSize: "10px" }}>
                <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Typography fontFamily="Gamer" color={"#7B7A7A"}>NAME</Typography>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <TextField
                        id="demo-helper-text-aligned"
                        value={UserName}
                        onChange = {(e) => setName(e.target.value)}
                        style={{ width: "500px", backgroundColor:"#E5E5E5" }}
                        />
                    </Grid>
                <Grid item xs={12} md={3}>
                    <Typography fontFamily="Gamer" color={"#7B7A7A"}>BIO</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <TextField
                    id="demo-helper-text-aligned"
                    value={bio}
                    onChange = {(e) => setBio(e.target.value)}
                    multiline
                    rows={3}
                    style={{ width: "500px", backgroundColor:"#E5E5E5" }}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography fontFamily="Gamer" color={"#7B7A7A"}>LINKS</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                    <TextField
                    id="demo-helper-text-aligned"
                    value={link}
                    onChange = {(e) => setLink(e.target.value)}
                    style={{ width: "500px", backgroundColor:"#E5E5E5" }}
                    />
                </Grid>
                
                </Grid>
                
                </Grid>
                <Button onClick = {handleSubmit} style={{marginLeft:"40%",  border: '2px solid #c1c1c1', backgroundColor: "#e5e0e0", padding:'5px'}}><Typography fontFamily="Gamer" color={"#7B7A7A"}>UPDATE DETAILS</Typography></Button>
            </Grid>
           
            <Grid container spacing={2} style={{margin:"50px", marginLeft:"100px"}}> 
{/* This is the box for enrolled courses */}
            <Grid container spacing={2} style={{ marginLeft: "100px" }}>
            <Grid item xs={4} md={3} direction="column" alignItems="center" sx={{ backgroundColor: "#e5e0e0", border: '2px solid #c1c1c1' }}>
                <Grid container rowSpacing={1} columnSpacing={1} alignItems="center">
                <Grid item xs={12}>
                    <Typography sx={{ fontFamily: "Gamer" }} variant='h6'>Enrolled Courses</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid sx={{ position: "relative", textAlign: "center", color: "white" }}>
                    <Button sx={{ color: "white" }}>
                        <img src={courseImg} style={{ width: '300px', height: "90px", borderRadius: "13px", border: "4px solid white", opacity: 0.73 }} />
                        <Typography sx={{ fontFamily: "Gamer", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}> {courseName}</Typography>
                    </Button>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
{/* This is the container for the rest of the points Boxes */}
            <Grid item xs={8} md={9} sx={{ fontFamily: "RobotoMonoV", fontSize: "10px"}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                <Grid item xs={4} p={1} sx={{backgroundColor: "#e5e0e0", border: "4px solid #EB1717", marginBottom:"10px", margin:"40px", width:"200px", height:"90px", fontSize:"10px"}}>
                    <Typography fontFamily={"Gamer"} textAlign={"center"}>Challenges Completed</Typography>
                    <Typography sx = {{fontFamily:"Gamer", fontSize:"30px", textAlign:"center"}}>{completed}</Typography>
                </Grid>
                <Grid item xs={4} p={1} sx={{backgroundColor: "#e5e0e0",border: "4px solid #1957E0", marginBottom:"10px", margin:"40px", width:"200px", height:"90px", fontSize:"10px"}}>
                <Typography fontFamily={"Gamer"} textAlign={"center"}>Total XP Earned</Typography>
                <Typography sx = {{fontFamily:"Gamer", fontSize:"30px", textAlign:"center"}}>{points}</Typography>
                </Grid>
                <Grid item xs={4} p={1} sx={{backgroundColor: "#e5e0e0",border: "4px solid #9F10E7", marginBottom:"10px",margin:"40px", width:"200px", height:"90px", fontSize:"10px"}}> 
                <Typography fontFamily={"Gamer"} textAlign={"center"}>Badges Collected </Typography>
                <Typography sx = {{fontFamily:"Gamer", fontSize:"30px", textAlign:"center"}}>{badges.length}</Typography>                  
                </Grid>
                <Grid item xs={4} p={1} sx={{backgroundColor: "#e5e0e0",border: "4px solid #4CD964", marginBottom:"10px",margin:"40px", width:"200px", height:"90px", fontSize:"10px"}}>
                <Typography fontFamily={"Gamer"} textAlign={"center"}>Day Streak</Typography>
                <Typography sx = {{fontFamily:"Gamer", fontSize:"30px", textAlign:"center"}}>{dailyStreak}</Typography>

                </Grid>
            </Grid>
            </Grid>
            </Grid>
            </Grid> 

        </Box>
        

        <Button variant="outlined" onClick={handleClickOpen_badge}>
        Open Button Alert dialog
        </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open1}
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>            
            🚨🚨 Badge Alert
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
            fontFamily:'RobotoMonov',
          }}
        >
          <CloseIcon />
        </IconButton>
        
        <DialogContent dividers>
          <Typography>
                    Congratulations!
          </Typography>
          <Typography gutterBottom> 
                     You have just recieved a new badge. ✨ 
          </Typography>
          <Typography>
          <img src={avatar} alt="avatar" style={{ height: '270px', width: 'auto' }} />
          </Typography>
          <Typography>
                 👀 Check out all your badges at your profile.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Sounds Great!
          </Button>
        </DialogActions>
      </BootstrapDialog>









       </Box>
    );
};
