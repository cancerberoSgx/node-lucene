import { Callback, Long, JavaBase, lang, getJava } from 'node-java-rt'
import FieldStore from './FieldStore';
import { IndexableField } from '../index/IndexableField';

export default class TextField extends IndexableField /* implements  java_lang_Iterable  */ {

  static _javaClassName(): string {
    return 'org.apache.lucene.document.TextField'
  }

  constructor(fieldName: string, fieldValue: string, fieldStore: FieldStore) {
    super()
    this._java = getJava().newInstanceSync(TextField._javaClassName(), fieldName, fieldValue, fieldStore._java)
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