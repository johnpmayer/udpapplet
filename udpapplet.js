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
	    applet_fu.run(
		{
		    'id':id,
		    'width':'150',
		    'height':'25'},
		{
		    'code':'UDPApplet.class',
		    'id':id
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
