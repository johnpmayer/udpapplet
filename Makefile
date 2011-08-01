
all: udp-applet

udp-applet:
	javac UDPApplet.java

clean:
	rm -f *.class