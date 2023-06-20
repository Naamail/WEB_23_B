const sql = require('./db');
const path = require('path');

const createNewUser = (req,res)=>{
    //validate that body in not empty
    if (!req.body) {
        res.status(400).send({message: "content cannot be empty"});
        return;
    }
    // retrieve data from form into jsom
    const NewUser = {
        "name": req.body.UserFullName,
        "email": req.body.UserEmail
    }
    // cretae sql query syntax
    const Q1 = "insert into users set ?";

    // run the query
    sql.query(Q1, NewUser, (err, mysqlres)=>{
        if (err) {
            console.log("error in running query: ", err);
            res.status(400).send({message: "sign up failed, please contact customer servoce"});
            return;
        }
        console.log("created user, user id: ", {id: mysqlres.insertId});
        //res.send(mysqlres);
        res.sendFile(path.join(__dirname, "../views/page2.html"));
        return;
    });

    //res.send("hi")
};

const ShowAll = (req,res)=>{
    const Q2 = "select * from users";
    sql.query(Q2, (err, mysqlres)=>{
        if (err) {
            console.log("error in running query: ", err);
            res.status(400).send({message: "Select all failed, please contact customer servoce"});
            return;
        }
        res.send(mysqlres);
        return;
    })};

const ShowUser = (req,res)=>{
    if (req.query.userName){
        let q3 = 'SELECT * FROM users where name=' + '\'' + req.query.userName + '\';' ;
        let Q4 = 'select * from users where name like ?';
        let name = req.query.userName;
        console.log('showUser: query: ' + q3);
        sql.query(Q4, name, (err, mysqlres)=>{
            if (err) {
                console.log("error in running query: ", err);
                res.status(400).send({message: "Select user failed, please ..."});
                return;
            }
            res.send(mysqlres);
            return;
        });
    } else {
        res.status(400).send({message: "Select user failed, please enter a valid user query param"});
        return;
    }
};

module.exports = {createNewUser, ShowAll, ShowUser};