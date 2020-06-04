const socket = io()

socket.on('message', (welcomeMessage) => {
    console.log(welcomeMessage)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()
    let message = e.target.elements.message.value
    socket.emit('sendMessage', message)
})