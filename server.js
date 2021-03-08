const express = require('express');
const { get } = require('http');
const { send } = require('process');

const port = process.env.port || 3000;

const app = express();
app.use(express.json());

data = [
    {n:12},
];


app.post('/n' , (req,res)=>{
    const newdata = {
        n:req.body.n
    };
    res.send(req.body);


});

app.listen(port , ()=> console.log(`Listening on ${port}`));