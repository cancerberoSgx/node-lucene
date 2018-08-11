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


    it('should be usable Synchronously using RAMDirectory and, DirectoryReader and QueryParser', done => {

      // create index in memory
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
      const index = new lucene.store.RAMDirectory()
      const writer = new lucene.index.IndexWriter(index, writerConfig)

      // add a document with field content === 'hello world'
      const doc1 = new lucene.document.Document()
      doc1.addSync(new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES))
      writer.addDocumentSync(doc1)

      // finish adding documents so we close the index before searching
      writer.closeSync()

      // now we want to search so we create a directory reader, index searcher and a query parser
      const directory = lucene.index.DirectoryReader.openSync(index)
      const searcher = new lucene.search.IndexSearcher(directory)
      const parser = new lucene.queryparser.classic.QueryParser('content', analyzer)

      // searching for 'foo should return 0 results
      let topDocs = searcher.searchSync(parser.parseSync('foo'), 10)
      expect(topDocs.totalHits).toEqual(0)

      // searching for 'hello' should return 1 result
      topDocs = searcher.searchSync(parser.parseSync('hello'), 10)
      expect(topDocs.totalHits).toEqual(1)

      // expect(topDocs.scoreDocs[0].doc).toBe(0)
      // searcher.docSync(docId);
      const doc1Result = searcher.docSync(topDocs.scoreDocs[0].doc)
      const fieldResult = doc1Result.getFieldSync('content')
      // debugger
      expect(fieldResult.toStringSync()).toContain('hello world')
      // let results = topDocs.scoreDocs
      done()
    })

  })
})