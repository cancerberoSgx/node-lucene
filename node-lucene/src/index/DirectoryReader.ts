import Directory from '../store/Directory';
import BaseCompositeReader from './BaseCompositeReader';
import LeafReader from './LeafReader';
import { getLuceneJava } from '../util/getLuceneJava';

export default /* abstract */ class DirectoryReader extends BaseCompositeReader<LeafReader> {
  static openSync(directory: Directory): DirectoryReader {
    debugger
    const directoryJavaObject = getLuceneJava().callStaticMethodSync('org.apache.lucene.index.DirectoryReader', 'open', directory._java)
    return DirectoryReader._buildSync(directoryJavaObject, new DirectoryReader())
  }
}