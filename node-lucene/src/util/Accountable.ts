import { Callback, Long } from '../java';
import JavaBase from '../java/JavaBase';

// export namespace util {

export default class Accountable extends JavaBase {

  // protected _java: any
  // constructor() {
  //   super()
  // }


  public get _javaClassName(): string {
    return 'org.apache.lucene.util.Accountable'
  }

  ramBytesUsedSync(): Long {
    return this._java.ramBytesUsedSync()
  }

  ramBytesUsedAsync(callback: Callback<Long>) {
    this._java.ramBytesUsedAsync(callback)
  }

  ramBytesUsedPromise(): Promise<Long> {
    return this._java.ramBytesUsedPromise()
  }

  // /**
  // TODO: implement
  //  * ()Ljava/util/Collection;
  //  */
  // getChildResources(): any /*java.util.Collection*/;
}

// }
