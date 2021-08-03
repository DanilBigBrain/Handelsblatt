import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Rollover from './components/Rollover.jpg'
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
  
 
  export const  UniCredit=(props)=> {
    const classes = useStyles();
    
        return (
            
            <div id="rollover" className="Display" style={{display:props.Display}}>

            <div className="Rollover"> </div>

      {/* <img className="Rollover" src={Rollover} alt="logo"/> */}
      
        
            </div>
        );
    
}


