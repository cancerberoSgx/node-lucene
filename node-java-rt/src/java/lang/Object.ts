import { JavaBase } from '../JavaBase'
import { Callback } from '../types'
import { getJava } from '../java'
import Class from './Class'

export default class Object_ extends JavaBase {
  constructor() {
    super()
    this._java = getJava().newInstanceSync(this._javaClassName())
  }

  public _javaClassName(): string {
    return 'java.lang.Object'
  }

  toStringSync(): string {
    return this._java.toStringSync()
  }
  toString(): string {
    return this._java.toStringSync()
  }
  toStringAsync(c: Callback<string>): void {
    return this._java.toStringSync(c)
  }
  toStringPromise(): Promise<string> {
    return this._java.toStringPromise()
  }

  equalsSync(value: JavaBase): boolean {
    return this._java.equalsSync(value._java)
  }
  equals(value: JavaBase): boolean {
    return this._java.equalsSync(value._java)
  }
  equalsAsync(value: JavaBase, c: Callback<boolean>): void {
    return this._java.equalsSync(value._java, c)
  }
  equalsPromise(value: JavaBase): Promise<boolean> {
    return this._java.equalsPromise(value._java)
  }

  hashCode(): number {
    return this._java.hashCodeSync()
  }

  getClass(): Class<any> {
    const Class_ = require('./Class').default // TODO: workaround - if not ts error: "TypeError: Class extends value undefined is not a constructor or null" because of circular dependency import issue
    return JavaBase._buildSyncOrThrow(this._java.getClassSync(), new Class_())
  }
  /**
   * this is similar to SomeClass.class but user must pass classname because of limitations/ bad design
   */
  static class(className: string): Class<any> {
    const Class_ = require('./Class').default // TODO: workaround - if not ts error: "TypeError: Class extends value undefined is not a constructor or null" because of circular dependency import issue

    // const obj = getJava().getStaticFieldValue(className, 'class') // TODO: fails - node-java issue ?

    const obj = getJava().import('java.lang.Object').class

    return Object_._buildSyncOrThrow(obj, new Class_())
    // throw new Error('Not implemented, yet')
  }
}
