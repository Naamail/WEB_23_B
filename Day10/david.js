// import and set up
const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const port = 2023;
const sql = require('./DB/db');
const CRUD = require('./DB/CRUD')
app.use(express.static(path.join(__dirname, "static")));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

// routing
app.get('/', (req,res)=>{
    //res.send("Hi Day 10!!!");
    res.sendFile(path.join(__dirname,"views/form.html"));
});

app.post('/formHandler', CRUD.CreateNewUser);

// route for creating tables
app.get('/createTables', (req,res)=>{
    const Q3 = "CREATE TABLE Persons (LastName varchar(255));";
    sql.query(Q3, (err,mysqlres)=>{
        if (err) {
            throw err
        }
        res.send("table created");
    })

});

// listen
app.listen(port, ()=>{
    console.log("server is running on port", port);
});