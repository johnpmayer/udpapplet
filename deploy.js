function doAlert(s) {
    alert(s);
}

function deploy() {
    
    alert("Starting deploy");
    
    applet_fu.run(
	{'width':'150','height':'25'},
	{
	    'code':'UDPApplet.class'
	},
	'1.4.2',
	'<p>No java</p>'
    );
    
    alert("Applet_fu has been called");
    
}

window.onload = deploy;

