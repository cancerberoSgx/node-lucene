
import { Callback, Long, JavaBase, getJava, IJavaBase, lang, getJavaObjectOrThrow, io } from 'node-java-rt';
import RAMDirectory from '../store/RAMDirectory';
import IndexWriterConfig from './IndexWriterConfig';

export default abstract class IndexReader extends lang.Object implements io.Closeable, lang.AutoCloseable {
  abstract close(): void
}