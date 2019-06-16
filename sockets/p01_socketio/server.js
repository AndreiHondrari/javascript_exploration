
const express = require('express');

const app = express();

var http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 8081;

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

http.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

io.on('connection', function(socket) {

    console.log(`CONNECT: ${socket.id}`);

    // send message
    socket.on('message', function(text) {
        console.log(`message ${text}`);
        socket.emit('receivedMessage', text);
    });

    // broadcast
    socket.on('broadcast', function(text) {
        console.log(`broadcast ${text}`);
        socket.broadcast.emit('broadcastMessage', text);
    });

    socket.on('disconnect', function(reason) {
        console.log(`DISCONNECT: ${socket.id} - ${reason}`);
    });

});
