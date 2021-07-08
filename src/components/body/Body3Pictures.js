import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Test from './picture_test/test.jpg'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import noimage from './picture_test/noimage.jpg'
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
        width:'31%',

        
       
        
        '@media (max-width: 768px)': {
          height:'auto',
          width:'28%',
        },
        '@media (max-width: 480px)': {
          height:'auto',
          width:'28%',
          marginLeft:6
        }
       
    },
    block1:{
      
      height:'auto',
        width:'31%',
       '@media (max-width: 768px)': {
        
        
      }
      
     
    },
    block2:{
        
       marginLeft:29,
       fontSize:15,
       '@media (max-width: 768px)': {
        marginLeft:theme.spacing(2),
        width:150,
        
      },
      '@media (max-width: 480px)': {
       
        marginLeft:17
      }
    },
    block3:{
        
        width:306,
        marginLeft:31
        
    },
   
    text:{
     marginTop:theme.spacing(2),
     '@media (max-width: 768px)': {
        
     display:'none'
    }
    },
    
   newstext:{
    width:'32%',
    marginLeft:4,
    display:'flex',
    flexDirection:'column',
    float:'left',
    
    '@media (max-width: 768px)': {
      width:'32%',
      
      
     }
   },

   headcontainer:{
     height:50,
     textOverflow:'ellipsis',
     overflow:'hidden'
     
   },
  
   container:{
     width:'100%',
   },

   test:{
    '@media (max-width: 768px)': {
        
      width:170
     }
   }


  }));
  
 
  export const Body3Pictures=(props) =>{
    const classes = useStyles();
    
        return (
            
            <div className="BodySize">
               
     
          <Typography>
  
      <Container maxWidth="false" className={classes.container}>

    <Link className={classes.block1}>
    <img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
    
    </Link> 
    

  
    <Link className={classes.block2}>
    <img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
   
    </Link>
   

    <Link className={classes.block3}>
    <img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />
    
    </Link>
    
   
    </Container>
  
  <Typography className={classes.newstext}>

  <Link>
      
      </Link>


<Container className="HeadContainer">

<Link  className="HeadColor">
  
{props.title}
  
  </Link>
  </Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">
  
{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">
  
{props.content}  
  </Link>

  <Link  className="More">
  
   Mehr
  
  </Link>
  </Container>

  </Typography>




  <Typography className={classes.newstext}>

<Link>
    
    </Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

 Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>
    
    </Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container>


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

 Mehr

</Link>
</Container>

</Typography>

</Typography>

            </div>
        );
    
}




export const Body3Pictures1=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}



export const Body3Pictures2=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}

export const Body3Pictures3=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}

export const Body3Pictures4=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

  <Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}



export const Body3Pictures5=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}


export const Body3Pictures6=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}


export const Body3Pictures7=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}

export const Body3Pictures8=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}}/>

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img  className={classes.picture} src={props.image3}  onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}}/>

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}

export const Body3Pictures9=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}


export const Body3Pictures10=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}


export const Body3Pictures11=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}


export const Body3Pictures12=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container >

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}


export const Body3Pictures13=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}


export const Body3Pictures14=(props) => {
  const classes = useStyles();
  
  return (
            
    <div className="BodySize">
       

  <Typography>

<Container maxWidth="false" className={classes.container}>

<Link className={classes.block1}>
<img className={classes.picture} src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link> 



<Link className={classes.block2}>
<img className={classes.picture} src={props.image2} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


<Link className={classes.block3}>
<img className={classes.picture} src={props.image3} onError={(e)=>{e.target.onerror = null; e.target.src="https://i.stack.imgur.com/y9DpT.jpg"}} />

</Link>


</Container>

<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content}  
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title2}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description2}

</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content2}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>




<Typography className={classes.newstext}>

<Link>

</Link>


<Container className="HeadContainer">

<Link  className="HeadColor">

{props.title3}

</Link>
</Container>

<Container className="DescriptionContainer">


<Link  className="ColorandSize">

{props.description3}
</Link>
</Container>


<Container className={classes.text}>

<Link  className="BlockText">

{props.content3}
</Link>

<Link  className="More">

Mehr

</Link>
</Container>

</Typography>

</Typography>

    </div>
);
  
}
