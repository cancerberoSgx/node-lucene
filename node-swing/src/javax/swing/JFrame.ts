import { getJava } from '../../util/getSwingJava';
import { Container } from './Container';

export class JFrame extends Container {
  static EXIT_ON_CLOSE(): any {
    return getJava().getStaticFieldValue(JFrame._javaClassName(), 'EXIT_ON_CLOSE')
  }
  static _javaClassName() {
    return 'javax.swing.JFrame'
  }

  constructor(title: string) {
    super()
    this._java = getJava().newInstanceSync(JFrame._javaClassName(), title)
  }
  getContentPane(): Container {
    return Container._buildSync(this._java.getContentPaneSync(), new Container())
  }
  setVisible(b: boolean): void {
    this._java.setVisibleSync(b)
  }
  pack(): void {
    this._java.packSync()
  }
  setDefaultCloseOperation(val: any): void {
    this._java.setDefaultCloseOperationSync(val)
  }
}