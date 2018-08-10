
import { Callback, Long, JavaBase, IJavaBase, lang } from 'node-java-rt';

// namespace analysis {
export default interface Analyzer /* extends java_io_Closeable*/ extends IJavaBase {

  // interface org_apache_lucene_analysis_Analyzer extends org_apache_lucene_analysis_Analyzer, java_io_Closeable {
  // /**
  //  * ()
  //  */
  // new(): Analyzer

  /**
   * (Lorg/apache/lucene/analysis/Analyzer$ReuseStrategy;)
   */
  // new(arg0: any /*org.apache.lucene.analysis.Analyzer$ReuseStrategy*/);
  // public GLOBAL_REUSE_STRATEGY: any /*org.apache.lucene.analysis.Analyzer$ReuseStrategy*/;
  // public PER_FIELD_REUSE_STRATEGY: any /*org.apache.lucene.analysis.Analyzer$ReuseStrategy*/;
  // /**
  //  * (Ljava/lang/String;Ljava/lang/String;)Lorg/apache/lucene/analysis/TokenStream;
  //  */
  // tokenStream(arg0: string, arg1: string): any /*org.apache.lucene.analysis.TokenStream*/;
  // /**
  //  * (Ljava/lang/String;Ljava/io/Reader;)Lorg/apache/lucene/analysis/TokenStream;
  //  */
  // tokenStream(arg0: string, arg1: any /*java.io.Reader*/): any /*org.apache.lucene.analysis.TokenStream*/;
  // /**
  //  * ()V
  //  */
  // close(): any /*void*/;
  // /**
  //  * (Ljava/lang/String;Ljava/lang/String;)Lorg/apache/lucene/util/BytesRef;
  //  */
  // normalize(arg0: string, arg1: string): any /*org.apache.lucene.util.BytesRef*/;
  // /**
  //  * (Ljava/lang/String;)I
  //  */
  // getPositionIncrementGap(arg0: string): number;
  // /**
  //  * (Ljava/lang/String;)I
  //  */
  // getOffsetGap(arg0: string): number;
  // /**
  //  * ()Lorg/apache/lucene/analysis/Analyzer$ReuseStrategy;
  //  */
  // getReuseStrategy(): any /*org.apache.lucene.analysis.Analyzer$ReuseStrategy*/;
  // /**
  //  * (Lorg/apache/lucene/util/Version;)V
  //  */
  // setVersion(arg0: any /*org.apache.lucene.util.Version*/): any /*void*/;
  // /**
  //  * ()Lorg/apache/lucene/util/Version;
  //  */
  // getVersion(): any /*org.apache.lucene.util.Version*/;

}
// }