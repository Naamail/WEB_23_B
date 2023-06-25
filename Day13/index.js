const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const sql = require('./DB/db');
const cookieParser = require('cookie-parser');
const CRUD = require('./DB/CRUD');
const CreatDB_CRUD = require('./DB/CreateDB_CRUD');
const port = 2023;
app.use(express.static(path.join(__dirname, "static")));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(cookieParser());   
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');
// set up to csv reader
const csv = require('csvtojson');

// routing
app.get('/', (req,res)=>{
    //res.send("hi pug");
    res.render('page1');
});

app.post('/SignUpForm', (req,res)=>{
    res.cookie("UserName", req.body.SignUpName);
    res.redirect('page2');
});

app.get('/page2', (req,res)=>{
    //res.send("hi pug");
    res.render('page2');
});

app.post('/LogInForm', (req,res)=>{
    console.log(req.body.SignUpName);
    //res.cookie("UserName", req.body.SignUpName);
    res.redirect('/main');
});


app.get('/main', (req,res)=>{
    var UserName = req.cookies?.UserName;
    res.render('main', {V1 : UserName});
});

app.get('/logout', (req,res)=>{
    res.clearCookie("UserName");
    res.redirect('/');
});

app.get('/selectAll', (req,res)=>{
    const Q1 = 'select * from users';
    sql.query(Q1, (err, mysqlres)=>{
        if (err) throw err;
        //res.send(mysqlres);
        res.render('results', {V1 : mysqlres})
    })
});

app.get('/createDB', (req,res)=>{
    res.render('CreateDB');
});

app.get('/showAll', CRUD.ShowAll);

/////// set up DB
app.get('/createTable', CreatDB_CRUD.CreateTable);
app.get('/insert', CreatDB_CRUD.Insert);
app.get('/dropTable', CreatDB_CRUD.DropTable);
app.get('/show', CreatDB_CRUD.showTable);

app.listen(port, ()=>{
    console.log("server is running on port", port);
});