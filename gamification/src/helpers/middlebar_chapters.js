import { Grid, Typography, Box, ListItem, List, Divider, Link, Button, Paper} from '@mui/material'; 
import React from 'react';
// import Robotomono from '../fonts/robotomono.js';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'; //This line is the progress bar 
import ch2Img from '../assets/Paper.jpg';
import book from "../assets/book.png";
import '../helpers/middlebar_chapters.css'
// import Introduction from '../mainextpages/content';

// Title:
    const title = "1. Introduction"; 
  
// For the chapters- book
  const Middlebar = () => {
    return(
    <Box sx={{ flexGrow: 1, margin:"30px"}}>
       <Typography >
            <h1>  {title}  </h1>  
        </Typography>        
        <div class="book-container">
           <img src={book} alt="Book" style={{ maxWidth: '100%'}} />
            <div class="left-book" style={{fontWeight: 'bold', fontSize:'40px'}} >What is AI?  </div>
            <div class = "left-book scrollbar" style={{fontSize: '20px', top:'150px'}}> <br />This is the definition of AI:<br />
                                                                                   What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                                                   Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                                                                   Where does it come from?
                                                                                   Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.<br/> </div>
            <div class="right-book"style={{fontSize:'25px', top:'90px'}}> These are some definitions of AI given by someone important. </div>
            <div class="right-book"style={{fontSize:'20px', top:'170px'}}>  <br /><br />    - These are some bullet points.<br />
                                                                                            - These are some bullet points.<br />
                                                                                            - These are some more bullet points.<br /><br />
                                                                                             And here is an image about AI.    </div>
                             
            <div class = "right-image">
            <img src={ch2Img} alt="Image" style={{maxWidth: '40%', paddingTop:'280px', paddingLeft:'80px'}} />

                </div>                
                
            <div class ="nxtpagebutton nxtpagebutton-text">
              <a href="startlearning">
               <Button sx={{color:'white'}} >
                NXT PG
               </Button>
               </a>
            </div>
            
         
          
         </div>

         </Box>
  );
};

export default Middlebar;