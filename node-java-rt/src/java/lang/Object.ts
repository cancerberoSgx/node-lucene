import { JavaBase } from '../JavaBase'
import { Callback } from '../types'
import { getJava } from '../java';
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
}