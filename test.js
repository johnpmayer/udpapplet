alert('starting test script');

var socket = NewUDPApplet('socket');

socket.onOpen = function() {
    alert('Hello, onOpen!');
}

socket.onReceive = function(data) {
    alert('Hello, onReceive!');
}

alert('callback functions set, opening');

socket.open();

socket.send('Hello, Send!');