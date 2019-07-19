import Directory from '../store/Directory'
import BaseCompositeReader from './BaseCompositeReader'
import LeafReader from './LeafReader'
import { getLuceneJava } from '../util/getLuceneJava'

export default /* abstract */ class DirectoryReader extends BaseCompositeReader<LeafReader> {
  static _javaClassName(): string {
    return 'org.apache.lucene.index.DirectoryReader'
  }

  static openSync(directory: Directory): DirectoryReader {
    const directoryJavaObject = getLuceneJava().callStaticMethodSync(
      DirectoryReader._javaClassName(),
      'open',
      directory._java
    )
    return DirectoryReader._buildSync(directoryJavaObject, new DirectoryReader())
  }

  static open(directory: Directory): DirectoryReader {
    return DirectoryReader.openSync(directory)
  }

  static openPromise(directory: Directory): Promise<DirectoryReader> {
    const directoryJavaObject = getLuceneJava().callStaticMethodPromise(
      DirectoryReader._javaClassName(),
      'open',
      directory._java
    )
    return DirectoryReader._buildPromise(directoryJavaObject, new DirectoryReader())
  }
}
