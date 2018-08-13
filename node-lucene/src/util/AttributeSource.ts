import { lang, io } from 'node-java-rt';

export default class AttributeSource extends lang.Object implements io.Closeable, lang.AutoCloseable {
  close(): void {
    this._java.closeSync()
  }
}