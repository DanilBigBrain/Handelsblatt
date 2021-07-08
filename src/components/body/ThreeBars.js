import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Test from './picture_test/test.jpg'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

import Typography from '@material-ui/core/Typography';

import  './Body.css'



const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        maxWidth:1020,
        marginLeft: theme.spacing(2),
        
      },
      
    },
    block1:{
      
        width:306,
      
       
      
     },
     block2:{
         width:306,
        
        
     },
     block3:{
         
         width:306,
        
         
     },

     container:{
      
       
       
      }
    
  }));




  export default function ThreeBars() {
    const classes = useStyles();
    
        return (
            
               <div className="BodySize">
     
            <Typography >
    
        <Container >

            <Link>
            
            </Link>
  
      <Link  className={classes.block1}>
            <div className="ThreeBars">

                

            </div>
      
      </Link> 
      
  
    
      <Link className={classes.block2}>
     
      <div className="ThreeBars">

            </div>
      </Link>
     
  
      <Link className={classes.block3}>
      <div className="ThreeBars">

            </div>
      
      </Link>
      
     
      </Container>
    
  
  </Typography>
  </div>
            
        );
    
}
