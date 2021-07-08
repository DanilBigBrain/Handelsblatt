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
import { CenterFocusStrong } from '@material-ui/icons';
import './Body.css';
//import './Test.css';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
        color: '#000000',
         fontWeight:700,
         fontSize:11,   
         
      },
      
    },
 
    spacing:{
        '& > * + *': {
       
            marginLeft: theme.spacing(-1),
           

        },
    },
    picture:{
      height: 'auto',
        width:'100%',
       marginTop:40,
        '@media (max-width: 768px)': {
          height: 'auto',
        width:'100%',
       
       
        },
       
       
    },

    block1:{
      
        width:350,
        height:'auto',
        fontSize:25,
        fontWeight:600,
        
    
        '@media (max-width: 480px)': {
          fontSize:14,
          fontWeight:700,
          width:250,
        },
        '@media (max-width: 768px)': {
          height:'auto',
          fontSize:17,
          fontWeight:700,
          width:'auto',
        }
    },


 

    block2:{
        marginTop:40,
       
     
        fontSize:14,
      
        width:210,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        '@media (max-width: 480px)': {
          width:250,
          fontSize:13,
        },
        '@media (max-width: 768px)': {
          width:250,
          fontSize:13,
        }
    },
    block3:{
        
       
        width:300,
        height:'auto',
        fontSize:14,
        height:'auto',
        '@media (max-width: 768px)': {
          display:'none'
        }
        
    },
    icon:{
        fontSize:13,
        marginLeft: theme.spacing(1),
        marginTop:20,

        '@media (max-width: 480px)': {
          marginTop:1,
          fontSize:9,
          marginLeft: theme.spacing(0),
        }
    },
    test1:{
      marginTop:30,
     
    }
    

  }));
  
 
  export const  Body=(props)=> {
    const classes = useStyles();
    
        return (
            
            <div className="BodySize">


               
                <Typography  className={classes.spacing}>
                
      <Link >
      
      </Link>
      
      <Container className={classes.block2}>

      <Link   className='AboveHeadColor'>
       
      {props.title}
        </Link>
        </Container>

   
            <Container className={classes.block1}>

            
      <Link   className="LinkColor">
        
      
      {props.description}
      </Link>
      </Container >

      
    

    
       <Container  className={classes.block3}>
 
       <p  className="LinkColor">
         
       {props.content}
         
           </p>

           <Link   className="More">
        
           Mehr...
           </Link>
          
          <p className="Author">  </p>
         
          <Link   className="Author">

         <ShareIcon className={classes.icon}/>
            Teilen
         </Link>

           <Link   className="Author">

         <BookmarkIcon className={classes.icon}/>
            Merken
         </Link>

            <Link  className="Author">

         <ChatBubbleIcon className={classes.icon}/>
            Kommentar
         </Link>

         </Container>

 
 
 
    </Typography>
    
      <div className="PictrueMobile">
      <Link    className={classes.test1}>
      <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
      </Link>
      </div>
    
            </div>
        );
    
}


