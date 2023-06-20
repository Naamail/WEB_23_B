const express = require('express');
const cookieParse = require('cookie-parser');
const path = require('path');
const app = express();
const port = 2020;
app.use(cookieParse());
app.use(express.static(path.join(__dirname,'static')));

app.get('/', (req,res)=>{
    //res.cookie('usrerName','michal');
    //res.send("Hi cookie");
    res.sendFile(path.join(__dirname, 'views/index.html'));    
});

app.get('/formA', (req,res)=>{
    console.log(req.query);
    res.cookie('userName', req.query.UserName);
    //res.send("hi");
    res.redirect('/');
});

app.get('/getCookie', (req,res)=>{
    console.log(req.cookies);
        res.send('got a cookie');
});

app.get('/signout', (req,res)=>{
    res.clearCookie('userName');
    res.send('Signed out');
});


//res.clearCookie("UserName");


app.listen(port, ()=>{
    console.log("server is running on port", port);
})

