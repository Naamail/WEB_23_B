const express = require('express');
const app = express();
const path = require('path');
const port = 9090;
const sql = require('./db');

app.use(express.static(path.join(__dirname, "graphics")));

// route
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/index.html"));
})

app.get("/search", (req,res)=>{
    //res.send("hello search")
    //res.sendFile(path.join(__dirname,"views/search.html"));
    sql.query("SELECT * FROM contacts",(err, mysqlre)=>{
        if (err) {
            console.log("error in connecting to DB: ", err);
            res.status(400).send({message: "error in connecting to DB"});
            return;
        }
        console.log("GOT ALL CONTACTS");
        res.send(mysqlre);
        return;
    })
})

app.get("/contact", (req,res)=>{
    //res.send("hello contact")
    res.sendFile(path.join(__dirname,"views/contact.html"));
})
// listen

app.listen(port, ()=>{
    console.log("server is running on port ", port);
})