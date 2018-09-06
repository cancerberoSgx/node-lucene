nodejs API to Java Swing

 - right now just an experiment to see if we can bring java swing API to TypeScript just as we did for lucene

# Features

 * Node.js API straightforward translated / ported from Java API (trying to respect the original Java packages, types and interfaces as far as I could)
 * Java Api calls binding directly called from node.js thanks to node-java. (no IPC, no process spawn, no server)
  * Requirements: Node.js and java

# Usage

```sh
npm install --save node-swing
```

## Example: indexing and searching in RAM 

The following is the [Hello World Java example](https://docs.oracle.com/javase/tutorial/displayCode.html?code=https://docs.oracle.com/javase/tutorial/uiswing/examples/start/HelloWorldSwingProject/src/start/HelloWorldSwing.java) written using node-swing: 

```ts
import { javax } from 'node-swing'

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


```

# TODO

 * move java/awt to its own package