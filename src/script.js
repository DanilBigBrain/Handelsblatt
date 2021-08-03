

document.addEventListener("DOMContentLoaded", () => {
  
    
    
    var dopelsiteAd=document.getElementById("DopelRight")
    var mediaplayer=document.getElementById("mediaplayer")
    var container=document.getElementById("container")
    var rollover=document.getElementById("rollover")
    var sidebar=document.getElementById("sidebar")
    //var block1SmalPict=document.getElementById("block1")

   container.style.maxWidth=dopelsiteAd.style.display==='none'? '1020px':'820px'
   container.style.maxWidth=sidebar.style.display==='none'? '1020px':'820px'
   container.style.marginTop=rollover.style.display==='none'? '0':'10%'
   
   
   //container.style.setProperty("-webkit-transition", " 2s linear")
   //container.style.setProperty("-moz-transition", " 2s linear")

/*


    if(document.getElementById("DopelRight").style.display=='none')
    {
      document.getElementById("container").style.width='1020px'
     
    }
    if(document.getElementById("DopelRight").style.display==''){
      document.getElementById("container").style.width='820px'
      
    }
    */
    mediaplayer.style.display=dopelsiteAd.style.display==='none'? '':'none'
    
    

     
  

  });



