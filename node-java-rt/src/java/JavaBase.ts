import { IJavaBase } from './IJavaBase';
import { Callback } from './types';
import { getJava } from './java';

export class JavaBase implements IJavaBase {

  /** @internal */
  public _javaClassName(): string {
    throw new Error('Must be implemented by subclass class')
  }

  /** 
   * Reference to the Java Object associated with this instance
   * @internal 
   * */
  public _java: any;

  /** @internal */
  protected static _buildSync<T extends JavaBase>(javaObject: any, instance: T): T | null {
    if (javaObject !== undefined && javaObject !== null && instance) {
      instance._java = javaObject
      return instance
    }
    else {
      return null
    }
  }

  /** @internal */
  protected static _buildSyncOrThrow<T extends JavaBase>(javaObject: any, instance: T): T {
    if (javaObject !== undefined && javaObject !== null && instance) {
      instance._java = javaObject
      return instance
    }
    else {
      throw new Error('Expected javaObject to be defined')
    }
  }

  /** @internal */
  protected static _buildAsync<T extends JavaBase>(callback: Callback<T | null>, instance: T): (error: any, javaObject: any) => void {
    return (error: any, javaObject: any) => callback(error, this._buildSync(javaObject, instance))
  }

  /** @internal */
  protected static _buildPromise<T extends JavaBase>(p: Promise<any>, instance: T): Promise<T | null> {
    return new Promise((resolve, reject) => {
      p
        .then(javaObject => resolve(this._buildSync(javaObject, instance)))
        .catch(error => reject(error))
    })
  }

  /** @internal */
  static _buildArraySync<T extends JavaBase>(javaArray: any, createInstance: () => T): T[] {
    const arr: T[] = []
    const length = javaArray.length
    for (let i = 0; i < length; i++) {
      const javaObject = javaArray[i];
      arr.push(JavaBase._buildSyncOrThrow(javaObject, createInstance()))
    }
    return arr
  }

  /** @internal */
  static _buildJavaArray<T extends JavaBase>(jsArray: T[], className: string): any {
    return getJava().newArray(className, jsArray.map(i => i._java))
  }


  protected static _getNative(v: any): any {
    return v._java || v
  }

  // protected static _getProxy(interfaceName: string, proxied: any) {
  //   //TODO: cache proxies so we don't create a new one each time
  //   const proxy = getJava().newProxy(interfaceName, proxied)
  // }

  // const proxy = getJava().newProxy('java.lang.Runnable', runnable)
  // getJava().callStaticMethodSync('javax.swing.SwingUtilities', 'invokeLater', proxy)
}
