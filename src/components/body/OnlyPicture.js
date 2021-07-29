import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Test from './picture_test/test.jpg'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Noimage from './picture_test/noimage.png'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import  './Body.css'

const useStyles = makeStyles((theme) => ({

    picture:{
      height:'auto',
      width:'100%',
     
    },
    btn:{
       backgroundColor:'#ee7f00',
       color:'white',
       marginTop:70
    }
   
  }));

  



export const  OnlyPicture=(props)=> {
    const classes = useStyles();
    return (
        <div className="OnlyPicture">

            <Typography >
                
            
            <img className={classes.picture} src={props.image}onError={(e)=>{e.target.onerror = null; e.target.src=Noimage}} />
                


                 <Container className={classes.block2}>


<Grid align="center">
  <Button className={classes.btn} variant="contained">
  Zurück zum Anfang
</Button>
</Grid>
  </Container>

         

     </Typography>
   
   
             
        </div>
       
    )
}
