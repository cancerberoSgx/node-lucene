import { Callback, Long, JavaBase, lang, getJava, util } from 'node-java-rt'
import { IndexableField } from '../index/IndexableField';

export default class Document<T> extends lang.Object implements lang.Iterable<T> /* TODO: dont know which is the type param of Iterable :  */ {

  static _javaClassName(): string {
    return 'org.apache.lucene.document.Document'
  }

  constructor() {
    super()
    this._java = getJava().newInstanceSync(Document._javaClassName())
  }

  removeFieldSync(fieldName: string): void {
    return this._java.removeFieldSync(fieldName)
  }

  removeFieldAsync(fieldName: string, callback: Callback<void>) {
    this._java.removeFieldAsync(fieldName, callback)
  }

  removeFieldPromise(fieldName: string): Promise<void> {
    return this._java.removeFieldPromise(fieldName)
  }

  addSync(field: IndexableField): void {
    return this._java.addSync(field)
  }

  addAsync(field: IndexableField, callback: Callback<void>) {
    this._java.addAsync(field, callback)
  }

  addPromise(field: IndexableField): Promise<void> {
    return this._java.addPromise(field)
  }



  // /**
  //  * (Ljava/lang/String;)[Lorg/apache/lucene/util/BytesRef;
  //  */
  // getBinaryValues(arg0: string): any /*[Lorg.apache.lucene.util.BytesRef;*/;
  // /**
  //  * (Ljava/lang/String;)[Ljava/lang/String;
  //  */
  // getValues(arg0: string): any /*[Ljava.lang.String;*/;
  // /**
  //  * (Lorg/apache/lucene/index/IndexableField;)V
  //  */
  // add(arg0: any /*org.apache.lucene.index.IndexableField*/): any /*void*/;
  // /**
  //  * (Ljava/lang/String;)Ljava/lang/String;
  //  */
  // get(arg0: string): string;
  // /**
  //  * ()Ljava/lang/String;
  //  */
  // toString(): string;
  // /**
  //  * ()V
  //  */
  // clear(): any /*void*/;

  /**
   * TODO: which should be this one without postfix ? promise, sync, async ? I think it must be sync because of complying with signature
   * ()Ljava/util/Iterator;
   */
  iterator(): util.Iterator<T> {
    throw new Error('not implemented')
  }

  // /**
  //  * ()Ljava/util/List;
  //  */
  // getFields(): any /*java.util.List*/;
  // /**
  //  * (Ljava/lang/String;)[Lorg/apache/lucene/index/IndexableField;
  //  */
  // getFields(arg0: string): any /*[Lorg.apache.lucene.index.IndexableField;*/;
  // /**
  //  * (Ljava/lang/String;)Lorg/apache/lucene/index/IndexableField;
  //  */
  // getField(arg0: string): any /*org.apache.lucene.index.IndexableField*/;
  // /**
  //  * (Ljava/lang/String;)V
  //  */
  // removeFields(arg0: string): any /*void*/;
  // /**
  //  * (Ljava/lang/String;)Lorg/apache/lucene/util/BytesRef;
  //  */
  // getBinaryValue(arg0: string): any /*org.apache.lucene.util.BytesRef*/;

}