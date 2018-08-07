import { getJava } from './java';
import IJavaBase from './IJavaBase';

export default abstract class JavaBase implements IJavaBase {

  // constructor() {
  //   // this._java = getJava().newInstanceSync(this.javaClassName)
  // }

  public abstract get javaClassName(): string

  /** @internal */
  protected _java: any;

  /** @internal */
  public get java(): any {
    return this._java
  }

}
