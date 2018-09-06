import { lang, util } from 'node-java-rt';
import { getJava } from '../../util/getLuceneJava';



export class SwingUtilities extends lang.Object {
  constructor() {
    super()
  }

  // //Schedule a job for the event-dispatching thread:
  //       //creating and showing this application's GUI.
  //       javax.swing.SwingUtilities.invokeLater(new Runnable() {
  //         public void run() {
  //             createAndShowGUI();
  //         }
  //     });
  static invokeLater(runnable: lang.Runnable): void {
    // const proxy = getJava().newProxy('java.lang.Runnable', {
    //   run: function () {
    //     // This is actually run on the v8 thread and not the new java thread
    //     console.log("hello from thread");

    //   }
    // })
    const proxy = getJava().newProxy('java.lang.Runnable', runnable)
    getJava().callStaticMethodSync('javax.swing.SwingUtilities', 'invokeLater', proxy)
    console.log('this is needed so other prints');

  }
}