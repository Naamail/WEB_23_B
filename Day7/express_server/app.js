///// import modules
const express = require('express');
const app = express();
const path = require('path');
const port = 2020;
app.use(express.static(path.join(__dirname, "static")));


////// route 
app.get('/', (req,res)=>{
    //res.send("HELLO EXPRESS :)");
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/page2', (req,res)=>{
    //res.send("HELLO PAGE2 :)");
    res.sendFile(path.join(__dirname, "views/page2.html"))
});

// SET UP LISTEN
app.listen(port, ()=>{
    console.log("server is running on port ", port);
});