import { Callback, lang } from 'node-java-rt';
import Analyzer from '../analysis/Analyzer';
import { getLuceneJava } from '../util/getLuceneJava';

export default class IndexWriterConfig extends lang.Object {

  constructor(analyzer: Analyzer) {
    super()
    this._java = getLuceneJava().newInstanceSync(IndexWriterConfig._javaClassName(), analyzer._java)
  }

  static _javaClassName(): string {
    return 'org.apache.lucene.index.IndexWriterConfig'
  }

  getRAMBufferSizeMBSync(): number {
    return this._java.getRAMBufferSizeMBSync()
  }

  getRAMBufferSizeMBAsync(callback: Callback<number>) {
    this._java.getRAMBufferSizeMBAsync(callback)
  }

  getRAMBufferSizeMBPromise(): Promise<number> {
    return this._java.getRAMBufferSizeMBPromise()
  }

}