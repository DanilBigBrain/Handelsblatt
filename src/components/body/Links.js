import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Test from './picture_test/test.jpg'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

import Typography from '@material-ui/core/Typography';

import  './Body.css'



const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
       
        marginLeft: theme.spacing(2),
        
      },
      
    },

    head: {
        '& > * + *': {
         
            marginLeft: theme.spacing(34),
            
          
        },
        
      },
    picture:{
        marginTop:10,
        height:126,
        width:225,
       
    },
    block1:{
      
       width:225,
      float:'left',
      
     
    },
    block2:{
        width:225,
       marginLeft:19,
       
    },
    block3:{
        
        width:225,
        marginLeft:19
        
    },
   
    text:{
     marginTop:theme.spacing(2),

    },
    
   newstext:{
    width:240,
  
    display:'flex',
    flexDirection:'column',
    float:'left',
    
   },
  
   container:{
     maxWidth:1020,
   }


  }));
  
 
  export default function Body3Pictures() {
    const classes = useStyles();
    
        return (
            
            <div className="BodySize">
               
     
          <Typography>
  
      <Container maxWidth="false" className={classes.container}>

    <Link  className={classes.block1}>
    
    
    </Link> 
    

  
    <Link className={classes.block2}>
  
   
    </Link>
   

    <Link className={classes.block3}>
    
    
    </Link>

    <Link className={classes.block3}>
    
    
    </Link>
    
   
    </Container>
  
  <Typography className={classes.newstext}>

  <Link >
      
      </Link>


<Container >

<Link   className="ColorofLinks">
  
Übersicht
  
  </Link>
  </Container>

<Container className="SizeofLinks">


<Link   className="LinksColorandSize">
  
Meine News Home Politik Unternehmen Technologie Finanzen Mobilität Karriere Arts & Style Meinung Video Service

</Link>
</Container>




  </Typography>




  <Typography className={classes.newstext}>

<Link >
    
    </Link>


<Container >

<Link   className="ColorofLinks">

Service

</Link>
</Container>

<Container className="SizeofLinks">


<Link   className="LinksColorandSize">


Facebook
    Twitter
    Flipboard
    Kontakt/Hilfe
    Online-Archiv
    Veranstaltungen
    Netiquette
    Sitemap
    Nutzungsrechte erwerben
    AGB
    Datenschutzerklärung
    Datenschutzeinstellungen
    Impressum


</Link>
</Container>



</Typography>




<Typography className={classes.newstext}>

<Link >
    
    </Link>


<Container >

<Link   className="ColorofLinks">

Links

</Link>
</Container>

<Container className="SizeofLinks">


<Link   className="LinksColorandSize">

WirtschaftsWoche
karriere.de
Handelsblatt-Shop
Absatzwirtschaft
Handelsblatt Magazin
iq digital
Morning Briefing
Redner Agentur
Research Institute
Vergleichsportal

</Link>
</Container>



</Typography>


<Typography className={classes.newstext}>

<Link >
    
    </Link>


    <Container >

<Link   className="ColorofLinks">

 

</Link>
</Container>

    <Container className="SizeofLinks">


<Link   className="LinksColorandSize">

Creditreform
bellevue-ferienhaus.de
boatoon.com
PMG
DUB Unternehmensnachfolge
DUB Franchiseunternehmen
faircompany.de
Kreditkarten-Vergleich
Sudoku online spielen
Infoseiten
Brutto-Netto-Rechner
Geschäftskonto-Vergleich

</Link>
</Container>




</Typography>



</Typography>

            </div>
        );
    
}
