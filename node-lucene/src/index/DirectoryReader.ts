
import { Callback, Long, JavaBase, getJava, IJavaBase, lang, getJavaObjectOrThrow } from 'node-java-rt';
import RAMDirectory from '../store/RAMDirectory';
import IndexWriterConfig from './IndexWriterConfig';
import LeafReader from './LeafReader';
import BaseCompositeReader from './BaseCompositeReader';
import IndexWriter from './IndexWriter';
import Directory from '../store/Directory';

export default /* abstract */ class DirectoryReader extends BaseCompositeReader<LeafReader> {
  static openSync(directory: Directory): DirectoryReader {
    return DirectoryReader._buildSync(getJava().callStaticMethodSync("org.apache.lucene.index.DirectoryReader", "open", directory._java), new DirectoryReader())
    // return getJava().callStaticMethodSync("org.apache.lucene.index.DirectoryReader", "open", index)
  }
}
