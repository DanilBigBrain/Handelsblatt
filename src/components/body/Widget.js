
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Test from './picture_test/test.jpg'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

import  './Body.css'

const useStyles = makeStyles((theme) => ({

    root:{
        
       
            marginTop: 30
           

        
    },


  }));

  



export default function Widget() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           
           <Typography  className="Widget">

               
            <iframe src="https://compass.pressekompass.net/compasses/handelsblatt/handelsblattumfrage-wie-wird-der-dax-heu-unjg" scrolling="no" width="100%" height="500" frameborder="no"></iframe>
            </Typography>
            
        </div>
       
    )
}
