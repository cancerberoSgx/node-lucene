import { IJavaBase } from './IJavaBase';
import { Callback } from './types';

export class JavaBase implements IJavaBase {
  // static create<T extends JavaBase>(arg0: any): any {
  //   return new JavaBase()._buildSync(arg0)
  // }

  /** @internal */
  public static _javaClassName(): string {
    throw new Error('Must be implemented by subclass class')
  }

  /** @internal */
  public _java: any;

  /** @internal */
  protected static _buildSync<T extends JavaBase>(_query: any, instance: T): T {
    instance._java = _query
    return instance
  }

  // protected static _buildStaticSync()

  /** @internal */
  protected static _buildAsync<T extends JavaBase>(callback: Callback<T>, instance: T): (error: any, _query: any) => void {
    return (error: any, _query: any) => callback(error, this._buildSync(_query, instance))
  }

  /** @internal */
  protected static _buildPromise<T extends JavaBase>(p: Promise<any>, instance: T): Promise<T> {
    return new Promise((resolve, reject) => {
      p
        .then(_query => resolve(this._buildSync(_query, instance)))
        .catch(error => reject(error))
    })
  }

  protected static _getNative(v: any): any {
    return v._java || v
  }

}
