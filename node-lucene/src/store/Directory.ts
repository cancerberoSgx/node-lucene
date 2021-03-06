import { io, lang } from 'node-java-rt'

export default abstract class Directory extends lang.Object implements io.Closeable {
  close(): void {
    this._java.closeSync()
  }
}
