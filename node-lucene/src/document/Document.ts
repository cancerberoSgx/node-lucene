import { Callback, Long, JavaBase, lang, util } from 'node-java-rt'
import { IndexableField } from '../index/IndexableField';
import { getLuceneJava } from '../util/getLuceneJava';

export default class Document<T> extends lang.Object implements lang.Iterable<T> /* TODO: dont know which is the type param of Iterable :  */ {

  static _javaClassName(): string {
    return 'org.apache.lucene.document.Document'
  }

  constructor() {
    super()
    this._java = getLuceneJava().newInstanceSync(Document._javaClassName())
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
    return this._java.addSync(field._java)
  }

  addAsync(field: IndexableField, callback: Callback<void>) {
    this._java.addAsync(field._java, callback)
  }

  addPromise(field: IndexableField): Promise<void> {
    return this._java.addPromise(field._java)
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


  getFieldSync(field: string): IndexableField | null {
    return this._java.getFieldSync(field)
  }

  getFieldAsync(field: string, callback: Callback<IndexableField | null>) {
    this._java.getFieldAsync(field, callback)
  }

  getFieldPromise(field: string): Promise<IndexableField | null> {
    return this._java.getFieldPromise(field)
  }



  // /**
  //  * (Ljava/lang/String;)V
  //  */
  // removeFields(arg0: string): any /*void*/;
  // /**
  //  * (Ljava/lang/String;)Lorg/apache/lucene/util/BytesRef;
  //  */
  // getBinaryValue(arg0: string): any /*org.apache.lucene.util.BytesRef*/;

}