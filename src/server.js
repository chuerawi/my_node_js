const express = require('express')

const app = express()   

app.get('/',(req,res)=>{
    res.end("Toom");
})

app.get('/print/:name',(req, res)=>{
    res.end("name: "+ req.param.name);
})

app.listen(3000, ()=>{
    console.log("server running")
})

