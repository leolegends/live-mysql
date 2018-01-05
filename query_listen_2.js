var LiveMysql = require('mysql-live-select');

var io = require('socket.io').listen(3002)

var settings = require("./modulo_conexao");


var liveConnection = new LiveMysql(settings);

var table = 'chat';

io.sockets.on('connection', function(socket){

  socket.on('id', function(id){

  liveConnection.select(function(esc, escId){

    return ('select * from ' + escId(table) + ' where id = ' + esc(id));  
  }, [ {
    table: table,
    condition: function(row, newRow){
      
      socket.emit('retorno', row);
    
     console.log(row);
     //io.sockets.emit('retorno', row);
   
   }

 } ]).on('update', function(diff, data){
     socket.emit('query', data);
 
    console.log(data);
    //console.log(diff);
 });

  });

});