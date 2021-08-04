
import React,{useEffect, useState, Component} from 'react';
import './App.css';
// Handelsblatt Version
import { BrowserRouter, BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';

import Moment from 'moment'
import DoubleSide from './DoubleSide';
import Interscroller from './Interscroller';
import Rollover from './Rollover';
import Sidebar from './Sidebar';
import Takeover from './Takeover';
import Link from '@material-ui/core/Link';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

//import Apple_Mobile_interscroller from './components/ads/components/Apple_Mobile_interscroller.jpg'


// Werbemittel 



const styles  = theme=> ({
  root: {
     
    maxWidth:1020, //1020
    backgroundColor:'white',
    
    
    
    '@media (max-width: 480px)': {
      
     }
    
  },

  line:{
    color:'#b9b9b9',
    width:'100%',
    '@media (max-width: 768px)': {
      display:'none'
    }

  },
  minilogo:{
    width:21,
    height:21
  },

  test:{
    position:'sticky'
  }
});




 class App extends React.Component {
  
  constructor(props) {  
  super(props);   
 this.state = {  
   footer:'none',
   billboard:'none',
   unicredit:'none',
   dopelside:'none',
   sidebar:'none',
   mobileInterscroller:'none',
   MobileTakeover:'none',
   
   rectangle:'none',
  //date: new Date().toLocaleString()
  date: Moment().format('LLL'),
 };}

 componentDidMount(){
 
}

  render(){

  
  
  
  
 
  
  return (
  

    
    <div>


    <div className="Name">
    
    <p>Werbeformen auswählen</p>
      
    </div>
   

    <div id="buttons" className="Menu">

    <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button href="/DoubleSide">DoubleSide</Button>
        <Button href="/Interscroller">Interscroller</Button>
        <Button href="/Rollover">Rollover</Button>
        <Button href="/Sidebar">Sidebar</Button>
        <Button href="/Takeover">Takeover</Button>
      </ButtonGroup>
    
   
   
    </div>
 
    
    <Router>

      <div>
       
     
     <Switch>
      <Route path="/DoubleSide">
      <DoubleSide/>
      </Route>

      <Route path="/Interscroller">
      <Interscroller/>
      </Route>

      <Route path="/Rollover">
      <Rollover/>
      </Route>

      <Route path="/Sidebar">
      <Sidebar/>
      </Route>

      <Route path="/Takeover">
      <Takeover/>
      </Route>

     </Switch>

     </div>

    </Router>

    </div>
 
  );}

  
  
}


export default withStyles(styles)(App);