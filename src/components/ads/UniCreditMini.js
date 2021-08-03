import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import Rollovermini from './components/RolloverMini.png'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

import Typography from '@material-ui/core/Typography';
import { CenterFocusStrong } from '@material-ui/icons';
//import './Body.css';
//import './Test.css';
const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    picture:{
       height:'auto',
        width:'100%',
        marginRight:50
        
    }

  }));
  
 
  export const  UniCreditMini=(props)=> {
    const classes = useStyles();
    
        return (
            
            <div className="UniCreditMini" style={{display:props.Display}}>

           

      <img className="Rollover" src={Rollovermini} alt="logo"/> 
      
        
            </div>
        );
    
}


