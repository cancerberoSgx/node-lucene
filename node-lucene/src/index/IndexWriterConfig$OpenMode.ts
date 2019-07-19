import { Callback, lang } from 'node-java-rt'
import Analyzer from '../analysis/Analyzer'
import { getLuceneJava } from '../util/getLuceneJava'

export default class IndexWriterConfig$OpenMode extends lang.Object {
  // constructor(analyzer: Analyzer) {
  //   super()
  //   this._java = getLuceneJava().newInstanceSync(IndexWriterConfig$OpenMode._javaClassName(), analyzer._java)
  // }

  static _javaClassName(): string {
    return 'org.apache.lucene.index.IndexWriterConfig$OpenMode'
  }

  static get APPEND(): IndexWriterConfig$OpenMode {
    return IndexWriterConfig$OpenMode._buildSync(
      getLuceneJava().getStaticFieldValue(IndexWriterConfig$OpenMode._javaClassName(), 'APPEND'),
      new IndexWriterConfig$OpenMode()
    )
  }
  static get CREATE(): IndexWriterConfig$OpenMode {
    return IndexWriterConfig$OpenMode._buildSync(
      getLuceneJava().getStaticFieldValue(IndexWriterConfig$OpenMode._javaClassName(), 'CREATE'),
      new IndexWriterConfig$OpenMode()
    )
  }

  static get CREATE_OR_APPEND(): IndexWriterConfig$OpenMode {
    return IndexWriterConfig$OpenMode._buildSync(
      getLuceneJava().getStaticFieldValue(IndexWriterConfig$OpenMode._javaClassName(), 'CREATE_OR_APPEND'),
      new IndexWriterConfig$OpenMode()
    )
  }
}
