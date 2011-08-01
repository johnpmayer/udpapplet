/*
The value of id should be the global name of the reference to the returned object

i.e.

var socket = NewUDPApplet('socket');
*/

function NewUDPApplet(id) {

    alert('Making new UDPApplet with id='+id);
    
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

	    alert('Creating UDPApplet via applet-fu');
	    
	    applet_fu.run(
		{
		    'id':id,
		    'width':'0',
		    'height':'0'},
		{
		    'code':'UDPApplet.class',
		    'refId':id
		},
		'1.4.2',
		'<p>Java is not available :-(</p>'
	    );
	},
	
	send : function(data) {
	    // ToDo:
	}
	
    };

}
