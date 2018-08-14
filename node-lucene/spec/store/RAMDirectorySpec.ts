import * as lucene from '../../src'

describe('RAMDirectory', () => {

  describe('ramBytesUsed', () => {
    it('ramBytesUsedSync new instance should return 0', done => {
      const index = new lucene.store.RAMDirectory()
      expect(index.ramBytesUsedSync()).toEqual(0)
      expect(index.ramBytesUsedSync().valueOf()).toBe(0)
      done()
    })

    it('ramBytesUsedASync new instance should return 0', done => {
      new lucene.store.RAMDirectory().ramBytesUsedAsync((error, value) => {
        expect(error).not.toBeDefined()
        expect(value).toEqual(0)
        expect(value.valueOf()).toBe(0)
        done()
      })
    })

    it('ramBytesUsedPromise new instance should return 0', async done => {
      const value = await new lucene.store.RAMDirectory().ramBytesUsedPromise()
      expect(value).toEqual(0)
      expect(value.valueOf()).toBe(0)
      done()
    })

  })


  describe('RAMDirectory, DirectoryReader and QueryParser index and search basic use case', () => {
    let analyzer: lucene.analysis.standard.StandardAnalyzer,
      writerConfig: lucene.index.IndexWriterConfig,
      index: lucene.store.RAMDirectory,
      writer: lucene.index.IndexWriter,
      parser: lucene.queryparser.classic.QueryParser,
      doc1: lucene.document.Document,
      doc2: lucene.document.Document,
      field1: lucene.document.Field,
      field2: lucene.document.Field

    beforeEach(() => {
      analyzer = new lucene.analysis.standard.StandardAnalyzer()
      writerConfig = new lucene.index.IndexWriterConfig(analyzer)
      index = new lucene.store.RAMDirectory()
      writer = new lucene.index.IndexWriter(index, writerConfig)
      parser = new lucene.queryparser.classic.QueryParser('content', analyzer)

      doc1 = new lucene.document.Document()
      field1 = new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES)

      doc2 = new lucene.document.Document()
      field2 = new lucene.document.TextField('content', 'hi world', lucene.document.FieldStore.YES)
    })

    it('should be usable Synchronously', async done => {
      doc1.addSync(field1)
      writer.addDocumentSync(doc1)
      doc2.addSync(field2)
      writer.addDocumentSync(doc2)

      // finish adding documents so we close the index before searching
      writer.closeSync()

      // now we want to search so we create a directory reader, index searcher and a query parser
      const directory = lucene.index.DirectoryReader.openSync(index)
      const searcher = new lucene.search.IndexSearcher(directory)

      // searching for 'foo should return 0 results
      let topDocs = searcher.searchSync(parser.parseSync('foo'), 10)
      expect(topDocs.totalHits).toEqual(0)

      // searching for 'hello' should return 1 result
      topDocs = searcher.searchSync(parser.parseSync('hello'), 10)
      expect(topDocs.totalHits).toEqual(1)

      // get document and field sync
      let doc1Result = searcher.docSync(topDocs.scoreDocs[0].doc)
      let fieldResult = doc1Result.getFieldSync('content')
      expect(fieldResult.toStringSync()).toContain('hello world')
      expect(doc1Result.get('content')).toBe('hello world')

      done()
    })


    it('should be usable with promises', async done => {

      await doc1.addPromise(field1)
      await writer.addDocumentPromise(doc1)
      await doc2.addPromise(field2)
      await writer.addDocumentPromise(doc2)

      // finish adding documents so we close the index before searching
      await writer.closePromise()

      // now we want to search so we create a directory reader, index searcher and a query parser
      const directory = await lucene.index.DirectoryReader.openPromise(index)
      const searcher = new lucene.search.IndexSearcher(directory)

      // searching for 'foo should return 0 results
      let topDocs = await searcher.searchPromise(await parser.parsePromise('foo'), 10)
      expect(topDocs.totalHits).toEqual(0)

      // searching for 'hello' should return 1 result
      topDocs = await searcher.searchPromise(await parser.parsePromise('hello'), 10)
      expect(topDocs.totalHits).toEqual(1)

      // get document and field Promise
      let doc1Result = await searcher.docPromise(topDocs.scoreDocs[0].doc)
      let fieldResult = await doc1Result.getFieldPromise('content')
      expect(await fieldResult.toStringPromise()).toContain('hello world')
      expect(await doc1Result.getPromise('content')).toBe('hello world')

      done()
    })

  })

})