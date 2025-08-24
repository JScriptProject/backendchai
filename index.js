const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("hello world");
})

app.listen(port, ()=>{
    console.log(`Server started on port number ${port}`);
    
})