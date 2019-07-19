import { Callback, lang } from 'node-java-rt'
import Analyzer from '../analysis/Analyzer'
import { getLuceneJava } from '../util/getLuceneJava'
import IndexWriterConfig$OpenMode from './IndexWriterConfig$OpenMode'

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
  getRAMBufferSizeMB(): number {
    return this._java.getRAMBufferSizeMBSync()
  }
  getRAMBufferSizeMBAsync(callback: Callback<number>) {
    this._java.getRAMBufferSizeMBAsync(callback)
  }
  getRAMBufferSizeMBPromise(): Promise<number> {
    return this._java.getRAMBufferSizeMBPromise()
  }

  setOpenMode(openMode: IndexWriterConfig$OpenMode): void {
    return this._java.setOpenModeSync(openMode._java)
  }
  setOpenModeSync(openMode: IndexWriterConfig$OpenMode): void {
    return this._java.setOpenModeSync(openMode._java)
  }
  setOpenModePromise(openMode: IndexWriterConfig$OpenMode): void {
    return this._java.setOpenModePromise(openMode._java)
  }
}
