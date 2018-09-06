import { javax } from '..'

/**
 * Create the GUI and show it.  For thread safety,
 * this method should be invoked from the event-dispatching thread.
 */
function createAndShowGUI() {
  //Create and set up the window.
  const frame = new javax.swing.JFrame("HelloWorldSwing")
  frame.setDefaultCloseOperation(javax.swing.JFrame.EXIT_ON_CLOSE())

  //Add the ubiquitous "Hello World" label.
  const label = new javax.swing.JLabel('hello world2')
  frame.getContentPane().add(label)

  //Display the window.
  frame.pack()
  frame.setVisible(true)
}


javax.swing.SwingUtilities.invokeLater({
  run: function () {
    createAndShowGUI()
  }
})

// Heads up! Need to install infinite timeout so node.js process doesn't exit (destroying our frame). 
setInterval(() => { }, 10000)


// initialize()
// import { lang } from 'node-java-rt';
// lang.Runtime.getRuntime().addShutdownHook(() => {
//   console.log('uiiiuiuiupiiii12123123')
//   setTimeout(() => {
//     console.log('uiiiuiuiupiiii')
//   }, 1000);
// })