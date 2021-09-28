
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Test from './picture_test/test.jpg'
import Container from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Noimage from './picture_test/noimage.png'
import  './Body.css'

const useStyles = makeStyles((theme) => ({

    picture:{
        height: 'auto',
        width:'100%',
        marginTop:20,
      
    },

   
    block1:{
    
      //31
        fontSize:19,
        fontWeight:'bolder',
        height:'auto', //95
        overflow:'hidden',
        textOverflow:'ellipsis',
        whiteSpace:'pre-line',
        
    },
    block2:{
       //14
        fontSize:14,
        width:250,
        overflow:'hidden',
        height:45,
       
    },
    block3:{
        fontSize:14,  
        marginTop:20
       
        
    },
    icon:{
        fontSize:11,
        
        
    },
    test:{
        float:'right',
        '@media (max-width: 768px)': {
        
         display:'none'
        }
    },
    spacing:{
        '& > * + *': {
       
            marginLeft: theme.spacing(2),
           

        },
    },
   

  }));

  



export const  LargePict=(props) => {
    const classes = useStyles();
    return (
        <div className="LargePict">

            <Typography className={classes.test}>
                
                

            <hr className="LineColor"></hr>
            
            <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src=Noimage}} />
                


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



export const  LargePict1=(props) =>{
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography className={classes.test}>
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src=Noimage}} />
              


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


export const  LargePict2=(props) => {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography className={classes.test}>
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src=Noimage}} />
              


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


export const  LargePict3=(props) => {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography className={classes.test}>
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src=Noimage}} />
              


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


export const  LargePict4=(props) => {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography className={classes.test}>
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src=Noimage}} />
              


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



export const  LargePict5=(props) => {
    const classes = useStyles();
    return (
      <div className="LargePict">

          <Typography className={classes.test}>
              
              

          <hr className="LineColor"></hr>
          
          <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src=Noimage}} />
              


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
