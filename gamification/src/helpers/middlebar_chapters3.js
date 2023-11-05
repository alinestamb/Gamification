import { Typography, Box, Button} from '@mui/material'; 
import React, {useState, useEffect} from 'react';
import book from "../assets/book.png";
import '../helpers/middlebar_chapters.css';
import { CommentSection } from 'react-comments-section';
import "react-comments-section/dist/index.css";

import badge8 from "../assets/badges/badge8.png" ;

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
  const Middlebar3 = () => {
    const [points, setPoints] = useState(null);
    const [content1, setContent1] = useState(null);
    const [content2, setContent2] = useState(null);
    const [title, setTitle] = useState(null);

    
    let [comment, setComment] = useState(null);
    const [commentData, setCommentData] = useState([]);

    
    useEffect(() => {
      fetch("http://localhost:3001/course1", {
        method: "GET",
        
      })
        .then((response) => response.json())
        .then((data) => {
          setPoints(data.chapter1.section3.points);
          setTitle(data.chapter1.section3.title);
          setContent1 (data.chapter1.section3.content1);
          setContent2 (data.chapter1.section3.content2);
        })
        .catch((error) => console.log(error));
    }, []);
    
    useEffect(() => {
      fetch("http://localhost:3004/chapter1.section3", {
        method: "GET",
      })
      .then((response) => response.json())
      .then((data) => {
        setCommentData(data.commentData);
      })
      .catch((error) => console.log(error));
    }, []);

    const [isDone, setIsDone] = useState(null);
    let [userPoints, setUserPoints] = useState(null);
    let [ userCompleted, setUserCompleted] = useState(null);
    let [badgesCount, setBadgesCount] = useState(null);
    useEffect(() => {
      fetch("http://localhost:3002/1", {
        method: "GET",
        
      })
        .then((response) => response.json())
        .then((data) => {
          setIsDone(data.isDone);
          setUserPoints(data.points);
          setUserCompleted (data.completed);
          setBadgesCount(data.badgesCount);
        })
        .catch((error) => console.log(error));
    }, []);

    console.log(comment);
    console.log (commentData);
    let i = 0;
    if (comment == null)
    {
      console.log(comment);
      console.log('comment has not been added');
    }
    else 
    {
      if ( i == 0) {
        
        console.log('comment has been added');
        console.log(comment);
        commentData.push(comment);
        console.log(commentData);
       
        // adding to discussion thread
        const dataToUpdate = {
          commentData : commentData
        }
        
        const jsonString = JSON.stringify(dataToUpdate);
          const url = "http://localhost:3004/chapter1.section3" ;
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

          i = 1;



      }

     
      
    }
    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen_badge = () => {
      setOpen1(true);
    };

    const handleClose = () => {
      
      setOpen1(false);
     
      
        const dataToUpdate={
            badge8: 1,
            badgesCount: badgesCount+1,
           
        }
        const jsonString = JSON.stringify(dataToUpdate);
    
        const url = "http://localhost:3002/1" ;
    
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
        window.location.reload();
      }
    

    const handleNextSection = (e) => {
      
      e.preventDefault();

      handleClickOpen_badge();
      setTimeout(function() {
        
     
      if ( isDone[2] )
      {
        console.log(true);
        window.location.href='http://localhost:3000/quizhome'
      }
      else {


      let newPoints = points+userPoints;
      setUserPoints(newPoints);
      setUserCompleted (userCompleted++);
      setIsDone(isDone.push("chapter1.section3"));
    
      
      const dataToUpdate={
         points: newPoints,
         completed: userCompleted,
         isDone : isDone
      }
      const jsonString = JSON.stringify(dataToUpdate);
  
      const url = "http://localhost:3002/1" ;
  
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
      window.location.href='http://localhost:3000/quizhome'
    }
  }, 5000);
    }
    


    return(
    <Box sx={{ flexGrow: 1, margin:"30px"}}>
       <Typography >
            <h1>  {title} - {points} XP  </h1>  
        </Typography>        
        <div class="book-container">
           <img src={book} alt="Book" style={{ maxWidth: '100%'}} />
            <div class = "left-book scrollbar" style={{fontSize: '25px', top:'14%', paddingRight:'11px', whiteSpace: 'pre-wrap'}}> {content1}</div>
            <div class="right-book"style={{fontSize:'25px', top:'14%', marginRight:'50px', whiteSpace: 'pre-wrap'}}> {content2} </div>
           {/* <div class="right-book"style={{fontSize:'20px', top:'170px'}}>  <br /><br />    - These are some bullet points.<br />
                                                                                            - These are some bullet points.<br />
                                                                                            - These are some more bullet points.<br /><br />
                                                                                             And here is an image about AI.    </div>
                             
            <div class = "right-image">
            <img src={ch2Img} alt="Image" style={{maxWidth: '40%', paddingTop:'280px', paddingLeft:'80px'}} />

                </div>                
    */ }

    
            <div class ="nxtpagebutton nxtpagebutton-text">
            
            <a href = "quizhome"> <Button sx={{color:'white'}} onClick= {handleNextSection} >
                NXT PG
               </Button> </a>
                
            </div>
                     
          
         </div>
         <CommentSection
      currentUser={{
        currentUserId: "01a",
        currentUserImg:
          "https://ui-avatars.com/api/name=GuestUser&background=random",
        currentUserFullName: "Guest User"
      }}
      logIn={{
        loginLink: "http://localhost:3001/",
        signupLink: "http://localhost:3001/"
      }}
      commentData={commentData}
      onSubmitAction={(commentData) =>  setComment(commentData) }
    />
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
          <img src={badge8} alt="badge8" style={{ height: '270px', width: 'auto' }} />
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



export default Middlebar3;