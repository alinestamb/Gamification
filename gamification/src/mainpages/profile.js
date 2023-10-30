// this page is to create the profile/avatar 
import React , {useState, useEffect} from 'react'
import Navbar from '../components/navbar'
import { Box, Grid, Typography, List, ListItem, Item, Button} from '@mui/material';
// import Robotomono from '../fonts/robotomono';
import '../fonts/fonts.css';
import avatar from '../assets/avatar.png';
import TextField from '@mui/material/TextField';
import courseImg from '../assets/ai.png'; // Import the image

const userId = "1";
let setName = "";
let setLink = "";
let setBio = "";





const Profile = () => {
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



    return(
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
       </Box>
    );
};

export default Profile