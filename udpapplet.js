/*
The value of id should be the global name of the reference to the returned object

i.e.

var socket = NewUDPApplet('socket');
*/

function NewUDPApplet(id,port) {

    alert('Creating UDPApplet via applet-fu with id='+id);
	    
    applet_fu.run(
	{
	    'id':id,
	    'width':'0',
	    'height':'0'},
	{
	    'code':'UDPApplet',
	    'archive':'UDPApplet.jar',
	    'refId':id,
	    'host':window.location.hostname,
	    'port':port
	},
	'1.4.2',
	'<p>Java is not available :-(</p>'
    );
    
    var applet = document.getElementById(id);
    
    return {
	
	onOpen : function() {
    	    // application will override
	    alert(id+".onOpen called");
	},
	
	onError : function(err) {
	    // application will override
	    alert(id+".onError called: "+err);
	},
	
	onReceive : function(data){
	    // application will override
	    alert(id+".onRecieve called: "+data);
	},
	
	onClose : function() {
    	    // application will override
	    alert(id+".onClose called");
	},
	
	// future arguments: host,port?
	open : function() {
	    alert("opening...");
	    applet.open();
	},
	
	send : function(data) {
	    alert("sending...");
	    applet.send(data);
	}
	
    };

}
