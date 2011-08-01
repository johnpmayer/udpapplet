import java.applet.*;
import java.net.*;
import java.awt.Graphics;

public class UDPApplet extends Applet {

    private String refId = "";
    
    public void init() {
	
	refId = getParameter("refId");

	hello();
	
	executeScript(refId + ".onOpen()");

    }
    
    public void hello() {
	
	String msg = "alert - Hello, Applet! ("+refId+")";
	
	String cmd = "alert(\"" + msg + "\")";
	
	executeScript(cmd);

    }

    public void executeScript(String cmd) {
	try {
	    getAppletContext().showDocument(new URL("javascript:"+cmd));
	}
	catch (MalformedURLException me) { }
    }
    
}
