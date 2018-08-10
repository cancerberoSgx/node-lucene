import { Callback, Long, JavaBase, lang } from 'node-java-rt'
// import * as java from 'node-java-rt';

export default class Query extends lang.Object {

  // constructor() {
  //   super()
  //   // this._java = getJava().newInstanceSync(this._javaClassName, fieldName, analyzer._java)
  // }

  static _javaClassName(): string {
    // return 'org.apache.lucene.queryparser.classic.QueryParser'
    throw new Error('Should not be called - _java should be given')
  }

  // /**
  //  * ()
  //  */
  // new();
  // /**
  //  * (Ljava/lang/Object;)Z
  //  */
  // equals(arg0: any /*java.lang.Object*/): any /*boolean*/;
  // /**
  //  * (Ljava/lang/String;)Ljava/lang/String;
  //  */
  // toString(arg0: string): string;
  // /**
  //  * ()Ljava/lang/String;
  //  */
  // toString(): string;
  // /**
  //  * ()I
  //  */
  // hashCode(): number;
  // /**
  //  * (Lorg/apache/lucene/index/IndexReader;)Lorg/apache/lucene/search/Query;
  //  */
  // rewrite(arg0: any /*org.apache.lucene.index.IndexReader*/): any /*org.apache.lucene.search.Query*/;
  // /**
  //  * (Lorg/apache/lucene/search/IndexSearcher;ZF)Lorg/apache/lucene/search/Weight;
  //  */
  // createWeight(arg0: any /*org.apache.lucene.search.IndexSearcher*/, arg1: any /*boolean*/, arg2: number): any /*org.apache.lucene.search.Weight*/;
}