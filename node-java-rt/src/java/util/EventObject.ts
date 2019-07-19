import Object from '../lang/Object'
import { getJava } from '../java'

export default class EventObject extends Object {
  constructor() {
    super()
    this._java = getJava().newInstanceSync(this._javaClassName())
  }

  public _javaClassName(): string {
    return 'java.util.EventObject'
  }
}
