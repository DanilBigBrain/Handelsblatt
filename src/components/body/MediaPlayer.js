import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Test from './picture_test/test.jpg'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Circle from './picture_test/circle.svg'
import Mediapicture from './picture_test/mediapicture.jpg'
import  './Body.css'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
       
        
         
      },
      
    }, 

    media:{
      width:'100%',

      '@media (max-width: 980px)': {
      display:'none'
      },
  },
  icon:{
    fontSize:90,
    
  },
  grid:{
    minHeight:205,
   marginTop:20,
   marginLeft:10
  }

  }));


  
  export default function MediaPlayer() {
    const classes = useStyles();
      return (
          <div className={classes.media}>
             <div id="mediaplayer" className="Mediaplayer">

<Grid className={classes.grid}>
<Link className="Mediaplay">
               <PlayCircleOutlineIcon className={classes.icon}>
                
               </PlayCircleOutlineIcon>
               </Link>
            <p className="MediapayerHead">Angela Merkel: “Wir dürfen keine Schnittstellenrepublik werden”</p> 
            <p className="MediapayerText">Handelsblatt Disrupt vom 21.05.2021</p> 
            <input type="range" min="1" max="100" value="1" class="slider" id="myRange"/>
           
            <img className="Mediapicture" src={Mediapicture} alt="logo" />
            <Button variant="outlined" className="ButtonSubscribe">SUBSCRIBE</Button>
           
               </Grid>
            </div>
              </div>
             
          
      )
  }
  