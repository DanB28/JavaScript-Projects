var express = require('express');
var app = express();
var server = require('http').createServer(app);
var mysql = require('mysql');

// set up my sql connection
var connection = mysql.createConnection({
    //properties
    host:'localhost',
    user: 'root',
    password: 'password',
    database:'', // add database
});

connection.connect(function(error){
    // callback
    if(!error){
        console.log('error');

    }else{
        console.log('connected');
    }
});

// sets up web socket on the server

var io = require('socket.io').listen(server);

users =[];
connections=[];

server.listen(process.env.PORT || 3000);
console.log('Chat app server running ...')

app.get('/',function(req,res){
    res.sendFile(__dirname +'/chat.html');
});


// set up the database queries to get the users . . .



io.sockets.on('connection', function(socket){
connections.push(socket);
console.log("connected: %s sockets connected", connections.length);

// disconnect
socket.on("disconnect",function(data){
   // if(!socket.name) return;
    users.splice(users.indexOf(socket.name),1);
    updateUsers();
    connections.splice(connections.indexOf(socket),1);
    console.log('Disconnected: %s sockets connected', connections.length);

    });



    // send message
        socket.on('send message', function(data){
            console.log(data);
            io.sockets.emit('new message',{msg: data, user: socket.name});
        });

        //new user 
        socket.on('new user', function(data, callback){
            callback(true);
            socket.name = data;
            users.push(socket.name);
            updateUsers();
        });

        //update users
        function updateUsers(){
        io.sockets.emit('get users',users);
        }

   
 

});