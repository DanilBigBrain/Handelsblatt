import React, { Component } from 'react'
import minilogo from './logos/handelsblatt.png'
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
       
        marginLeft: theme.spacing(2),
        
      },
      
    },


  }));
  
 
  export const Footer=(props)=> {
    const classes = useStyles();
    
        return (
            
            <div >
               
               <Container >

               <img className="PictureSize" src={minilogo} alt="logo" />

            
               </Container>
              
               <Link className="SizeofText">
               © 2021 Handelsblatt GmbH - ein Unternehmen der Handelsblatt Media Group GmbH & Co. KG
Verlags-Services für Werbung: iqdigital.de (Mediadaten) | Verlags-Services für Content: Digitale Unternehmens-Lösungen
Realisierung und Hosting der Finanzmarktinformationen: vwd Vereinigte Wirtschaftsdienste GmbH
Verzögerung der Kursdaten: Deutsche Börse 15 Min., Nasdaq und NYSE 20 Min.
Keine Gewähr für die Richtigkeit der Angaben. Bitte beachten Sie auch: Nutzungsbasierte Onlinewerbung
               </Link>
               
               <Button variant="outlined" onClick={props.update}>UPDATE</Button>

            </div>
        );
    
}
