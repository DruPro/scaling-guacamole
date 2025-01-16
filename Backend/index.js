const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors({
    origin: '*'
  }));

app.get('/gem',(req,res)=>{
    res.send(JSON.stringify({Gem: 1}))
})

app.get('/message',(req,res)=>{
    res.send(JSON.stringify({Message: "Arrr matey! The servers be sailin' the digital seas. Beware the cyber waves, for they be as treacherous as a pirate’s stormy path! Only those with the proper key can unlock the treasure hidden in the data chests!"}))
})

app.listen(port,()=>{console.log('Server Started')})
