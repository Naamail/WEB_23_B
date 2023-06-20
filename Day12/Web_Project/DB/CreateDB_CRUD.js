const sql = require('./db');

const CreateTable = (req,res)=>{
    const Q1 = 'CREATE TABLE IF NOT EXISTS `Table01` (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email varchar(255) NOT NULL, name varchar(255) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8';
    sql.query(Q1, (err, mysqlres)=>{
        if (err) throw err;
        res.send('Table created')
    });
};



const DropTable = (req,res)=>{
    const Q2 = 'drop table Table01';
    sql.query(Q2, (err, mysqlres)=>{
        if (err) throw err;
        res.send('Table dropped')
    });
};

module.exports={CreateTable,DropTable}