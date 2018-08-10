import { Callback, Long, JavaBase, lang } from 'node-java-rt'
import { getLuceneJava } from '../util/getLuceneJava';

export default class FieldStore extends lang.Object {

  // /**
  //  * TODO: constructor doesn't work :     Error: Could not find method "org.apache.lucene.document.Field$Store(java.lang.String, java.lang.Integer)" on class "class org.apache.lucene.document.Field$Store". No methods with that name.

  //  * TODO: document me
  //  * @param arg0 
  //  * @param arg1 
  //  */
  // constructor(arg0: string, arg1: number) {
  //   super()
  //   this._java = getLuceneJava().newInstanceSync(FieldStore._javaClassName(), arg0, arg1)
  // }

  static _javaClassName(): string {
    return 'org.apache.lucene.document.Field$Store'
  }

  static get YES(): FieldStore {
    // TODO: cache for performance
    return FieldStore._buildSync(getLuceneJava().getStaticFieldValue(FieldStore._javaClassName(), 'YES'), new FieldStore())
  }

  static get NO(): FieldStore {
    // TODO: cache for performance
    return FieldStore._buildSync(getLuceneJava().getStaticFieldValue(FieldStore._javaClassName(), 'NO'), new FieldStore())
  }
  // /**
  //  * ()[Lorg/apache/lucene/document/Field$Store;
  //  */
  // values(): any /*[Lorg.apache.lucene.document.Field$Store;*/;
  // /**
  //  * (Ljava/lang/String;)Lorg/apache/lucene/document/Field$Store;
  //  */
  // valueOf(arg0: string): any /*org.apache.lucene.document.Field$Store*/;



}