// import Object from '../lang/Object';
// import { getJava } from '../java';

// export default class LinkedList<T> extends Object {

//   constructor() {
//     super()
//     this._java = getJava().newInstanceSync(this._javaClassName)
//   }

//   public get _javaClassName(): string {
//     return 'java.util.LinkedList'
//   }

//   addSync(t: T) {
//     this._java.addSync(this._getNative(t))
//   }
// }