import { Callback, lang, Long } from 'node-java-rt';
import { getLuceneJava } from '../../util/getLuceneJava';
import Analyzer from '../Analyzer';
import TokenStream from '../TokenStream';

export default class StandardAnalyzer extends Analyzer {

  constructor() {
    super()
    this._java = getLuceneJava().newInstanceSync(StandardAnalyzer._javaClassName())
  }

  public static _javaClassName(): string {
    return 'org.apache.lucene.analysis.standard.StandardAnalyzer'
  }

  getMaxTokenLengthSync(): Long {
    return this._java.getMaxTokenLengthSync()
  }
  getMaxTokenLength(): Long {
    return this._java.getMaxTokenLengthSync()
  }
  getMaxTokenLengthAsync(callback: Callback<Long>) {
    this._java.getMaxTokenLengthAsync(callback)
  }
  getMaxTokenLengthPromise(): Promise<Long> {
    return this._java.getMaxTokenLengthPromise()
  }

  close(): void {
    this._java.closeSync()
  }

  tokenStream(fieldName: string, text: string): TokenStream {
    return StandardAnalyzer._buildSyncOrThrow(this._java.tokenStreamSync(fieldName, text), new TokenStream())
  }
}
