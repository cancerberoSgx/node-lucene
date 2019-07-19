import Object from './Object'
import Method from './reflect/Method'
import { JavaBase, InstanceCreator } from '../JavaBase'
import { getJava } from '../java'

export default class Class<
  T
> extends Object /*TODO:  implements java.io.Serializable,GenericDeclaration,Type,AnnotatedElement*/ {
  getMethods(): Method[] {
    const javaObject = this._java.getMethodsSync()
    // return toJsArray<Method>(javaObject, javaObject => Class._buildSyncOrThrow(javaObject, new Method()))
    return Class._buildArraySync(javaObject, () => new Method())
  }

  /**
   * Easy way to instantiate objects of a class, instead of having to use node-java directly, eg:
   *
   * ```js
   * const obj = Class
   * ```
   */
  static new<T extends JavaBase>(className: string, instance: T | InstanceCreator<T>, ...args: any[]): T {
    const java = getJava()
    const obj = java.newInstanceSync.apply(java, [className, ...args])
    instance = typeof instance === 'function' ? instance() : instance
    return Class._buildSyncOrThrow(obj, instance)
  }
}
