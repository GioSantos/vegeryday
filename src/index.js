
var http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h2> Quero dormir </h2>');
}).listen(8989);

console.log('Servidor iniciado');
