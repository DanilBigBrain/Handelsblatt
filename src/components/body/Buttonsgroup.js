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
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(2),
        
         
      },
      
    }, 
    buttoncolor:{
        backgroundColor:'#fce5cc',
        fontSize:10,
        fontWeight:'bolder'

        
        
    },
    buttoncolor2:{
        backgroundColor:'#ee7f00',
        marginLeft:10,
        color:'#ffffff',
        
    },
  
    test:{
      width:620
    }
    
  }));


export default function Buttonsgroup() {
    const classes = useStyles();
    return (
        <div className="ButtonsPosition">

       

        <Typography className={classes.root}>

             <ButtonGroup >
      <Button  className={classes.buttoncolor}>Bundeswahltag</Button>
      <Button className={classes.buttoncolor2}><AddIcon fontSize="small"/></Button>
      

    </ButtonGroup>
    <ButtonGroup>
      <Button className={classes.buttoncolor}>Coronavirus</Button>
      <Button className={classes.buttoncolor2}><AddIcon fontSize="small"/></Button>

     
      
    </ButtonGroup>

    <ButtonGroup>
      <Button className={classes.buttoncolor}>Annalena Baerlock</Button>
      <Button className={classes.buttoncolor2}><AddIcon fontSize="small"/></Button>

     
      
    </ButtonGroup>

    <ButtonGroup>
      <Button className={classes.buttoncolor}>Elektomobilität</Button>
      <Button className={classes.buttoncolor2}><AddIcon fontSize="small"/></Button>

     
      
    </ButtonGroup>

    <ButtonGroup>
      <Button className={classes.buttoncolor}>Wirecard</Button>
      <Button className={classes.buttoncolor2}><AddIcon fontSize="small"/></Button>

     
      
    </ButtonGroup>
</Typography>
 
    
   


<Typography className={classes.root}>

             <ButtonGroup >
      <Button className={classes.buttoncolor}>Coinbase</Button>
      <Button className={classes.buttoncolor2}><AddIcon fontSize="small"/></Button>
      

    </ButtonGroup>
    <ButtonGroup >
      <Button className={classes.buttoncolor}>Dax</Button>
      <Button className={classes.buttoncolor2}><AddIcon fontSize="small"/></Button>
      
    </ButtonGroup>

    <ButtonGroup >
      <Button className={classes.buttoncolor}>Astrazeneca</Button>
      <Button className={classes.buttoncolor2}><AddIcon fontSize="small"/></Button>
      

    </ButtonGroup>

    <ButtonGroup >
      <Button className={classes.buttoncolor}>Immobilien</Button>
      <Button className={classes.buttoncolor2}><AddIcon fontSize="small"/></Button>
      

    </ButtonGroup>

    <ButtonGroup >
      <Button className={classes.buttoncolor}>EZB</Button>
      <Button className={classes.buttoncolor2}><AddIcon fontSize="small"/></Button>
      

    </ButtonGroup>
    </Typography>



   
      
   
        </div>
    )
}
