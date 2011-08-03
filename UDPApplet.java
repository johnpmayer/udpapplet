import java.applet.*;
import java.net.*;
import java.awt.Graphics;

public class UDPApplet extends Applet {

    private String refId;
    private String host;
    private int port;

    private DatagramSocket sock;
    
    public void init() {
	
	refId = getParameter("refId");
	host = getParameter("host");
	port = Integer.parseInt(getParameter("port"));	

	hello();

	open();

    }

    private void open() {

	boolean success = false;
	
	try {
	    sock = new DatagramSocket();
	    
	    InetAddress addr = InetAddress.getByName(host);
	    
	    sock.connect(addr,port);
	    
	    success = true;
	    
	} catch (Exception e) {
	    // ToDo: should do .onError
	    executeAlert(e.getMessage());
	}

	if (success) {
	    executeJavascript(refId + ".onOpen()");
	}
    }
    
    private void hello() {
	String msg = "alert - Hello, Applet! ("+refId+":"+host+":"+port+")";
	executeAlert(msg);
    }

    private void executeAlert(String msg) {
	String cmd = "alert(\"" + msg + "\")";
	executeJavascript(cmd);
    }
    
    private void executeJavascript(String cmd) {
	try {
	    getAppletContext().showDocument(new URL("javascript:"+cmd));
	}
	catch (MalformedURLException me) { }
    }
    
}
