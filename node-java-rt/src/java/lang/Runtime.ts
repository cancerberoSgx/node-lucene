import Object from './Object';
import { getJava } from '../java';

export default class Runtime extends Object {

  static getRuntime(): Runtime {
    // console.log('seba1', getJava().callStaticMethod)

    const javaObject = getJava().callStaticMethodSync('java.lang.Runtime', 'getRuntime')
    // console.log('seba2', javaObject)

    const runtime = Runtime._buildSyncOrThrow(javaObject, new Runtime())
    // if (!runtime) {
    //   throw new Error('null runtime!')
    // }
    return runtime
  }

  availableProcessors(): number {
    return this._java.availableProcessorsSync()
  }
}