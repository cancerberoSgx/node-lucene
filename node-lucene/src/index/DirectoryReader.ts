import Directory from '../store/Directory';
import BaseCompositeReader from './BaseCompositeReader';
import LeafReader from './LeafReader';
import { getLuceneJava } from '../util/getLuceneJava';

export default /* abstract */ class DirectoryReader extends BaseCompositeReader<LeafReader> {

  static openSync(directory: Directory): DirectoryReader {

    const jjj = getLuceneJava()
    debugger
    const directoryJavaObject = getLuceneJava().callStaticMethodSync('org.apache.lucene.index.DirectoryReader', 'open', directory._java)
    return DirectoryReader._buildSync(directoryJavaObject, new DirectoryReader())
  }

  static openPromise(directory: Directory): Promise<DirectoryReader> {
    const directoryJavaObject = getLuceneJava().callStaticMethodPromise('org.apache.lucene.index.DirectoryReader', 'open', directory._java)
    return DirectoryReader._buildPromise(directoryJavaObject, new DirectoryReader())
  }

  static open(directory: Directory): DirectoryReader {
    return DirectoryReader.openSync.apply(this, arguments)
  }
}
