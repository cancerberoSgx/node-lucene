import { Callback, Long, JavaBase, lang, getJava, util } from 'node-java-rt'
import FieldStore from './FieldStore';
import { IndexableField } from '../index/IndexableField';

export default class TextField<T> extends IndexableField implements lang.Iterable<T> {

  static _javaClassName(): string {
    return 'org.apache.lucene.document.TextField'
  }

  constructor(fieldName: string, fieldValue: string, fieldStore: FieldStore) {
    super()
    this._java = getJava().newInstanceSync(TextField._javaClassName(), fieldName, fieldValue, fieldStore._java)
  }

  /**
   * TODO: which should be this one without postfix ? promise, sync, async ? I think it must be sync because of complying with signature
   * ()Ljava/util/Iterator;
   */
  iterator(): util.Iterator<T> {
    throw new Error('not implemented')
  }

  // /**
  //  * (Ljava/lang/String;Lorg/apache/lucene/analysis/TokenStream;)
  //  */
  // new(arg0: string, arg1: any /*org.apache.lucene.analysis.TokenStream*/);
  // /**
  //  * (Ljava/lang/String;Ljava/lang/String;Lorg/apache/lucene/document/Field$Store;)
  //  */
  // new(arg0: string, arg1: string, arg2: any /*org.apache.lucene.document.Field$Store*/);
  // /**
  //  * (Ljava/lang/String;Ljava/io/Reader;)
  //  */
  // new(arg0: string, arg1: any /*java.io.Reader*/);
  // public TYPE_NOT_STORED: any /*org.apache.lucene.document.FieldType*/;
  // public TYPE_STORED: any /*org.apache.lucene.document.FieldType*/;
}