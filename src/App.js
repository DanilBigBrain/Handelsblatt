
import React,{useEffect, useState, Component} from 'react';
import './App.css';
// Handelsblatt Version
//import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Moment from 'moment'
import DoubleSide from './DoubleSide';
import Interscroller from './Interscroller';
import Interscroller2 from './Interscroller2';
import Rollover from './Rollover';
import Sidebar from './Sidebar';
import Takeover from './Takeover';
import Link from '@material-ui/core/Link';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
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
  

    
    <div >


    <div id="buttons" className="Name">
    <p className="Title">Handelsblatt Simulator</p>
    <p>Werbeformen auswählen</p>
      
    
   


    <div className="Menu">

    <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
        s
      >
        <Button href="/DoubleSide">DoubleSide</Button>
        <Button href="/Interscroller">Interscroller</Button>
        <Button href="/Rollover">Rollover</Button>
        <Button href="/Sidebar">Sidebar</Button>
        <Button href="/Takeover">Takeover</Button>
        <Button href="/Interscroller2">Interscroller Muenchen</Button>
      </ButtonGroup>
    
   
   
    </div>
    <p className="Bottom">© 2021 annalect. A brand of Omnicom Media Group. All Rights reserved</p>
    </div>
    
    <Router basename={process.env.PUBLIC_URL}>

      <div>
       
     
     <Switch>
      <Route path="/DoubleSide">
      <DoubleSide/>
      </Route>

      <Route path="/Interscroller">
      <Interscroller/>
      </Route>

      <Route path="/Interscroller2">
      <Interscroller2/>
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