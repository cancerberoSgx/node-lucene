import { getJava } from '../../util/getSwingJava';
import { JComponent } from './JComponent';

export class JLabel extends JComponent {

  constructor(title: string) {
    super()
    this._java = getJava().newInstanceSync('javax.swing.JLabel', title)
  }

}