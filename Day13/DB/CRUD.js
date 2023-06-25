const path = require('path');
const sql = require('./db');

const ShowAll = (req,res)=>{
    const Q1 = "select * from Table0";
    sql.query(Q1, (err, mysqlres)=>{
        if (err) {
            res.status(400).render('error', {v1:"table was not found"});
            console.log(err);
            return;
        }
        //res.redirect('/');
        res.send(mysqlres);
    });
};

module.exports = {ShowAll};
