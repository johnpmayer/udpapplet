
all: udp-applet jar sign

udp-applet:
	javac UDPApplet.java

jar:
	jar cf UDPApplet.jar UDPApplet.class

sign:
	jarsigner -storepass password -keypass password UDPApplet.jar mykey

clean:
	rm -f *.class *.jar