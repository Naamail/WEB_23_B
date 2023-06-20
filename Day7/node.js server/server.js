var http = require('http');
var fs = require('fs');

http.createServer(function (req,res) {
    fs.readFile("views/index.html", function (err, data) {
        res.write(data);
        return res.end();
    })
    //res.write("HI");
    //res.end();
}).listen(8080);