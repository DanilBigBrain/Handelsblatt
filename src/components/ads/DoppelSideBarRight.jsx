import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import Test from './components/Skyscraper.png'
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
  
 
  export const  DoppelSideBarRight=(props)=> {
    const classes = useStyles();
    
        return (

          

            <div className="DoppelSideBarRight1Lay">
            <div className="DoppelSideBarRight" style={{display:props.Display}}>

            
       {/*  <img className="Skypict" src="https://s0.2mdn.net/dfp/230725/4884463874/1610104558344/index.html" alt="logo"/> */}
 
        <iframe  className="DoppelSideBarRightpict" src="https://s0.2mdn.net/dfp/230725/4884463874/1610104558344/index.html" frameborder="10"></iframe>
    
        {/*https://s0.2mdn.net/dfp/230725/4884463874/1610104558344/index.html*/}
            </div>

            </div>

       

        );
    
}


