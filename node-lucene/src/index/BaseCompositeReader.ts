
import { Callback, Long, JavaBase, getJava, IJavaBase, lang, getJavaObjectOrThrow, io } from 'node-java-rt';
import RAMDirectory from '../store/RAMDirectory';
import IndexWriterConfig from './IndexWriterConfig';
import CompositeReader from './CompositeReader';
import IndexReader from './IndexReader';

export default abstract class BaseCompositeReader<R extends IndexReader> extends CompositeReader {
}