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
        height:'auto',
        width:'23%',
        '@media (max-width: 768px)': {
          height:'auto',
          width:'22%',
        },
        '@media (max-width: 480px)': {
          width:'21%',
          
          
         }
    },
    block1:{
      
      
     
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
    width:'23.5%',
    marginLeft:5,
    display:'flex',
    flexDirection:'column',
    float:'left',
    '@media (max-width: 768px)': {
      width:'23.5%',
      
      
     },
     '@media (max-width: 480px)': {
      width:'24%',
      fontSize:10
      
     }
    
   },
  
   container:{
     maxWidth:1020,
   }


  }));
  
 
  export const Body4Pictures=(props)=> {
    const classes = useStyles();
    
        return (
            
            <div className="BodySize">
               
     
          <Typography>
  
      <Container maxWidth="false" className={classes.container}>

    <Link  className={classes.block1}>
    <img className={classes.picture} src={props.image}   onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
    
    </Link> 
    

  
    <Link className={classes.block2}>
    <img className={classes.picture} src={props.image2}   onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
   
    </Link>
   

    <Link className={classes.block3}>
    <img className={classes.picture} src={props.image3}   onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
    
    </Link>

    <Link className={classes.block3}>
    <img className={classes.picture} src={props.image4}  onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
    
    </Link>
    
   
    </Container>
  
  <Typography className={classes.newstext}>

  <Link href="#">
      
      </Link>


<Container className="HeadContainer">

<Link  href="#" className="HeadColor">
  
{props.title}
  
  </Link>
  </Container>

  <Container className="DescriptionContainer">


<Link  href="#" className="ColorandSize">
  
{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  href="#" className="BlockText">
  
{props.content}  
  </Link>

  <Link  href="#" className="More">
  
   Mehr
  
  </Link>
  </Container>

  </Typography>




  <Typography className={classes.newstext}>

<Link href="#">
    
    </Link>


    <Container className="HeadContainer">

<Link  href="#" className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  href="#" className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  href="#" className="BlockText">

{props.content2}
</Link>

<Link  href="#" className="More">

 Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link href="#">
    
    </Link>


<Container className="HeadContainer">

<Link  href="#" className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  href="#" className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  href="#" className="BlockText">

{props.content3}
</Link>

<Link  href="#" className="More">

 Mehr

</Link>
</Container>

</Typography>


<Typography className={classes.newstext}>

<Link href="#">
    
    </Link>


<Container className="HeadContainer">

<Link  href="#" className="HeadColor">

{props.title4}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  href="#" className="ColorandSize">

{props.description4}
</Link>
</Container>


<Container className={classes.text}>

<Link  href="#" className="BlockText">

{props.content4}
</Link>

<Link  href="#" className="More">

 Mehr

</Link>
</Container>

</Typography>



</Typography>

            </div>
        );
    
}
