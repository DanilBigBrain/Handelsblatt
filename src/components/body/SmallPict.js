
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Test from './picture_test/test.jpg'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Grid';
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
        height:'auto',
        width:'35%',
        marginTop:20,
        float:'right',
        '@media (max-width: 480px)': {
         fontSize:12,
         height:'auto',
         width:'30%',
         
        },
    },

   
    block1:{
    
        fontSize:24,
        fontWeight:'bold',
        height:110,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'pre-line',
        width:370,
        '@media (max-width: 768px)': {
         fontSize:15,
         height:90,
         
         width:290,
         
        },
        '@media (max-width: 480px)': {
         fontSize:10,
         overflow:'hidden',
         textOverflow:'ellipsis',
         whiteSpace:'pre-line',
         height:45,
        },
    },
    block2:{
        fontSize:14,
        marginTop:25,
       width:200,
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        
       
    },
    block3:{
        fontSize:14, 
        marginTop:20, 
        '@media (max-width: 768px)': {
        display:'none'
         
         
        },
        
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

  



export const  SmallPict=(props)=> {
    const classes = useStyles();
    return (
        <div className="LargePict">

            <Typography >
                
                

            <hr className="LineColor"></hr>
            
            <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
                


                 <Grid className={classes.block2}>

<Link  className='HeadColor'>
  
{props.title}
  </Link>
  </Grid>

      <Grid className={classes.block1}>

      
<Link  className="LinkColor">
  

{props.description}
</Link>
</Grid >




<Link>
 
 </Link>
 <Grid  className={classes.block3}>

 <Link   className="LinkColor">
   
{props.content}   
     </Link>

     <Link  className="More">
  
       Mehr...
     </Link>

        
    <Typography className={classes.spacing}>
    
         <Link  className="Author">

        <ShareIcon className={classes.icon}/>
           Teilen
        </Link>

          <Link  className="Author">

        <BookmarkIcon className={classes.icon}/>
           Merken
        </Link>

           <Link  className="Author">

        <ChatBubbleIcon className={classes.icon}/>
           Kommentar
        </Link>
        
     </Typography>

     
</Grid>


        

     </Typography>
   
   
             
        </div>
       
    )
}



export const  SmallPict1=(props)=> {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography >
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
              


               <Grid className={classes.block2}>

<Link  className='HeadColor'>

{props.title}
</Link>
</Grid>

    <Grid className={classes.block1}>

    
<Link  className="LinkColor">


{props.description}
</Link>
</Grid >




<Link>

</Link>
<Grid  className={classes.block3}>

<Link   className="LinkColor">
 
{props.content}   
   </Link>

   <Link  className="More">

     Mehr...
   </Link>

      
  <Typography className={classes.spacing}>
  
       <Link  className="Author">

      <ShareIcon className={classes.icon}/>
         Teilen
      </Link>

        <Link  className="Author">

      <BookmarkIcon className={classes.icon}/>
         Merken
      </Link>

         <Link  className="Author">

      <ChatBubbleIcon className={classes.icon}/>
         Kommentar
      </Link>
      
   </Typography>

   
</Grid>


      

   </Typography>
 
 
           
      </div>
     
  )
}

export const  SmallPict2=(props)=> {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography >
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
              


               <Grid className={classes.block2}>

<Link  className='HeadColor'>

{props.title}
</Link>
</Grid>

    <Grid className={classes.block1}>

    
<Link  className="LinkColor">


{props.description}
</Link>
</Grid >




<Link>

</Link>
<Grid  className={classes.block3}>

<Link   className="LinkColor">
 
{props.content}   
   </Link>

   <Link  className="More">

     Mehr...
   </Link>

      
  <Typography className={classes.spacing}>
  
       <Link  className="Author">

      <ShareIcon className={classes.icon}/>
         Teilen
      </Link>

        <Link  className="Author">

      <BookmarkIcon className={classes.icon}/>
         Merken
      </Link>

         <Link  className="Author">

      <ChatBubbleIcon className={classes.icon}/>
         Kommentar
      </Link>
      
   </Typography>

   
</Grid>


      

   </Typography>
 
 
           
      </div>
     
  )
}


export const  SmallPict3=(props)=> {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography >
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
              


               <Grid className={classes.block2}>

<Link  className='HeadColor'>

{props.title}
</Link>
</Grid>

    <Grid className={classes.block1}>

    
<Link  className="LinkColor">


{props.description}
</Link>
</Grid >




<Link>

</Link>
<Grid  className={classes.block3}>

<Link   className="LinkColor">
 
{props.content}   
   </Link>

   <Link  className="More">

     Mehr...
   </Link>

      
  <Typography className={classes.spacing}>
  
       <Link  className="Author">

      <ShareIcon className={classes.icon}/>
         Teilen
      </Link>

        <Link  className="Author">

      <BookmarkIcon className={classes.icon}/>
         Merken
      </Link>

         <Link  className="Author">

      <ChatBubbleIcon className={classes.icon}/>
         Kommentar
      </Link>
      
   </Typography>

   
</Grid>


      

   </Typography>
 
 
           
      </div>
     
  )
}


export const  SmallPict4=(props)=> {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography >
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
              


               <Grid className={classes.block2}>

<Link  className='HeadColor'>

{props.title}
</Link>
</Grid>

    <Grid className={classes.block1}>

    
<Link  className="LinkColor">


{props.description}
</Link>
</Grid >




<Link>

</Link>
<Grid  className={classes.block3}>

<Link   className="LinkColor">
 
{props.content}   
   </Link>

   <Link  className="More">

     Mehr...
   </Link>

      
  <Typography className={classes.spacing}>
  
       <Link  className="Author">

      <ShareIcon className={classes.icon}/>
         Teilen
      </Link>

        <Link  className="Author">

      <BookmarkIcon className={classes.icon}/>
         Merken
      </Link>

         <Link  className="Author">

      <ChatBubbleIcon className={classes.icon}/>
         Kommentar
      </Link>
      
   </Typography>

   
</Grid>


      

   </Typography>
 
 
           
      </div>
     
  )
}


export const  SmallPict5=(props)=> {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography >
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
              


               <Grid className={classes.block2}>

<Link  className='HeadColor'>

{props.title}
</Link>
</Grid>

    <Grid className={classes.block1}>

    
<Link  className="LinkColor">


{props.description}
</Link>
</Grid >




<Link>

</Link>
<Grid  className={classes.block3}>

<Link   className="LinkColor">
 
{props.content}   
   </Link>

   <Link  className="More">

     Mehr...
   </Link>

      
  <Typography className={classes.spacing}>
  
       <Link  className="Author">

      <ShareIcon className={classes.icon}/>
         Teilen
      </Link>

        <Link  className="Author">

      <BookmarkIcon className={classes.icon}/>
         Merken
      </Link>

         <Link  className="Author">

      <ChatBubbleIcon className={classes.icon}/>
         Kommentar
      </Link>
      
   </Typography>

   
</Grid>


      

   </Typography>
 
 
           
      </div>
     
  )
}



export const  SmallPict6=(props)=> {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography >
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
              


               <Grid className={classes.block2}>

<Link  className='HeadColor'>

{props.title}
</Link>
</Grid>

    <Grid className={classes.block1}>

    
<Link  className="LinkColor">


{props.description}
</Link>
</Grid >




<Link>

</Link>
<Grid  className={classes.block3}>

<Link   className="LinkColor">
 
{props.content}   
   </Link>

   <Link  className="More">

     Mehr...
   </Link>

      
  <Typography className={classes.spacing}>
  
       <Link  className="Author">

      <ShareIcon className={classes.icon}/>
         Teilen
      </Link>

        <Link  className="Author">

      <BookmarkIcon className={classes.icon}/>
         Merken
      </Link>

         <Link  className="Author">

      <ChatBubbleIcon className={classes.icon}/>
         Kommentar
      </Link>
      
   </Typography>

   
</Grid>


      

   </Typography>
 
 
           
      </div>
     
  )
}



export const  SmallPict7=(props)=> {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography >
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
              


               <Grid className={classes.block2}>

<Link  className='HeadColor'>

{props.title}
</Link>
</Grid>

    <Grid className={classes.block1}>

    
<Link  className="LinkColor">


{props.description}
</Link>
</Grid >




<Link>

</Link>
<Grid  className={classes.block3}>

<Link   className="LinkColor">
 
{props.content}   
   </Link>

   <Link  className="More">

     Mehr...
   </Link>

      
  <Typography className={classes.spacing}>
  
       <Link  className="Author">

      <ShareIcon className={classes.icon}/>
         Teilen
      </Link>

        <Link  className="Author">

      <BookmarkIcon className={classes.icon}/>
         Merken
      </Link>

         <Link  className="Author">

      <ChatBubbleIcon className={classes.icon}/>
         Kommentar
      </Link>
      
   </Typography>

   
</Grid>


      

   </Typography>
 
 
           
      </div>
     
  )
}



export const  SmallPict8=(props)=> {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography >
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
              


               <Grid className={classes.block2}>

<Link  className='HeadColor'>

{props.title}
</Link>
</Grid>

    <Grid className={classes.block1}>

    
<Link  className="LinkColor">


{props.description}
</Link>
</Grid >




<Link>

</Link>
<Grid  className={classes.block3}>

<Link   className="LinkColor">
 
{props.content}   
   </Link>

   <Link  className="More">

     Mehr...
   </Link>

      
  <Typography className={classes.spacing}>
  
       <Link  className="Author">

      <ShareIcon className={classes.icon}/>
         Teilen
      </Link>

        <Link  className="Author">

      <BookmarkIcon className={classes.icon}/>
         Merken
      </Link>

         <Link  className="Author">

      <ChatBubbleIcon className={classes.icon}/>
         Kommentar
      </Link>
      
   </Typography>

   
</Grid>


      

   </Typography>
 
 
           
      </div>
     
  )
}


export const  SmallPict9=(props)=> {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography >
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
              


               <Grid className={classes.block2}>

<Link  className='HeadColor'>

{props.title}
</Link>
</Grid>

    <Grid className={classes.block1}>

    
<Link  className="LinkColor">


{props.description}
</Link>
</Grid >




<Link>

</Link>
<Grid  className={classes.block3}>

<Link   className="LinkColor">
 
{props.content}   
   </Link>

   <Link  className="More">

     Mehr...
   </Link>

      
  <Typography className={classes.spacing}>
  
       <Link  className="Author">

      <ShareIcon className={classes.icon}/>
         Teilen
      </Link>

        <Link  className="Author">

      <BookmarkIcon className={classes.icon}/>
         Merken
      </Link>

         <Link  className="Author">

      <ChatBubbleIcon className={classes.icon}/>
         Kommentar
      </Link>
      
   </Typography>

   
</Grid>


      

   </Typography>
 
 
           
      </div>
     
  )
}
