import { getJava } from '../../util/getLuceneJava';
import { Container } from './Container';

export class JComponent extends Container {

  // constructor(title: string) {
  //   super()
  // this._java = getJava().newInstanceSync('javax.swing.JComponent', title)
  // }

  // getContentPane(): Container {
  //   return Container._buildSync(this._java.getContentPane(), new Container())
  // }
}