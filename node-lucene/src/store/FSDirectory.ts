import { Callback, Long, nio } from 'node-java-rt'
import Accountable from '../util/Accountable'
import BaseDirectory from './BaseDirectory'
import { getLuceneJava } from '../util/getLuceneJava'

export default class FSDirectory extends BaseDirectory {
  static _javaClassName(): string {
    return 'org.apache.lucene.store.FSDirectory'
  }

  static openSync(path: nio.file.Path): FSDirectory {
    const javaObject = getLuceneJava().callStaticMethodSync(FSDirectory._javaClassName(), 'open', path._java)
    return FSDirectory._buildSync(javaObject, new FSDirectory())
  }

  static open(path: nio.file.Path): FSDirectory {
    return FSDirectory.openSync(path)
  }

  static openPromise(path: nio.file.Path): Promise<FSDirectory> {
    const javaObject = getLuceneJava().callStaticMethodPromise(FSDirectory._javaClassName(), 'open', path._java)
    return FSDirectory._buildPromise(javaObject, new FSDirectory())
  }
}
