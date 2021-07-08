
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

    picture:{
        maxHeight:350,
        maxWidth:620,
        marginTop:20
    },

   
    block1:{
    
        fontSize:19,
        fontWeight:'bolder'
    },
    block2:{
        fontSize:14,
       
    },
    block3:{
        fontSize:14,  
       
        
    },
    icon:{
        fontSize:11,
        
        
    },
    test:{
        float:'right'
    },
    spacing:{
        '& > * + *': {
       
            marginLeft: theme.spacing(2),
           

        },
    },
   

  }));

  



export default function VideoPlayer() {
    const classes = useStyles();
    return (
        <div className="LargePict">

            <Typography className={classes.test}>
                
                

            <h3>Video</h3>
            
          <Grid>
              <video className="Video" poster={Test} controls preload="none">
                  <source >
                  
                  </source>
                  
              </video>
             
              </Grid>

                 <Container className={classes.block2}>

<Link  href="#" className='HeadColor'>
  
Nach Kandidatenkür
  </Link>
  </Container>

      <Container className={classes.block1}>

      
<Link  href="#" className="LinkColor">
  

Aufgebrachte Basis und kein Wahlprogramm: CDU und CSU bleibt kaum Zeit zum Wundenlecken
</Link>
</Container >




<Link href="#">
 
 </Link>
 <Container  className={classes.block3}>

 <Link   className="LinkColor">
   
 Armin Laschet und Markus Söder haben sich einen harten Vorwahlkampf geliefert. Nun steht der Kanzlerkandidat vor der nächsten, vielleicht noch größeren Herausforderung.
   
     </Link>

     <Link  href="#" className="More">
  
       Mehr...
     </Link>

        
    
     
</Container>


        

     </Typography>
   
   
             
        </div>
       
    )
}
