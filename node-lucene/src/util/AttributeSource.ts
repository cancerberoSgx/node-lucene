import { lang, io } from 'node-java-rt';

export default class AttributeSource extends lang.Object implements io.Closeable {
  close(): void {
    this._java.closeSync()
  }
  reset(): void {
    this._java.resetSync()
  }
  end(): void {
    this._java.endSync()
  }
}