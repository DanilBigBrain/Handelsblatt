

document.addEventListener("DOMContentLoaded", () => {
  
    
    
    var dopelsiteAd=document.getElementById("DopelRight")
    var mediaplayer=document.getElementById("mediaplayer")
    var container=document.getElementById("container")
    //var block1SmalPict=document.getElementById("block1")

    container.style.maxWidth=dopelsiteAd.style.display==='none'? '1020px':'820px'

    container.style.maxWidth=dopelsiteAd.style.display===''? '820px':'1020px'
   
    mediaplayer.style.display=dopelsiteAd.style.display==='none'? '':'none'
    
  //  block1SmalPict.style.width=dopelsiteAd.style.display==='none'? '370px':'260px'

  });



