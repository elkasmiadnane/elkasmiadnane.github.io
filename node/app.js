

const express = require('express');
const app = express();

const port = process.env.port || 3000;

let name = document.getElementById('name');

//port = 

app.get('/' , (req,res)=>{
    req.send('yes');
})


app.listen(port , ()=> console.log(`Listening on ${port}`));