const express = require('express');
// const { get } = require('http');
// const { send } = require('process');

//const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const port = process.env.port || 3000;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));


data = [
    {n:12}, {n:12}, 
];

app.get('/contactme' , (req,res)=>{
    res.sendFile(__dirname + '/public/contactme.html');
    
})

app.post('/contactme' , (req,res)=>{
    

    res.send(req.body);

    console.log("body is : " , req.body.name);


});

app.listen(port , ()=> console.log(`Listening on ${port}`));