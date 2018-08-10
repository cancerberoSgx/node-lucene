import { Callback, Long, JavaBase, lang } from 'node-java-rt'

export default interface Accountable/*  extends lang.Object  */ {

  // public get _javaClassName(): string {
  //   return 'org.apache.lucene.util.Accountable'
  // }

  ramBytesUsedSync(): Long
  //  {
  //   return this._java.ramBytesUsedSync()
  // }

  ramBytesUsedAsync(callback: Callback<Long>): void
  // {
  //   this._java.ramBytesUsedAsync(callback)
  // }

  ramBytesUsedPromise(): Promise<Long>
  // {
  //   return this._java.ramBytesUsedPromise()
  // }

  // /**
  // TODO: implement
  //  * ()Ljava/util/Collection;
  //  */
  // getChildResources(): any /*java.util.Collection*/;
}
