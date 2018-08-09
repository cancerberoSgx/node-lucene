import IJavaBase from './IJavaBase';
import { Callback } from './types';

export default abstract class JavaBase implements IJavaBase {

  /** @internal */
  public abstract get _javaClassName(): string

  /** @internal */
  public _java: any;

  /** @internal */
  protected _buildSync<T extends JavaBase>(_query: any, instance: T): T {
    instance._java = _query
    return instance
  }

  /** @internal */
  protected _buildAsync<T extends JavaBase>(callback: Callback<T>, instance: T): (error: any, _query: any) => void {
    return (error: any, _query: any) => callback(error, this._buildSync(_query, instance))
  }

  /** @internal */
  protected _buildPromise<T extends JavaBase>(p: Promise<any>, instance: T): Promise<T> {
    return new Promise((resolve, reject) => {
      p
        .then(_query => resolve(this._buildSync(_query, instance)))
        .catch(error => reject(error))
    })
  }

}
