import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import './Navbar.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
      color: '#646464',
      
       fontSize:11,
     width:'100%',
       '@media (max-width: 768px)': {
        fontSize:9,
       }
       
    },
   
  },
  line:{
    color:'#b9b9b9'

  },


  date:{
    color: '#646464',
    //fontSize:'0.7vw', //12
    fontSize:10,
  },

  test:{
    
  },

  abo:{
    backgroundColor:'#ef7100',
    float:'right',
    color:'white',
    width:40,
   
    
  },
  login:{
    
    float:'right',
    
    width:40,
   
    
  }
}));

export  const Navbar=(props)=> {
  const classes = useStyles();


  return (
    <div className="HeadSize">

    <div className="Date">
       <Link  href="#" className={classes.date}>
        {props.date}
      </Link>
      </div>

<div className="NavPos">
    <Typography align="center" className={classes.root}>
      <Link href="#" >
        
      </Link>

    

     
      

      <Link  href="#" >
        Newsletter
      </Link>
      <Link href="#"  variant="body2">
       Podcasts
      </Link>
      <Link href="#"  variant="body2">
       Club
      </Link>
      <Link href="#"  variant="body2">
       ePaper
      </Link>
      <Link href="#"  variant="body2">
       Archiv
      </Link>
      <Link href="#"  variant="body2">
       Veranstaltungen
      </Link>
      <Link href="#"  variant="body2">
       Shop
      </Link>
      <Link href="#"  variant="body2">
       Jobs
      </Link>
      <Link href="#"  variant="body2">
       Inside
      </Link>

      
      <Link href="#"  className={classes.abo}>
       Abo
      </Link>
      <Link href="#"  className={classes.login} >
       Login
      </Link>

    
     

    </Typography>

    </div>
  
<Typography>
<hr width="100%" className={classes.line}>
  </hr>
</Typography>



</div>

  );
  
}

