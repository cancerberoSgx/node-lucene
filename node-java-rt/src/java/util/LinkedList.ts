import Object from '../lang/Object'
import { getJava } from '../java'
import { Callback } from '../types'

export default class LinkedList<T> extends Object {
  constructor() {
    super()
    this._java = getJava().newInstanceSync(this._javaClassName())
  }

  public _javaClassName(): string {
    return 'java.util.LinkedList'
  }

  add(t: T): boolean {
    // TODO: return type ?
    return this._java.addSync(LinkedList._getNative(t))
  }
  addSync(t: T): boolean {
    // TODO: return type ?
    return this._java.addSync(LinkedList._getNative(t))
  }
  addAsync(t: T, c: Callback<boolean>): void {
    // TODO: return type ?
    return this._java.addAsync(LinkedList._getNative(t), c)
  }
  addPromise(t: T): Promise<boolean> {
    // TODO: return type ?
    return this._java.addPromise(LinkedList._getNative(t))
  }
}
