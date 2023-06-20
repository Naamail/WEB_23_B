const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, "static")));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

const sql = require('./db');
const CreateNewUser = (req,res)=>{
    // validate info exists
    if (!req.body) {
        res.status(400).send("contenet cannot be empty");
        return;
    }
    // pull info from body into object
    const NewUser = {
        name: req.body.UserName,
        email: req.body.UserEmail
    };
    // run insert query
    const Q1 = "insert into users set ?";
    sql.query(Q1, NewUser, (err,mysqlres)=>{
        if (err) {
            console.log(err);
            res.status(400).send("Sign up failed");
            return;
        }
        console.log("created new user", req.body);
        //res.send("thank you!");
        //res.sendFile(path.join(__dirname, '../views/search.html'));
        res.redirect('/');
        return;
    })};




module.exports = {CreateNewUser};