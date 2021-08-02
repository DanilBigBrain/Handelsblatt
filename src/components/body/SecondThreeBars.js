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
        maxWidth:1020,
        marginLeft: theme.spacing(2),
        
      },
      
    },
    block1:{
      
        width:306,
      
       
      
     },
     block2:{
         width:306,
        
        
     },
     block3:{
         
         width:306,
        
         
     },

     container:{
      
       
       
      }
    
  }));




  export default function ThreeBars() {
    const classes = useStyles();
    
        return (
            
               <div className="BodySize">
     
            <Typography >
    
        <Container >

            <Link>
            
            </Link>
  
      <Link  className={classes.block1}>
            <div className="SecondThreeBars">

            <div className="ThreebarsPicker">

<div className="HeadWords2">
  <p>Wirtschaftswoche online</p>

 
</div>



</div>

            <div className="Textblock">

            <p className="ThreeBarsHead">Blick hinter die Zahlen #66s</p>
              <p className="ThreeBarsText">Die Kosten der Lebenshaltung steigen – und es dürfte noch viel teurer werden</p>
             

              </div>



            <div className="Textblock">

            <p className="ThreeBarsHead">Insolvenzantragspflicht</p>
              <p className="ThreeBarsText">Warten auf die Pleitewelle</p>
             

              </div>

              <div className="Textblock">

<p className="ThreeBarsHead">Arbeiten nach Corona</p>
  <p className="ThreeBarsText">Die erstaunlich agile Welt der Versicherungen</p>
 

  </div>
  <hr width="96%">
              </hr>

              <p className="ThreeBarsWeiterArtikels">WEITERE ARTIKEL </p>

            </div>
      
      </Link> 
      
  
    
      <Link className={classes.block2}>
     
      <div className="SecondThreeBars">

      <div className="ThreebarsPicker">

<div className="HeadWords2">
  <p>Zeit online</p>

 
</div>



</div>

<div className="Textblock">

<p className="ThreeBarsHead">Verbraucherpreise</p>
  <p className="ThreeBarsText">Kehrt das Gespenst der Inflation zurück?</p>
 

  </div>



<div className="Textblock">

<p className="ThreeBarsHead">Bahn</p>
  <p className="ThreeBarsText">Photovoltaik-Park in Betrieb genommen</p>
 

  </div>

  <div className="Textblock">

<p className="ThreeBarsHead">EM-Vorbereitung</p>
<p className="ThreeBarsText">Löw schürt die Gier - Hummels</p>


</div>
<hr width="96%">
  </hr>

  <p className="ThreeBarsWeiterArtikels">WEITERE ARTIKEL </p>

            </div>
      </Link>
      
  
      <Link className={classes.block3}>
      <div className="SecondThreeBars">
      <div className="ThreebarsPicker">

<div className="HeadWords2">
  <p>Statista - das Statistik-Portal </p>

 
</div>



</div>

<div className="Textblock">

<p className="ThreeBarsHead">Statista</p>
  <p className="ThreeBarsText">Digitales Impfzertifikat hoch im Kurs </p>
 

  </div>



<div className="Textblock">

<p className="ThreeBarsHead">Analyst</p>
  <p className="ThreeBarsText">innen rechnen mit moderatem Leerstandsanstieg </p>
 

  </div>

  <div className="Textblock">

<p className="ThreeBarsHead">Statista</p>
<p className="ThreeBarsText">Weltwirtschaft könnte 2021 um 5,8% wachsen </p>


</div>
<hr width="96%">
  </hr>

  <p className="ThreeBarsWeiterArtikels">WEITERE ARTIKEL </p>


            </div>
      
      </Link>
      
     
      </Container>
    
  
  </Typography>
  </div>
            
        );
    
}
