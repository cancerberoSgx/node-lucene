import Analyzer from '../Analyzer';
import { Callback, Long, JavaBase, IJavaBase, lang } from 'node-java-rt';
import { getLuceneJava } from '../../util/getLuceneJava';

export default class StandardAnalyzer extends lang.Object implements Analyzer {

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

  getMaxTokenLengthAsync(callback: Callback<Long>) {
    this._java.getMaxTokenLengthAsync(callback)
  }

  getMaxTokenLengthPromise(): Promise<Long> {
    return this._java.getMaxTokenLengthPromise()
  }

  close(): void {
    this._java.closeSync()
  }
}
