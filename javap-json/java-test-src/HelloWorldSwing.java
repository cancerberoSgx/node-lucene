 
/*
 * HelloWorldSwing.java requires no other files. 
 */
import java.awt.event.ComponentEvent;
import java.awt.event.ComponentListener;
import java.awt.event.ContainerEvent;
import java.awt.event.ContainerListener;
import java.awt.event.WindowEvent;
import java.awt.event.WindowListener;
import java.awt.event.WindowStateListener;

import javax.swing.*;        
 
public class HelloWorldSwing {
    /**
     * Create the GUI and show it.  For thread safety,
     * this method should be invoked from the
     * event-dispatching thread.
     */
    private static void createAndShowGUI() {
        //Create and set up the window.
        JFrame frame = new JFrame("HelloWorldSwing");
        new Object().hashCode();

        // new Object().getClass().getMethods().
        
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 
        //Add the ubiquitous "Hello World" label.
        JLabel label = new JLabel("Hello World");
        frame.getContentPane().add(label);
        // Runtime.getRuntime().availableProcessors()
        Runtime.getRuntime().addShutdownHook(new Thread(){
            @Override
            public void run() {
                System.out.println("uiiiuiuiupiiii");
            }
        });
        frame.getWindows()[0].addWindowListener(new WindowListener(){
        
            @Override
            public void windowOpened(WindowEvent e) {
                
            }
        
            @Override
            public void windowIconified(WindowEvent e) {
                System.out.println("clo1");
                
            }
        
            @Override
            public void windowDeiconified(WindowEvent e) {
                System.out.println("clo2");
                
            }
        
            @Override
            public void windowDeactivated(WindowEvent e) {
                System.out.println("clo3");
                
            }
        
            @Override
            public void windowClosing(WindowEvent e) {
                System.out.println("clo4");
                
            }
        
            @Override
            public void windowClosed(WindowEvent e) {
                System.out.println("clo");
            }
        
            @Override
            public void windowActivated(WindowEvent e) {
                
            }
        });

        frame.addComponentListener(new ComponentListener(){
        
            @Override
            public void componentShown(ComponentEvent e) {
                
            }
        
            @Override
            public void componentResized(ComponentEvent e) {
                
            }
        
            @Override
            public void componentMoved(ComponentEvent e) {
                
            }
        
            @Override
            public void componentHidden(ComponentEvent e) {
                
            }
        });

        frame.addContainerListener(new ContainerListener(){
        
            @Override
            public void componentRemoved(ContainerEvent e) {
                
            }
        
            @Override
            public void componentAdded(ContainerEvent e) {
                
            }
        });
 
        //Display the window.
        frame.pack();
        frame.setVisible(true);
    }
 
    public static void main(String[] args) {
        //Schedule a job for the event-dispatching thread:
        //creating and showing this application's GUI.
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                createAndShowGUI();
            }
        });
    }
}