var LiveMysql = require('mysql-live-select');

var io = require('socket.io').listen(3001)

var settings = require("./modulo_conexao");

var liveConnection = new LiveMysql(settings);
var table = 'chat';

  liveConnection.select(function(esc, escId){
    return ('select * from ' + escId(table));  
  }, [ {
    table: table,
    condition: function(row, newRow){

     io.sockets.emit('retorno', newRow);
   
   }

 } ]).on('update', function(diff, data){

   io.sockets.emit('query_resposta', data);
   console.log(data);
 });

