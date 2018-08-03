import { Callback, Long } from '../java';

export namespace util {
  export class Accountable {
    protected _java: any
    ramBytesUsedSync(): Long {
      return this._java.ramBytesUsedSync()
    }
    ramBytesUsed(callback: Callback<Long>) {
      this._java.ramBytesUsed(callback)
      //(v: any) => callback(v.valueOf()))
    }
    // /**
    //  * ()Ljava/util/Collection;
    //  */
    // getChildResources(): any /*java.util.Collection*/;
  }

}
