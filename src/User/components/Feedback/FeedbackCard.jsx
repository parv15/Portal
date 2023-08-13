import { Button, Typography } from '@mui/material'
import {Box } from '@mui/system'
import React, { useState } from 'react'
import "./FeedbackCard.css"

const FeedbackCard = (props) => {
   const [disable,setdisable]=useState(false)


  const selectEmojiFn = (e,i) =>{
    props.ondata(i)
    if(disable === false){
    e.target.style.opacity = "1"
    setdisable(true)}
    // else{
    //   e.target.style.opacity = "0.7"
    //   setdisable(false)
    // }
  }
   
  return (
   <Box className="QuestionMain">
        <Typography variant='h6' className='QuestionHead'>{props.question}</Typography>
        <Box className="emojiFlex">
   
        <Button style={{display:"grid"}} disabled={disable} onClick={(e)=>selectEmojiFn(e,1)}>
        <img className="emoji" src="src\User\assets\Confounded face.svg"></img>
        <p className='emojiHead'>Poor</p>
        </Button>

    <Button style={{display:"grid"}} disabled={disable} onClick={(e)=>selectEmojiFn(e,2)}>

        <img className='emoji' src="src\User\assets\Disappointed face.svg" ></img>
        <p className='emojiHead'>Fair</p>
        </Button>
      
        <Button style={{display:"grid"}} disabled={disable} onClick={(e)=>selectEmojiFn(e,3)}>

        <img className='emoji' src="src\User\assets\Good face.svg" ></img>
        <p className='emojiHead'>Good</p>

        </Button>
    

        <Button style={{display:"grid"}} disabled={disable} onClick={(e)=>selectEmojiFn(e,4)}>
        
        <img className='emoji' src="src\User\assets\Oh Yeah face.svg" ></img>
        <p className='emojiHead'>Excellent</p>

        </Button>


        </Box>

</Box>
  )
}

export default FeedbackCard