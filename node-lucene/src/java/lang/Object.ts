// import JavaBase from '../JavaBase';
// import { Callback } from '../types';

// export default class Object extends JavaBase {

//   public toStringSync(): string {
//     return this._java.toStringSync()
//   }
//   public toStringAsync(c: Callback<string>): void {
//     return this._java.toStringSync(c)
//   }
//   public toStringPromise(): Promise<string> {
//     return this._java.toStringPromise()
//   }

//   public equalsSync(value: any): boolean {
//     return this._java.equalsSync()
//   }
//   public equalsAsync(value: any, c: Callback<boolean>): void {
//     return this._java.equalsSync(c)
//   }
//   public equalsPromise(value: any): Promise<boolean> {
//     return this._java.equalsPromise()
//   }
// }