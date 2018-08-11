import * as lucene from '../../src'
import { getJava } from 'node-java-rt'

describe('IndexSearcher', () => {

  describe('ramBytesUsed', () => {


    it('make it work with pure js (non wrappers) to isolate/dagnose initial problems we are having', done => {
      const java = getJava()
      const index = java.newInstanceSync("org.apache.lucene.store.RAMDirectory")
      const analyzer = java.newInstanceSync("org.apache.lucene.analysis.standard.StandardAnalyzer")
      const writerConfig = java.newInstanceSync("org.apache.lucene.index.IndexWriterConfig", analyzer)
      const writer = java.newInstanceSync<any>("org.apache.lucene.index.IndexWriter", index, writerConfig)
      // const queryParser = java.newInstanceSync("org.apache.lucene.queryparser.classic.QueryParser", "content", analyzer)

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


    it('should be instantiable using a DirectoryReader', done => {

      const index = new lucene.store.RAMDirectory()
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      const parser = new lucene.queryparser.classic.QueryParser('content', analyzer)
      const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
      const writer = new lucene.index.IndexWriter(index, writerConfig)

      const doc1 = new lucene.document.Document()
      doc1.addSync(new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES))
      writer.addDocumentSync(doc1)
      writer.closeSync()

      const query = parser.parseSync('foo')

      const directory = lucene.index.DirectoryReader.openSync(index)
      const searcher = new lucene.search.IndexSearcher(directory)
      const topDocs = searcher.searchSync(query, 10)
      expect(topDocs.totalHits).toEqual(0)
      expect(topDocs.totalHits).not.toEqual(1)

      // console.log()


      done()
    })

  })
})