import { getJava, Long, Callback, lang, io } from 'node-java-rt';

export default abstract class Directory extends lang.Object implements io.Closeable, lang.AutoCloseable {
  close(): void {
    this._java.closeSync()
  }
}