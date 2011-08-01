alert('starting test script');

var udpapplet = NewUDPApplet('udpapplet');

udpapplet.onOpen = function() {
    alert('Hello, onOpen!');
}

updapplet.onReceive = function(data) {
    alert('Hello, onReceive!');
}

udpapplet.open();

udpapplet.send('Hello, Send!');