import { JavaBase } from '../JavaBase'
import { Callback } from '../types'
export default class extends JavaBase {

  toStringSync(): string {
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
  equalsAsync(value: any, c: Callback<boolean>): void {
    return this._java.equalsSync(c)
  }
  equalsPromise(value: any): Promise<boolean> {
    return this._java.equalsPromise()
  }
}