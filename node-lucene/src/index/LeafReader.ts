
import { Callback, Long, JavaBase, getJava, IJavaBase, lang, getJavaObjectOrThrow, io } from 'node-java-rt';
import RAMDirectory from '../store/RAMDirectory';
import IndexWriterConfig from './IndexWriterConfig';
import IndexReader from './IndexReader';

export default abstract class LeafReader extends IndexReader {
}