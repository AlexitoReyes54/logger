const express = require('express')
const app = express()
app.set('port',3000)
app.listen(app.get('port'),function(req,res){
  setInterval(function(){
    var x = new Date();
    console.log(x);
  },5000)
});

//This is the new version 
