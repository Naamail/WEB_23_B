const path = require('path');
const sql = require('./db');
const csv = require('csvtojson');
const { json } = require('express');

const CreateTable = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `Table01` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email varchar(255) NOT NULL, name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';
    sql.query(Q1, (err, mysqlres)=>{
        if (err) throw err;
        res.send('Table created');
    });
};

const Insert = (req,res)=>{
    const NewData = {
        name: "A Name",
        email: "email@gmail.com"
    };
    const csvPath = path.join(__dirname, "dataexample.csv");
    csv().fromFile(csvPath).then((jsonObj)=>{
        console.log(jsonObj);
        for (let i = 0; i < jsonObj.length; i++) {
            const element = jsonObj[i];
            console.log(element);
            const NewCsvData = {
                name: element.name,
                email: element.email
            }; 
            const Q4 = "insert into Table01 set ?";
            sql.query(Q4, NewCsvData, (err, mysqlres)=>{
            if (err) {
                throw err
            }
            //res.send('Data inserted into table');
            });}
        
        });
    res.send("oaky");
    };

const DropTable = (req,res)=>{
    const Q2 = 'drop table Table01';
    sql.query(Q2, (err, mysqlres)=>{
        if (err) throw err;
        res.send('Table dropped')
    });
};

const showTable = (req,res)=>{
    const Q5 = "select * from Table01";
    sql.query(Q5, (err, mysqlres)=>{
        if (err) throw err;
        res.send(mysqlres);
    });
};

module.exports={CreateTable,Insert,DropTable,showTable}