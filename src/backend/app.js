const data=require('./data.json')
const express = require('express')
var request=require("request")
const app = express()
const port = 5000
const fs = require('fs');








app.get('/getData', (req, res) => {
  request("https://newsapi.org/v2/top-headlines?country=de&apiKey=3b6399a09fea40c6a0f8f9594f53c4ce",
  function(error,response,body){
    if(!error&&response.statusCode==200)
    {
      
      res.send(body)
      //app.delete('./data.json')
      
       
      fs.writeFile('./data.json', body, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successful')
        }
    })
     
    //console.log("TEST")
    }
  }
  )
 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

