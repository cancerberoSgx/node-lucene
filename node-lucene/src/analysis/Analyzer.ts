import { io, lang } from 'node-java-rt'
import { getLuceneJava } from '../util/getLuceneJava'

export default class Analyzer extends lang.Object implements io.Closeable {
  constructor() {
    super()
  }
  close(): void {
    this._java.closeSync()
  }
}
