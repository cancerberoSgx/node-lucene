import * as lucene from '../../src'

xdescribe('IndexSearcher', () => {

  describe('ramBytesUsed', () => {
    it('should be instantiable using a DirectoryReader', done => {
      const index = new lucene.store.RAMDirectory()

      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      const parser = new lucene.queryparser.classic.QueryParser('content', analyzer)
      const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
      const writer = new lucene.index.IndexWriter(index, writerConfig)

      const doc1 = new lucene.document.Document()
      doc1.addSync(new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES))
      writer.addDocumentSync(doc1)

      const query = parser.parseSync('foo')

      const directory = lucene.index.DirectoryReader.openSync(index)
      const searcher = new lucene.search.IndexSearcher(directory)
      const topDocs = searcher.searchSync(query, 10)

      console.log(topDocs.totalHits);


      done()
    })

  })
})