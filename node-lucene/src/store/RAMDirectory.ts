import Accountable from '../util/Accountable'
import { getJava, Long, Callback, lang } from 'node-java-rt';
import BaseDirectory from './BaseDirectory';

export default class RAMDirectory extends BaseDirectory implements Accountable /* implements Closeable, AutoCloseable*/ {
  /**
   * ()
   */
  constructor() {
    super()
    this._java = getJava().newInstanceSync(this._javaClassName)
  }
  // protected _javaClassName = "org.apache.lucene.store.RAMDirectory"

  public get _javaClassName(): string {
    return 'org.apache.lucene.store.RAMDirectory'
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
  //  * (Lorg/apache/lucene/store/LockFactory;)
  //  */
  // new(arg0: any /*org.apache.lucene.store.LockFactory*/);
  // /**
  //  * (Lorg/apache/lucene/store/FSDirectory;ZLorg/apache/lucene/store/IOContext;)
  //  */
  // new(arg0: any /*org.apache.lucene.store.FSDirectory*/, arg1: any /*boolean*/, arg2: any /*org.apache.lucene.store.IOContext*/);
  // /**
  //  * (Lorg/apache/lucene/store/FSDirectory;Lorg/apache/lucene/store/IOContext;)
  //  */
  // new(arg0: any /*org.apache.lucene.store.FSDirectory*/, arg1: any /*org.apache.lucene.store.IOContext*/);

  // /**
  //  * ()Ljava/util/Collection;
  //  */
  // getChildResources(): any /*java.util.Collection*/;
  // /**
  //  * (Ljava/lang/String;)V
  //  */
  // deleteFile(arg0: string): any /*void*/;
  // /**
  //  * (Ljava/lang/String;Lorg/apache/lucene/store/IOContext;)Lorg/apache/lucene/store/IndexOutput;
  //  */
  // createOutput(arg0: string, arg1: any /*org.apache.lucene.store.IOContext*/): any /*org.apache.lucene.store.IndexOutput*/;
  // /**
  //  * (Ljava/lang/String;Lorg/apache/lucene/store/IOContext;)Lorg/apache/lucene/store/IndexInput;
  //  */
  // openInput(arg0: string, arg1: any /*org.apache.lucene.store.IOContext*/): any /*org.apache.lucene.store.IndexInput*/;
  // /**
  //  * (Ljava/lang/String;Ljava/lang/String;Lorg/apache/lucene/store/IOContext;)Lorg/apache/lucene/store/IndexOutput;
  //  */
  // createTempOutput(arg0: string, arg1: string, arg2: any /*org.apache.lucene.store.IOContext*/): any /*org.apache.lucene.store.IndexOutput*/;
  // /**
  //  * ()[Ljava/lang/String;
  //  */
  // listAll(): any /*[Ljava.lang.String;*/;
  // /**
  //  * (Ljava/lang/String;)J
  //  */
  // fileLength(arg0: string): number;
  // /**
  //  * ()V
  //  */
  // syncMetaData(): any /*void*/;
  // /**
  //  * ()V
  //  */
  // close(): any /*void*/;
  // /**
  //  * (Ljava/lang/String;Ljava/lang/String;)V
  //  */
  // rename(arg0: string, arg1: string): any /*void*/;
  // /**
  //  * (Ljava/util/Collection;)V
  //  */
  // sync(arg0: any /*java.util.Collection*/): any /*void*/;
  // /**
  //  * (Ljava/lang/String;)Z
  //  */
  // fileNameExists(arg0: string): any /*boolean*/;
  // }
}