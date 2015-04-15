var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

app.get('/rain', function(req, res) {
    //io.emit('rain', {for: 'everyone'});
    io.emit('rain', "rain moneeeeyyyy");
    res.sendStatus(200);
});

http.listen(process.env.PORT || 8080), function(){
  console.log('listening on *:8080');
});

io.on('connection', function(socket){
  // socket.on('chat message', function(msg){
  //   console.log('message: ' + msg);
  //   io.emit('rain', {for: 'everyone'});
  //   io.emit('rain', "rain moneeeeyyyy");
  // });
});

