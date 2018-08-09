import Object from '../lang/Object';
import { getJava } from '../java';
import { Callback } from '../types';

export default class LinkedList<T> extends Object {

  constructor() {
    super()
    this._java = getJava().newInstanceSync(this._javaClassName)
  }

  get _javaClassName(): string {
    return 'java.util.LinkedList'
  }

  addSync(t: T): boolean { // TODO: return type ?
    return this._java.addSync(this._getNative(t))
  }
  addAsync(t: T, c: Callback<boolean>): void {// TODO: return type ?
    return this._java.addAsync(this._getNative(t), c)
  }
  addPromise(t: T): Promise<boolean> {// TODO: return type ?
    return this._java.addPromise(this._getNative(t))
  }
}