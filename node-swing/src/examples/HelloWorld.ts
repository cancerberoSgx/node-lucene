import { JLabel } from '../javax/swing/JLabel'
import { JFrame } from '../javax/swing/JFrame'
import { initialize, getJava } from '../util/getSwingJava';
import { SwingUtilities } from '../javax/swing/SwingUtilities';
import { lang } from 'node-java-rt';



/**
 * Create the GUI and show it.  For thread safety,
 * this method should be invoked from the
 * event-dispatching thread.
 */
function createAndShowGUI() {
  //Create and set up the window.
  const frame = new JFrame("HelloWorldSwing")
  frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE())

  //Add the ubiquitous "Hello World" label.
  const label = new JLabel('hello world')
  frame.getContentPane().add(label)

  //Display the window.
  frame.pack()
  frame.setVisible(true)

  //TODO: we need to set infinite timeout if not v8 will end and close the java app.
  setTimeout(() => {
    frame.pack()
    frame.setVisible(true)
  }, 1000000000);
}

function main() {
  SwingUtilities.invokeLater({
    run: function () {
      console.log('hehehehe');
      createAndShowGUI()
    }
  })
}

initialize()
main()