import Object from './Object'
import { getJava } from '../java'
import Thread from './Thread'
import Runnable from './Runnable'

export default class Runtime extends Object {
  static getRuntime(): Runtime {
    const javaObject = getJava().callStaticMethodSync('java.lang.Runtime', 'getRuntime')
    const runtime = Runtime._buildSyncOrThrow(javaObject, new Runtime())
    return runtime
  }

  availableProcessors(): number {
    return this._java.availableProcessorsSync()
  }

  // /**
  //  *
  //  * @param hook a JavaScript object that will be proxied . Heads up: type is not Thread, but Runnable
  //  */
  // public addShutdownHook(hook: Runnable): void {
  //   const proxy = getJava().newProxy('java.lang.Thread', hook)
  //   this._java.addShutdownHookSync(proxy)
  // }

  public addShutdownHook(hook: () => void): void {
    const thread = getJava().newInstanceSync('java.lang.Thread')
    ;(thread as any).run = hook
    ;(thread as any).runSync = hook
    this._java.addShutdownHookSync(thread)
  }
}
