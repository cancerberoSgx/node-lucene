import { io, lang } from 'node-java-rt'

export default abstract class IndexReader extends lang.Object implements io.Closeable {
  close(): void {
    this._java.closeSync()
  }
  closeSync(): void {
    this._java.closeSync()
  }
  closePromise(): Promise<void> {
    return this._java.closePromise()
  }
}
