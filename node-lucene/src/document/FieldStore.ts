import { Callback, Long, JavaBase, lang, getJava } from 'node-java-rt'
// import * as java from 'node-java-rt';

export default class FieldStore extends lang.Object {

  /**
   * TODO: document
   * @param arg0 
   * @param arg1 
   */
  constructor(arg0: string, arg1: number) {
    super()
    this._java = getJava().newInstanceSync(FieldStore._javaClassName(), arg0, arg1)
  }

  public static _javaClassName(): string {
    return 'org.apache.lucene.document.Field$Store'
  }

  // protected static 
  // protected static _staticJava = 
  static YES(): FieldStore {
    return FieldStore._buildSync(getJava().getStaticFieldValue(FieldStore._javaClassName(), 'YES'), new FieldStore('', 0))
    // return FieldStore._buildSync(getJava().getStaticFieldValue())
    // return _staticJava
  }

  // parseSync(): Long {
  //   return this._java.parseSync()
  // }

  // parseAsync(callback: Callback<Long>) {
  //   this._java.parseAsync(callback)
  // }

  // parsePromise(): Promise<Long> {
  //   return this._java.parsePromise()
  // }
}