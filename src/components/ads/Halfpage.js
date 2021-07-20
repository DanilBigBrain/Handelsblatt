import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import Test from './components/hpa.jpg'
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
        marginTop:10
        
    }

  }));
  
 
  export const  Halfpage=(props)=> {
    const classes = useStyles();
    
        return (
            <div className="Halfpage1Lay">
            <div className="Halfpage" style={{display:props.Display}}>

            
        <img className="Halfpict" src={Test} alt="logo"/>
      
        
            </div>

            </div>
        );
    
}


