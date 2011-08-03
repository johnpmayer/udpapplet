var socket = NewUDPApplet('socket','8080');

socket.onOpen = function() {
    alert('Hello, onOpen!');
    socket.send('Hello, Send!');
}

socket.onReceive = function(data) {
    alert('Hello, onReceive!');
}

socket.open();
