import Analyzer from '../Analyzer';
import { Callback, Long, JavaBase, getJava, IJavaBase, lang } from 'node-java-rt';

// import * as lucene from '../..'
// /* @internal */
// namespace analysis.standard {
// export namespace standard {
export default class StandardAnalyzer extends lang.Object implements Analyzer {

  // /**
  //  * (Lorg/apache/lucene/analysis/CharArraySet;)
  //  */
  // new(arg0: any /*org.apache.lucene.analysis.CharArraySet*/);
  // /**
  //  * (Ljava/io/Reader;)
  //  */
  // new(arg0: any /*java.io.Reader*/);

  /**
   * ()
   */
  constructor() {
    super()
    this._java = getJava().newInstanceSync(this._javaClassName)
  }

  public get _javaClassName(): string {
    return 'org.apache.lucene.analysis.standard.StandardAnalyzer'
  }

  // public ENGLISH_STOP_WORDS_SET: any /*org.apache.lucene.analysis.CharArraySet*/;
  // public DEFAULT_MAX_TOKEN_LENGTH: number;
  // public STOP_WORDS_SET: any /*org.apache.lucene.analysis.CharArraySet*/;
  // public GLOBAL_REUSE_STRATEGY: any /*org.apache.lucene.analysis.Analyzer$ReuseStrategy*/;
  // public PER_FIELD_REUSE_STRATEGY: any /*org.apache.lucene.analysis.Analyzer$ReuseStrategy*/;
  // /**
  //  * (I)V
  //  */
  // setMaxTokenLength(arg0: number): any /*void*/;
  // /**
  //  * ()I
  //  */
  // getMaxTokenLength(): Long {

  // }

  getMaxTokenLengthSync(): Long {
    return this._java.getMaxTokenLengthSync()
  }

  getMaxTokenLengthAsync(callback: Callback<Long>) {
    this._java.getMaxTokenLengthAsync(callback)
  }

  getMaxTokenLengthPromise(): Promise<Long> {
    return this._java.getMaxTokenLengthPromise()
  }


}

  // }
// }