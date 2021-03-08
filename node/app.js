const express = require('express');

const app = express();

//const contactme = document.querySelector('.contactme.html');

const port = process.env.port || 3000;

//let name = contactme.getElementById('name');

//port = 

app.use(express.json());

app.get('/' , (req,res)=>{
    res.send('yes');
});

app.get('/n' , (req,res)=>{
    

    

    res.send(n);
});


app.listen(port , ()=> console.log(`Listening on ${port}`));