import { JavaBase } from '../JavaBase'
import { Callback } from '../types'
import { getJava } from '../java';
import Class from './Class';

export default class Object_ extends JavaBase {

  constructor() {
    super()
    this._java = getJava().newInstanceSync(Object_._javaClassName())
  }

  public static _javaClassName(): string {
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

  equalsSync(value: any): boolean {
    return this._java.equalsSync()
  }
  equals(value: any): boolean {
    return this._java.equalsSync()
  }
  equalsAsync(value: any, c: Callback<boolean>): void {
    return this._java.equalsSync(c)
  }
  equalsPromise(value: any): Promise<boolean> {
    return this._java.equalsPromise()
  }

  hashCode(): number {
    return this._java.hashCodeSync()
  }

  getClass(): Class<any> {
    const Class_ = require('./Class').default // TODO: workaround - if not ts error: "TypeError: Class extends value undefined is not a constructor or null" because of circular dependency import issue 
    return JavaBase._buildSyncOrThrow(this._java.getClassSync(), new Class_())
  }
  // static class(): Class<any> {
  //   throw new Error('Not implemented, yet')
  // }
}