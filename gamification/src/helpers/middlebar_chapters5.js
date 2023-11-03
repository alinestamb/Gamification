import { Typography, Box, Button} from '@mui/material'; 
import React, {useState, useEffect} from 'react';
import book from "../assets/book.png";
import '../helpers/middlebar_chapters.css';
import { CommentSection } from 'react-comments-section';
import "react-comments-section/dist/index.css";

  const Middlebar5 = () => {
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
          setPoints(data.chapter2.section2.points);
          setTitle(data.chapter2.section2.title);
          setContent1 (data.chapter2.section2.content1);
          setContent2 (data.chapter2.section2.content2);
        })
        .catch((error) => console.log(error));
    }, []);
    
    console.log(content1);

    useEffect(() => {
      fetch("http://localhost:3004/chapter1.section5", {
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

    useEffect(() => {
      fetch("http://localhost:3002/1", {
        method: "GET",
        
      })
        .then((response) => response.json())
        .then((data) => {
          setIsDone(data.isDone);
          setUserPoints(data.points);
          setUserCompleted (data.completed);
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
          const url = "http://localhost:3004/chapter1.section5" ;
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
    const handleNextSection = (e) => {
      e.preventDefault();
      if ( isDone[5] == "chapter2.section2")
      {
        console.log(true);
        window.location.href='http://localhost:3000/chapters6'
      }
      else {


      let newPoints = points+userPoints;
      setUserPoints(newPoints);
      setUserCompleted (userCompleted++);
      setIsDone(isDone.push("chapter2.section2"));
    
      
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
      window.location.href='http://localhost:3000/chapters6'
    }
      
    }
    



    return(
    <Box sx={{ flexGrow: 1, margin:"30px"}}>
       <Typography >
            <h1>  {title}  - {points} XP </h1>  
        </Typography>        
        <div class="book-container">
           <img src={book} alt="Book" style={{ maxWidth: '100%'}} />
            <div class = "left-book scrollbar" style={{fontSize: '25px', top:'14%', paddingRight:'11px', whiteSpace: 'pre-wrap'}}> {content1}</div>
            <div class="right-book scrollbar"style={{fontSize:'25px', top:'14%', marginRight:'50px', whiteSpace: 'pre-wrap'}}> {content2} </div>
           {/* <div class="right-book"style={{fontSize:'20px', top:'170px'}}>  <br /><br />    - These are some bullet points.<br />
                                                                                            - These are some bullet points.<br />
                                                                                            - These are some more bullet points.<br /><br />
                                                                                             And here is an image about AI.    </div>
                             
            <div class = "right-image">
            <img src={ch2Img} alt="Image" style={{maxWidth: '40%', paddingTop:'280px', paddingLeft:'80px'}} />

                </div>                
    */ }

    
            <div class ="nxtpagebutton nxtpagebutton-text">
            
            <Button sx={{color:'white'}} onClick= {handleNextSection} >
                NXT PG
               </Button> 

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
         </Box>
  );
};



export default Middlebar5;