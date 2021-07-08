
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

    chart:{
        height:'auto',
        width:'100%',
        marginTop:70
    },

   
   

  }));

  



export default function LargePict() {
    const classes = useStyles();
    return (
        <div className={classes.chart}>


<iframe  className="Chart" src="https://finanzen.handelsblatt.com/include_marktueberblick.htn?sektion=uebersichtiframe=1"></iframe>
     
        </div>
       
    )
}
