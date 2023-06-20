// imort and init modules
const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const CRUD = require('./db/CRUD')
const port = 7070;
app.use(express.static(path.join(__dirname, "static")));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

// routing
app.get('/', (req,res)=>{
    //res.send("hi");
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.post('/signUp', CRUD.createNewUser);

app.get('/ShowAll', CRUD.ShowAll)

app.get('/ShowUser', CRUD.ShowUser)

app.get('/page2', (req,res)=>{
    console.log(req.query);   
    res.sendFile(path.join(__dirname, "views/page2.html"));
})

app.get('/page3', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/page3.html'))
})

//set up listen
app.listen(port, ()=>{
    console.log("Server is running on port ", port);
})
