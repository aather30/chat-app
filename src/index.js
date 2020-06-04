const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)

const io = socketio(server)
const port = process.env.PORT
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

const welcomeMessage = 'Welcome'

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', welcomeMessage)

    socket.on('sendMessage', (clientMessage) => {
        io.emit('message', clientMessage)

    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})