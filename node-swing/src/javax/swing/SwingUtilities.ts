import { lang, util } from 'node-java-rt';
import { getJava } from '../../util/getSwingJava';



export class SwingUtilities extends lang.Object {
  constructor() {
    super()
  }

  /**
   * 
   * @param runnable a js object implementing lang.Runnable. Doesn't need to be lang.Object, just a plain JS object. 
   */
  static invokeLater(runnable: lang.Runnable): void {
    const proxy = getJava().newProxy('java.lang.Runnable', runnable)
    getJava().callStaticMethodSync('javax.swing.SwingUtilities', 'invokeLater', proxy)

  }
}