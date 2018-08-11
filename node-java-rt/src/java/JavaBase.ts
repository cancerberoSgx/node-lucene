import { IJavaBase } from './IJavaBase';
import { Callback } from './types';

export class JavaBase implements IJavaBase {

  /** @internal */
  public static _javaClassName(): string {
    throw new Error('Must be implemented by subclass class')
  }

  /** @internal */
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

  protected static _getNative(v: any): any {
    return v._java || v
  }

}
