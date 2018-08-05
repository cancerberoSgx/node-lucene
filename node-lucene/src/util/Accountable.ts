import { Callback, Long } from '../java';

export namespace util {

  export class Accountable {

    protected _java: any

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

}
