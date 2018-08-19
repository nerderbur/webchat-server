const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000);

app.get('/', (req, res) => {
    res.send('Hello world');
})

io.on('connection', (socket) => {
    console.log('Client connected!')
    socket.emit('news', {hello: 'world'});
    socket.on('input', (data) => {
        console.log(data)
    })
})