import React, {useState, useEffect} from "react";
import {Button} from "@mui/material";


function LeaderBoard(){
  const [array] = useState([]);
  const [points, setPoints] = useState(null);


  useEffect(() => {
    fetch("http://localhost:3002/1", {
      method: "GET",
      
    })
      .then((response) => response.json())
      .then((data) => {
        setPoints(data.points);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3002/userIds" , {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        
        data.sort((s1, s2) => {
          return s2.points - s1.points;
        });

        for(var i = 1; i<data.length; i++)
        {
          array.push(data[i-1]);
        }
      
     
     //   console.log("new array");
     //   console.log(array);
    
                  
      })
      .catch((error) => console.log(error));
  }, []);


//console.log(array);

array.map((array)=>{
 // console.log("something");
 return( <p>{array}</p>);
})  

  //   array.map((array) => {
  //     {var index = 1; index++}
  //     return(
  //   <Button variant = "contained" sx={{
  //     width:'200px', 
  //     background:'#5a8da1', 
  //     marginBottom:'10px',
  //     borderRadius:'20px',
  //     height: '25px', 
  //     fontFamily:"Gamer", 
  //     fontSize:"10px",
  //     '&:hover': {
  //       backgroundColor: '#5a8da1'}}}>
  //     <span style={{ color: 'white'}}>{index}. </span>&nbsp;
  //     <span style={{ color: 'white'}}> {array.id} </span>&nbsp;
  //     <span style={{ color: '#f5b92c'}}>{array.points} </span>
      
  // </Button>
  //     );
  //   })
    
   return(
   <>
   <Button variant = "contained" sx={{
      width:'200px', 
      background:'#5a8da1', 
      marginBottom:'10px',
      borderRadius:'20px',
      height: '25px', 
      fontFamily:"Gamer", 
      fontSize:"10px",
      '&:hover': {
        backgroundColor: '#5a8da1'}}}>
      <span style={{ color: 'white'}}>1. </span>&nbsp;
      <span style={{ color: 'white'}}> Guest </span>&nbsp;
      <span style={{ color: '#f5b92c'}}>{points} </span>
      
  </Button>

  <Button variant = "contained" sx={{
      width:'200px', 
      background:'#5a8da1', 
      marginBottom:'10px',
      borderRadius:'20px',
      height: '25px', 
      fontFamily:"Gamer", 
      fontSize:"10px",
      '&:hover': {
        backgroundColor: '#5a8da1'}}}>
      <span style={{ color: 'white'}}>2. </span>&nbsp;
      <span style={{ color: 'white'}}> User </span>&nbsp;
      <span style={{ color: '#f5b92c'}}>0 </span>
      
  </Button>
   </>
   
    )

}




export default LeaderBoard;













/*
function LeaderBoard(){
  const [id, setId] = useState(null);
  const [index, setIndex] = useState(null);
  const [points, setPoints] = useState(null);
  const [array, setArray] = useState([]);
let i = 0;
      useEffect(() => {
      fetch("http://localhost:3002/userIds" , {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          
          data.sort((s1, s2) => {
            return s2.points - s1.points;
          });
        
          console.log(data);
          for ( var i = 0; i<data.length-1; i++)
          {
            setId(data[i].id);
            setIndex(i);
            setPoints(data[i].points)
            setArray = data;
           return(
            <Button variant = "contained" sx={{
              width:'200px', 
              background:'#5a8da1', 
              marginBottom:'10px',
              borderRadius:'20px',
              height: '25px', 
              fontFamily:"Gamer", 
              fontSize:"10px",
              '&:hover': {
                backgroundColor: '#5a8da1'}}}>
             {// <span style={{ color: 'white'}}>{i}. </span>&nbsp;
        }
              {data.map ( data => 
              <span style={{ color: 'white'}}> {data.id} </span>,
              <span style={{ color: '#f5b92c'}}>{data.points} </span>
                )}
              
          </Button>
           );
          }


                    
        })
        .catch((error) => console.log(error));
    }, []);

    return(
      <Button variant = "contained" sx={{
        width:'200px', 
        background:'#5a8da1', 
        marginBottom:'10px',
        borderRadius:'20px',
        height: '25px', 
        fontFamily:"Gamer", 
        fontSize:"10px",
        '&:hover': {
          backgroundColor: '#5a8da1'}}}>
       {// <span style={{ color: 'white'}}>{i}. </span>&nbsp;
  }
        { array.map ( array => 
        <span style={{ color: 'white'}}> {array[i].id} </span>,
       {// <span style={{ color: '#f5b92c'}}>{array[i].points} </span>
       }
          )}
        
    </Button>
     );
    
 
  

 
}

  function renderLeaderBoard ( data ) {
   
 

 
}





export default LeaderBoard;



*/