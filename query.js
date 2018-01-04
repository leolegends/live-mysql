/* mysql-live-select, MIT License ben@latenightsketches.com
   example.js - Use mysql < example.sql to get started */
//var LiveMysql = require('./');

var LiveMysql = require('mysql-live-select');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var settings = require('./modulo_conexao');

var liveConnection = new LiveMysql(settings);

//define tabela.

var table = 'chat';

liveConnection.select(function(esc, escId){
// define query
  return (
    'select * from ' + escId(table) );
}, [ {
  table: table,
  condition: function(row, newRow){

   io.sockets.emit('retorno', row)
    
    console.log(row);

 }
} ]).on('update', function(diff, data){
  
	io.sockets.emit('query_resposta', data);

});

var server = http.listen(3001, function(){

console.log("================================");
console.log("Rodando na Porta 3001");
console.log("================================");

});


