import logo from './logo.svg';
import React,{useEffect, useState, Component} from 'react';
import './App.css';
// Handelsblatt Version
import MediaPlayer from './components/body/MediaPlayer.js'
import Links from './components/body/Links.js'
import {Footer} from './components/header/Footer.js'
import SecondThreeBars from './components/body/SecondThreeBars.js'
import {OnlyPicture} from './components/body/OnlyPicture.js'
import ThreeBars from './components/body/ThreeBars.js'
import Chart from './components/body/Chart.js'
import VideoPlayer from './components/body/VideoPlayer.js'
import Widget from './components/body/Widget.js'
import {Body4Pictures} from './components/body/Body4Pictures.js'
import SideBar from './components/body/SideBar.js'
import {SmallPict,SmallPict1,SmallPict2,SmallPict3,SmallPict4,SmallPict5,SmallPict6,SmallPict7,SmallPict8,SmallPict9} from './components/body/SmallPict.js'
import {Navbar} from './components/header/Navbar.js'
import {Body} from './components/body/Body.js'
import Buttonsgroup from './components/body/Buttonsgroup'
import {LargePict,LargePict1,LargePict2,LargePict3,LargePict4,LargePict5} from './components/body/LargePict'
import {Body3Pictures,Body3Pictures1,Body3Pictures2,Body3Pictures3,Body3Pictures4,Body3Pictures5,Body3Pictures6,Body3Pictures7,Body3Pictures8,Body3Pictures9,Body3Pictures10,Body3Pictures11,Body3Pictures12,Body3Pictures13,Body3Pictures14} from './components/body/Body3Pictures.js'
import Navbarfoot from './components/header/Navbarfoot.js'
import mainlogo from './logos/handelsblatt.png'
import test from './logos/bild.png'
import Grid from '@material-ui/core/Grid';
import noimage from './logos/noimage.png'
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//import {Ad} from './components/body/Ad.js'
import minilogo from './logos/HauFDfyf_normal.jpg'
import Format from './logos/1-formatOriginal.webp'
import MenuIcon from '@material-ui/icons/Menu';
import axios from 'axios';
import Data from './backend/data.json';
import { withStyles } from '@material-ui/core/styles';
import Data2 from './data2.json';
import Moment from 'moment'
import 'moment/locale/de'
import './script.js'
import FordTakeOver1 from './components/ads/components/Ford_Takeover.jpg'
import FordTakeOver2 from './components/ads/components/Ford_Takeover_2.jpg'
import FordTakeOver3 from './components/ads/components/Ford_Takeover_3.jpg'
//import Apple_Mobile_interscroller from './components/ads/components/Apple_Mobile_interscroller.jpg'


// Werbemittel 

import {FooterBanner} from './components/ads/FooterBanner.js'
import {UniCredit} from './components/ads/UniCredit.js'
import {DoppelSideBarRight} from './components/ads/DoppelSideBarRight.jsx'
import {DoppelSideBarLeft} from './components/ads/DoppelSideBarLeft.jsx'
import {Sidebar} from './components/ads/Sidebar.js'
import {MobileTakeover} from './components/ads/MobileTakeover.js'
import {MobileInterscroller} from './components/ads/MobileInterscroller.js'
import {Rectangle} from './components/ads/Rectangle.js'
import {UniCreditMini} from './components/ads/UniCreditMini.js'


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

function update(){
  axios.get("/getData").then(function(response){
    console.log(JSON.stringify(response.data,null,10))
  })
  setTimeout(() => {
    window.location.reload();
  }, 5000);
  
}



 class App extends React.Component {
  
  constructor(props) {  
  super(props);   
 this.state = {  
   footer:'none',
   billboard:'none',
   unicredit:'none',
   dopelside:'none',
   sidebar:'none',
   mobileInterscroller:'',
   MobileTakeover:'none',
   
   rectangle:'none',
  //date: new Date().toLocaleString()
  date: Moment().format('LLL'),
 };}

 componentDidMount(){
 
}

  render(){

    for(var i=0;i<20;i++){
      if(Data.articles[i].urlToImage==null){
        Data.articles[i].urlToImage={noimage}
    }
  }

  for(var i=0;i<20;i++){
    if(Data.articles[i].title==null){
      Data.articles[i].title="Der Titel wird zeitnah zur Verfügung gestellt "
  }
}
for(var i=0;i<20;i++){
  if(Data.articles[i].description==null){
    Data.articles[i].description="Die Artikelbeschreibung wird zeitnah zur Verfügung gestellt"
}
}
for(var i=0;i<20;i++){
  if(Data.articles[i].content==null){
    Data.articles[i].content="Der Inhalt wird zeitnah zur Verfügung gestellt  "
}
}



    const { classes } = this.props;
  
  
  
 
  
  return (
  

    
    <div className="Backscreen">
     
       {/*Fireplace place */}
      

       <div className="DesktopAds">

       <DoppelSideBarRight  Display={this.state.dopelside}/>

       <DoppelSideBarLeft  Display={this.state.dopelside}/>
       <UniCredit Display={this.state.unicredit}/>

       <Sidebar Display={this.state.sidebar}/>

       </div>
        {/*<UniCredit/> */}
      
       
      <CssBaseline />

     
      <Container id="container" className="Container" maxWidth="false">
      
        <Typography className="Typography" style={{  minHeight: '1760px'}} >

        

        <Navbar date={this.state.date}/>
         <p className="ABO">ABO</p>
        <MenuIcon className="HamburgerMenu"/>
        
        <Grid align="center">
       
        
        <div className="DivLogo">
           {/*Rectangle place*/}
           <Rectangle Display={this.state.rectangle}/>
        <img  className="Logo" src={mainlogo} alt="logo" />
        </div>
    </Grid>
    
    <Typography >
<hr width="100%" className={classes.line}>
  </hr>
</Typography>



<Navbarfoot/>

 {/*Billboard place*/}
<UniCreditMini Display={this.state.unicredit}/>

{/*Superbanner place*/}



<div className="MediumRectangleMobile">
<MobileTakeover image={FordTakeOver1} Display={this.state.MobileTakeover}/>
</div>

<Body title={Data.articles[0].title} description={Data.articles[0].description} content={Data.articles[0].content} image={Data.articles[0].urlToImage}/>
<Typography >
<hr width="100%" className={classes.line}>
  </hr>
</Typography>
<div className="First3Picturies">
<Body3Pictures image={Data.articles[1].urlToImage} image2={Data.articles[2].urlToImage} image3={Data.articles[3].urlToImage}
title={Data.articles[1].title} description={Data.articles[1].description} content={Data.articles[1].content}
title2={Data.articles[2].title} description2={Data.articles[2].description} content2={Data.articles[2].content}
title3={Data.articles[3].title} description3={Data.articles[3].description} content3={Data.articles[3].content}/>
</div>




<Typography >
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="100%" className="Thickline">
  </hr>
</Typography>


<Body3Pictures1 image={Data.articles[4].urlToImage} image2={Data.articles[5].urlToImage} image3={Data.articles[6].urlToImage}
title={Data.articles[4].title} description={Data.articles[4].description} content={Data.articles[4].content}
title2={Data.articles[5].title} description2={Data.articles[5].description} content2={Data.articles[5].content}
title3={Data.articles[6].title} description3={Data.articles[6].description} content3={Data.articles[6].content}/>

<div className="Interscroller">

<MobileInterscroller Display={this.state.mobileInterscroller}/>

</div>
{/*Вот тут граница*/}

<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  <img className="Minilogo" src={minilogo} alt="logo" />
  MEINE NEWS
  </Link>

  <Link className="TextaboveLine2">
  Weiter zu meine news 
  </Link>
</Container>
<hr width="100%" className="Thickline">
  </hr>
</Typography>


<div className="MediumRectangleMobile">
<MobileTakeover image={FordTakeOver2} Display={this.state.MobileTakeover}/>
</div>

<Container>
<UniCreditMini Display={this.state.unicredit}/>
<Buttonsgroup/>
<Grid>
<SideBar/>
</Grid>
<MediaPlayer/>



<LargePict title={Data.articles[7].title} description={Data.articles[7].description} content={Data.articles[7].content} image={Data.articles[7].urlToImage}/>

<SmallPict title={Data.articles[13].title} description={Data.articles[13].description} content={Data.articles[13].content} image={Data.articles[13].urlToImage}/>

<SmallPict1 title={Data.articles[14].title} description={Data.articles[14].description} content={Data.articles[14].content} image={Data.articles[14].urlToImage}/>

<LargePict1 title={Data.articles[8].title} description={Data.articles[8].description} content={Data.articles[8].content} image={Data.articles[8].urlToImage}/>

<SmallPict2 title={Data.articles[15].title} description={Data.articles[15].description} content={Data.articles[15].content} image={Data.articles[15].urlToImage}/>

<SmallPict3 title={Data.articles[16].title} description={Data.articles[16].description} content={Data.articles[16].content} image={Data.articles[16].urlToImage}/>

<LargePict2 title={Data.articles[0].title} description={Data.articles[0].description} content={Data.articles[0].content} image={Data.articles[0].urlToImage}/>

<SmallPict4 title={Data.articles[17].title} description={Data.articles[17].description} content={Data.articles[17].content} image={Data.articles[17].urlToImage}/>

<SmallPict5 title={Data.articles[3].title} description={Data.articles[3].description} content={Data.articles[3].content} image={Data.articles[3].urlToImage}/>

<LargePict3 title={Data.articles[10].title} description={Data.articles[10].description} content={Data.articles[10].content} image={Data.articles[10].urlToImage}/>

<SmallPict6 title={Data.articles[19].title} description={Data.articles[19].description} content={Data.articles[19].content} image={Data.articles[19].urlToImage}/>

<SmallPict7 title={Data2.articles[20].title} description={Data2.articles[20].description} content={Data2.articles[20].content} image={Data2.articles[20].urlToImage}/>

<LargePict4 title={Data2.articles[21].title} description={Data2.articles[21].description} content={Data2.articles[21].content} image={Data2.articles[21].urlToImage}/>

<SmallPict8 title={Data2.articles[22].title} description={Data2.articles[22].description} content={Data2.articles[22].content} image={Data2.articles[22].urlToImage}/>

<SmallPict9 title={Data2.articles[23].title} description={Data2.articles[23].description} content={Data2.articles[23].content} image={Data2.articles[23].urlToImage}/>

<LargePict5 title={Data2.articles[24].title} description={Data2.articles[24].description} content={Data2.articles[24].content} image={Data2.articles[24].urlToImage}/>


<UniCreditMini Display={this.state.unicredit}/>


<div className="MediumRectangleMobile">
<MobileTakeover image={FordTakeOver3} Display={this.state.MobileTakeover}/>
</div>

<Widget/>




</Container>
<div className="HideElement">
<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  Exklusiv für Abonnenten 
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>


<div className="HideElemets">

<Body3Pictures2 title={Data2.articles[25].title} description={Data2.articles[25].description} content={Data2.articles[25].content} image={Data2.articles[25].urlToImage}
title2={Data2.articles[26].title} description2={Data2.articles[26].description} content2={Data2.articles[26].content} image2={Data2.articles[28].urlToImage}
title3={Data2.articles[29].title} description3={Data2.articles[29].description} content3={Data2.articles[29].content} image3={Data2.articles[29].urlToImage}/>

<Grid align="center">
<img  className="Image" src={Format} alt="logo" />
</Grid>


<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>

<Body3Pictures3 title={Data2.articles[30].title} description={Data2.articles[30].description} content={Data2.articles[30].content} image={Data2.articles[30].urlToImage}
title2={Data2.articles[31].title} description2={Data2.articles[31].description} content2={Data2.articles[31].content} image2={Data2.articles[31].urlToImage}
title3={Data2.articles[32].title} description3={Data2.articles[32].description} content3={Data2.articles[32].content} image3={Data2.articles[32].urlToImage}/>



<Body3Pictures4 title={Data2.articles[33].title} description={Data2.articles[33].description} content={Data2.articles[33].content} image={Data2.articles[33].urlToImage}
title2={Data2.articles[34].title} description2={Data2.articles[34].description} content2={Data2.articles[34].content} image2={Data2.articles[34].urlToImage}
title3={Data2.articles[35].title} description3={Data2.articles[35].description} content3={Data2.articles[35].content} image3={Data2.articles[35].urlToImage}/>


<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>

<Body3Pictures5 title={Data2.articles[36].title} description={Data2.articles[36].description} content={Data2.articles[36].content} image={Data2.articles[36].urlToImage}
title2={Data2.articles[37].title} description2={Data2.articles[37].description} content2={Data2.articles[37].content} image2={Data2.articles[37].urlToImage}
title3={Data2.articles[38].title} description3={Data2.articles[38].description} content3={Data2.articles[38].content} image3={Data2.articles[38].urlToImage}/>


<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>

<Body3Pictures6 title={Data2.articles[15].title} description={Data2.articles[15].description} content={Data2.articles[15].content} image={Data2.articles[15].urlToImage}
title2={Data2.articles[16].title} description2={Data2.articles[16].description} content2={Data2.articles[16].content} image2={Data2.articles[16].urlToImage}
title3={Data.articles[17].title} description3={Data.articles[17].description} content3={Data.articles[17].content} image3={Data.articles[17].urlToImage}/>


<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>

<Body3Pictures7 title={Data2.articles[39].title} description={Data2.articles[39].description} content={Data2.articles[39].content} image={Data2.articles[39].urlToImage}
title2={Data.articles[19].title} description2={Data.articles[19].description} content2={Data.articles[19].content} image2={Data.articles[19].urlToImage}
title3={Data.articles[3].title} description3={Data.articles[3].description} content3={Data.articles[3].content} image3={Data.articles[3].urlToImage}/>


<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>

<Body3Pictures8 title={Data2.articles[22].title} description={Data2.articles[22].description} content={Data2.articles[22].content} image={Data2.articles[22].urlToImage}
title2={Data.articles[8].title} description2={Data.articles[8].description} content2={Data.articles[8].content} image2={Data.articles[8].urlToImage}
title3={Data.articles[12].title} description3={Data.articles[12].description} content3={Data.articles[12].content} image3={Data.articles[12].urlToImage} />



<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>

<Body3Pictures9 title={Data.articles[0].title} description={Data.articles[0].description} content={Data.articles[0].content} image={Data.articles[0].urlToImage}
title2={Data2.articles[31].title} description2={Data2.articles[31].description} content2={Data2.articles[31].content} image2={Data2.articles[31].urlToImage}
title3={Data2.articles[2].title} description3={Data2.articles[2].description} content3={Data2.articles[2].content} image3={Data2.articles[2].urlToImage}/>


<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>

<Body3Pictures10 title={Data.articles[15].title} description={Data.articles[15].description} content={Data.articles[15].content} image={Data.articles[15].urlToImage}
title2={Data.articles[19].title} description2={Data.articles[19].description} content2={Data.articles[19].content} image2={Data.articles[19].urlToImage}
title3={Data.articles[11].title} description3={Data.articles[11].description} content3={Data.articles[11].content} image3={Data.articles[11].urlToImage}/>



<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>

<Body3Pictures11 title={Data2.articles[17].title} description={Data2.articles[17].description} content={Data2.articles[17].content} image={Data2.articles[17].urlToImage}
title2={Data2.articles[20].title} description2={Data2.articles[20].description} content2={Data2.articles[20].content} image2={Data2.articles[20].urlToImage}
title3={Data2.articles[33].title} description3={Data2.articles[33].description} content3={Data2.articles[33].content} image3={Data2.articles[33].urlToImage}/>



<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>

<Body3Pictures12 title={Data.articles[6].title} description={Data.articles[6].description} content={Data.articles[6].content} image={Data.articles[6].urlToImage}
title2={Data.articles[13].title} description2={Data.articles[13].description} content2={Data.articles[13].content} image2={Data.articles[13].urlToImage}
title3={Data2.articles[19].title} description3={Data2.articles[19].description} content3={Data2.articles[19].content} image3={Data2.articles[19].urlToImage}/>



<Typography >
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  WirtschaftsWoche
  </Link>

  <Link className="TextaboveLine2">
  Mehr zum Thema 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>
</div>

</div>


<div className="Pictures4">
<Body4Pictures title={Data.articles[0].title} description={Data.articles[0].description} content={Data.articles[0].content} image={Data.articles[0].urlToImage}
title2={Data.articles[1].title} description2={Data.articles[1].description} content2={Data.articles[1].content} image2={Data.articles[1].urlToImage}
title3={Data.articles[2].title} description3={Data.articles[2].description} content3={Data.articles[2].content} image3={Data.articles[2].urlToImage}
title4={Data.articles[4].title} description4={Data.articles[4].description} content4={Data.articles[4].content} image4={Data.articles[4].urlToImage}/>
</div>

<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>

<Body3Pictures13 title={Data.articles[10].title} description={Data.articles[10].description} content={Data.articles[10].content} image={Data.articles[10].urlToImage}
title2={Data.articles[16].title} description2={Data.articles[16].description} content2={Data.articles[16].content} image2={Data.articles[16].urlToImage}
title3={Data.articles[1].title} description3={Data.articles[1].description} content3={Data.articles[1].content} image3={Data.articles[1].urlToImage}/>

<div className="Panel">

</div>


<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  LESERFAVORITEN
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>

<Body3Pictures14 title={Data2.articles[5].title} description={Data2.articles[5].description} content={Data2.articles[5].content} image={Data2.articles[5].urlToImage}
title2={Data.articles[8].title} description2={Data.articles[8].description} content2={Data.articles[8].content} image2={Data.articles[8].urlToImage}
title3={Data.articles[2].title} description3={Data.articles[2].description} content3={Data.articles[2].content} image3={Data.articles[2].urlToImage}/>



<div className="HideElement">
<Container>
<VideoPlayer/>
<div>

</div>
</Container>
</div>
<Grid align="center">
<Chart/>
</Grid>

<div className="HideElement">
<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine">
  Blickfang
  </Link>

  <Link className="TextaboveLine2">
  Mehr exklusive Beiträge 
  </Link>
</Container>
<hr width="96%" className="Thickline">
  </hr>
</Typography>


<OnlyPicture image={Data.articles[16].urlToImage}/>



<Typography>
<Container className="TextaboveLine">

  <Link className="TextaboveLine3">
  PARTNERSEITEN
  </Link>


</Container>
<hr width="96%" className={classes.line}>
  </hr>
</Typography>


<SecondThreeBars/>


<Typography>
<Container className="TextaboveLine">

</Container>
<hr width="96%" className={classes.line}>
  </hr>
</Typography>

<Links/>

</div>
<Footer update={update}/>

<FooterBanner Display={this.state.footer}/>

  </Typography>

  
 
      </Container>

      
      
      
     
    </div>
 
  );}

  
  
}


export default withStyles(styles)(App);