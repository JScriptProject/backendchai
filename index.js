const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("hello world");
})
app.get('/main', (req, res)=>{
    res.send("<h1>Main page of the backend</h1>");
})

app.listen(port, ()=>{
    console.log(`Server at started on port number ${port}`);
    
})