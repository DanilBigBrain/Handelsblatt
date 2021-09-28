import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Test from './picture_test/test.jpg'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Mensch1 from './picture_test/Mensch_1.jpg'
import Mensch2 from './picture_test/Mensch_2.jpg'
import Firmen from './picture_test/firmen.tv.webp'
import Gastro from './picture_test/gastrotipps.webp'
import Partner from './picture_test/partner.webp'
import Beratung from './picture_test/beratung.de.webp'
import Iframe from './picture_test/iframe.png'

import  './Body.css'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
       
        marginLeft: theme.spacing(2),
        display:'flex',
        flexDirection:'column'
         
      },
      
    }, 
    picture:{
     
      marginTop:20,
      cursor:'pointer'
     
  },
  

  }));


  
  export default function SideBar() {
    const classes = useStyles();
      return (
          <div className="SideBar">

            
              <div className="Newsticker">

              <div className="SidebarPicker">

                <div className="HeadWords">
                  <p>Newsticker Märkte</p>
                
                 
                </div>

             
              
              </div>

              <div className="Textblock">

              <p className="Text">Dax strebt plötzlich Richtung Rekordhoch – Kleinanleger schlagen die Profis an der Wall Street</p>
             

              </div>
              <hr width="96%">
              </hr>


              <div className="Textblock">

            <p className="Text">Peek & Cloppenburg übernimmt dänische Kaufhauskette Magasin du Nord</p>


              </div>
              <hr width="96%">
              </hr>

              <div className="Textblock">

            <p className="Text">Konsumentenpreise in den USA steigen im April um 3,6 Prozent</p>


              </div>
              <hr width="96%">
              </hr>

              <div className="Textblock">

            <p className="Text">Anleger spekulieren auf Zerschlagung von Monte Paschi</p>


              </div>
              <hr width="96%">
              </hr>

              <div className="Textblock">

            <p className="Text">Ausverkauf gewinnt an Dynamik: Türkische Lira fällt auf Rekordtief</p>


              </div>
              <hr width="96%">
              </hr>


              <div className="Textblock">

            <p className="Text">Bundesrat stimmt Konsequenzen aus Wirecard-Skandal zu</p>


              </div>
              <hr width="96%">
              </hr>


              <div className="Textblock">

            <p className="Text">Dezentrale Netze: Krypto-Revolution an den Finanzmärkten</p>


              </div>
              <hr width="96%">
              </hr>


              <div className="Textblock">

            <p className="Text">Große Nachfrage treibt Goldbestand bei Deutscher Börse auf Rekordhoch</p>


              </div>
              <hr width="96%">
              </hr>


              <div className="Textblock">

            <p className="Text">Schweizer Politiker wollen sich nach Skandalen Bank-Bosse vorknöpfen</p>


              </div>
              <hr width="96%">
              </hr>


              <div className="Textblock">

            <p className="Text">Boeing stoppt erneut Auslieferung von 787</p>


              </div>
              <hr width="96%">
              </hr>


              <div className="Textblock">

            <p className="Text">Credit Suisse: Interne Warnungen zu Sanjeev Gupta wurden wohl überhört</p>


              </div>
              <hr width="96%">
              </hr>


              
              </div>
              
              <div className="Newsticker">

              <div className="SidebarPicker">

              <div className="HeadWords2">   
              <p>Aktuelle Gastbeitrage</p>

 
            </div>

            <img className={classes.picture} src={Mensch1} alt="logo" />

            <div className="Textblock">
            <p className="Text2">Personengesellschaften könnten viel einfacher Kapitalgesellschaften gleichgestellt werden</p>
            <p className="Text3">Der Gesetzentwurf zur besseren steuerlichen Behandlung einbehaltener Gewinne ist ein unnötiges Beschäftigungsprogramm für Steuerberater, kritisiert Lorenz Jarass.</p>
            </div>
            
            <img className={classes.picture} src={Mensch2} alt="logo" />

            <div className="Textblock">
            <p className="Text2">Nach Corona müssen wir Risiken neu denken</p>
            <p className="Text3">Um Gefahren wie die Pandemie künftig besser in den Griff zu kriegen, sollten Regierungen einen Chief Risk Manager einsetzen, rät Werner Hoyer.</p>
            </div>
            

            </div>
             

              </div>


              <div className="WahlPict">
              <img className={classes.picture} src={"https://www.handelsblatt.com/images/teaser_wahlomat_bw/27208754/3-formatOriginal.png"} alt="logo" />
              </div>
              <div className="Newsticker" style={{overflowY:'hidden'}}>
              <iframe  className="ElectionFrame" scrolling="no" src="https://datawrapper.dwcdn.net/WifNk/5/"></iframe>
              </div>
              
              <div className="Smallnewsticker" >
              {/*<iframe  className="Chart" scrolling="no" src="https://finanzen.handelsblatt.com/include_topflop.htn?ansicht=uebersicht&size=405"></iframe>*/}
              <img src={Iframe} className="Chart"/>
              </div>

              <div className="Smallnewsticker">

              <div className="SidebarPicker">

              <div className="HeadWords2">   
              <p>Bilanzcheck </p>

              </div>


              </div>

              <img className={classes.picture} style={{marginLeft:8}} src={"https://www.handelsblatt.com/images/-/27156784/3-format2012.png"} alt="logo" />

            <div className="Textblock">
            <p className="Text2">Die Dax-Konzerne im Handelsblatt-Bilanzcheck</p>
            <p className="Text3">Die Corona-Pandemie hat Firmen zugesetzt. Wie kommen sie durch die Krise? Wie steht es um ihre Zukunftsfähigkeit? Lesen Sie unsere Analysen zu den 30 Dax-Konzernen.</p>
            </div>

              </div>
                            
 
 


              <div className="Smallnewsticker">

              <div className="SidebarPicker">

              <div className="HeadWords2">   
              <p>Partnerangebote </p>

              </div>


              </div>

            
              <img className={classes.picture} style={{marginLeft:8}} src={Firmen} alt="logo" />
              <img className={classes.picture} style={{marginLeft:8}} src={Gastro} alt="logo" />
              <img className={classes.picture} style={{marginLeft:8}} src={Partner} alt="logo" />
              <img className={classes.picture} style={{marginLeft:8}} src={Beratung} alt="logo" />
             </div>
             
          </div>
      )
  }
  