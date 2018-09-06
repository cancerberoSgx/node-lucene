import Object from '../lang/Object';
import { getJava } from '../java';

export default class EventObject extends Object {

  constructor() {
    super()
    this._java = getJava().newInstanceSync(EventObject._javaClassName())
  }

  public static _javaClassName(): string {
    return 'java.util.EventObject'
  }

}