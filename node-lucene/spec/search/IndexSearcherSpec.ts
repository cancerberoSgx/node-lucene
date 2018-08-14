import * as lucene from '../../src'
import { getJava } from 'node-java-rt'

describe('IndexSearcher', () => {

  describe('making it work natively with node-java', () => {
    it('make it work with pure js (non wrappers) to isolate/dagnose initial problems we are having', done => {
      const java = getJava()
      const index = java.newInstanceSync("org.apache.lucene.store.RAMDirectory")
      const analyzer = java.newInstanceSync("org.apache.lucene.analysis.standard.StandardAnalyzer")
      const writerConfig = java.newInstanceSync("org.apache.lucene.index.IndexWriterConfig", analyzer)
      const writer = java.newInstanceSync<any>("org.apache.lucene.index.IndexWriter", index, writerConfig)
      const title = 'title1'
      const content = 'hello world'
      const fieldStoreYes = java.callStaticMethodSync("org.apache.lucene.document.Field$Store", "valueOf", "YES")
      const doc = java.newInstanceSync<any>("org.apache.lucene.document.Document")
      doc.addSync(java.newInstanceSync("org.apache.lucene.document.TextField", "title", title, fieldStoreYes))
      doc.addSync(java.newInstanceSync("org.apache.lucene.document.TextField", "content", content, fieldStoreYes))
      writer.addDocumentSync(doc)
      writer.closeSync()
      const searcher = java.newInstanceSync<any>("org.apache.lucene.search.IndexSearcher", java.callStaticMethodSync("org.apache.lucene.index.DirectoryReader", "open", index))
      expect(searcher.toStringSync()).toContain('segments')
      done()
    })
  })


})

