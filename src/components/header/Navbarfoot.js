import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import './Navbar.css';
import Grid from '@material-ui/core/Grid';
import minilogo from './logos/HauFDfyf_normal.jpg'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { CenterFocusStrong } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
      color: '#000000',
       fontWeight:700,
       fontSize:'0.75vw', //11
      height:'auto',
      width:'100%',
      '@media (max-width: 768px)': {
        fontWeight:700,
        fontSize:9,
      },
      "&:hover": {
        color: "#ef7100",
        
      },
    },
    
  },
  minilogo:{
    width:18,
    height:18,
    
    
    
  },
  line:{
    color:'#b9b9b9'

  },

  underline:{
    '& > * + *':{
    color: '#b9b9b9',
    fontSize:11,
    
  },

}
}));



export default function Links() {
  const classes = useStyles();


  return (
    <div className="NavFoot">
    <Typography align="center" className={classes.root}>
      <Link href="#">
      
      </Link>
     
      <Link  href="#" >
      <img className={classes.minilogo} src={minilogo} alt="logo" />
        MEINE NEWS
      </Link>
      <Link  href="#" >
        |
      </Link>
      <Link href="#"  variant="body2" >
       HOME
      </Link>
      <Link href="#"  variant="body2">
       POLITIK
      </Link>
      <Link href="#"  variant="body2">
       UNTERNEHMEN
      </Link>
      <Link href="#"  variant="body2">
       TECHNOLOGIE
      </Link>
      <Link href="#"  variant="body2">
       FINANZEN
      </Link>
      <Link href="#"  variant="body2">
       MOBILITÄT
      </Link>
      <Link href="#"  variant="body2">
       KARRIERE
      </Link>
      <Link href="#"  variant="body2">
       ARTS & STYLE 
      </Link>
      <Link href="#" variant="body2">
       MEINUNG
      </Link>
      <Link href="#"   variant="body2">
       VIDEO
      </Link>

      <Link href="#"   variant="body2">
       SERVICE
      </Link>
    
     

    </Typography>
  
<Typography>
<hr width="100%" className={classes.line}>
  </hr>
</Typography>






</div>



  );
  
}

