import * as lucene from '../../src'
import Term from '../../src/index/Term'
import { getJava } from 'node-java-rt'
import { sleep } from '../testUtil'

describe('IndexWriter', () => {
  let analyzer: lucene.analysis.standard.StandardAnalyzer
  let writerConfig: lucene.index.IndexWriterConfig
  let index: lucene.store.RAMDirectory
  let writer: lucene.index.IndexWriter

  beforeEach(() => {
    analyzer = new lucene.analysis.standard.StandardAnalyzer()
    writerConfig = new lucene.index.IndexWriterConfig(analyzer)
    index = new lucene.store.RAMDirectory()
    writer = new lucene.index.IndexWriter(index, writerConfig)
  })

  afterEach(() => {
    writer.closeSync()
  })

  describe('ramBytesUsed', () => {
    it('ramBytesUsedSync and numDocsSync should return zero on new instances', done => {
      expect(writer.ramBytesUsedSync().valueOf()).toBe(0)
      expect(writer.ramBytesUsedSync()).toEqual(0)
      expect(writer.numDocsSync().valueOf()).toBe(0)
      expect(writer.numDocsSync()).toEqual(0)
      writer.closeSync()
      done()
    })

    it('ramBytesUsedAsync and numDocsAsync should return zero on new instances', done => {
      writer.ramBytesUsedAsync((error, value) => {
        expect(error).not.toBeDefined()
        expect(value.valueOf()).toBe(0)
        writer.numDocsAsync((error, value) => {
          expect(error).not.toBeDefined()
          expect(value.valueOf()).toBe(0)
          done()
        })
      })
    })

    it('ramBytesUsedPromise and numDocsPromise should return zero on new instances', async done => {
      let value = await writer.ramBytesUsedPromise()
      expect(value).toEqual(0)
      expect(value.valueOf()).toBe(0)
      value = await writer.numDocsPromise()
      expect(value).toEqual(0)
      expect(value.valueOf()).toBe(0)
      done()
    })
  })

  describe('addDocument', () => {
    it('addDocumentSync should work as expected', done => {
      expect(writer.numDocsSync()).toEqual(0)
      expect(writer.ramBytesUsedSync()).toEqual(0)
      writer.addDocumentSync(new lucene.document.Document())
      expect(writer.numDocsSync()).toEqual(1)
      expect(writer.ramBytesUsedSync()).toEqual(0) // because document is empty

      const doc1 = new lucene.document.Document()
      doc1.addSync(new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES))
      writer.addDocumentSync(doc1)
      expect(writer.numDocsSync()).toEqual(2)
      expect(writer.ramBytesUsedSync()).toBeGreaterThan(0)
      done()
    })

    // TODO: async - not a priority - use promises ! - probably deprecating *Async methods in the future!

    it('addDocumentPromise should return zero on new instances', async done => {
      expect(await writer.numDocsPromise()).toEqual(0)
      expect(await writer.ramBytesUsedPromise()).toEqual(0)
      await writer.addDocumentPromise(new lucene.document.Document())
      expect(await writer.numDocsPromise()).toEqual(1)
      expect(await writer.ramBytesUsedPromise()).toEqual(0) // because document is empty

      const doc1 = new lucene.document.Document()
      await doc1.addPromise(new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES))
      await writer.addDocumentPromise(doc1)
      expect(await writer.numDocsPromise()).toEqual(2)
      expect(await writer.ramBytesUsedPromise()).toBeGreaterThan(0)

      done()
    })

    it('deleteDocumentsPromise, deleteAll', async done => {
      await writer.addDocumentPromise(new lucene.document.Document())
      var doc1 = new lucene.document.Document()
      await doc1.addPromise(new lucene.document.TextField('content', 'gandalf world', lucene.document.FieldStore.YES))
      await writer.addDocumentPromise(doc1)
      expect(await writer.numDocsPromise()).toEqual(2)
      doc1 = new lucene.document.Document()
      await doc1.addPromise(new lucene.document.TextField('content', 'mordor world', lucene.document.FieldStore.YES))
      await writer.addDocumentPromise(doc1)
      expect(await writer.numDocsPromise()).toEqual(3)
      const parser = new lucene.queryparser.classic.QueryParser('content', analyzer)
      var query = await parser.parsePromise('gandalf')
      expect(await writer.deleteDocumentsPromise(query)).toBeGreaterThan(0)
      expect(await writer.numDocsPromise()).toEqual(3)
      expect(await writer.deleteAllPromise()).toBeGreaterThan(0)
      expect(await writer.numDocsPromise()).toEqual(0)
      done()
    })

    it('updateDocument', async done => {
      await writer.addDocumentPromise(new lucene.document.Document())
      var doc1 = new lucene.document.Document()
      await doc1.addPromise(new lucene.document.TextField('content', 'gandalf world', lucene.document.FieldStore.YES))
      await writer.addDocumentPromise(doc1)
      expect(await writer.numDocsPromise()).toEqual(2)

      var doc2 = new lucene.document.Document()
      await doc2.addPromise(new lucene.document.TextField('content', 'gondor world', lucene.document.FieldStore.YES))
      expect(await writer.numDocsPromise()).toEqual(2)

      expect(await writer.updateDocumentPromise(new Term('content', 'gandalf world'), doc2)).toBeGreaterThan(0)
      // var parser = new lucene.queryparser.classic.QueryParser('content', analyzer)
      // var query =
      // await sleep(200);
      // await writer.flushPromise()
      // await sleep(200);
      // await writer.flushPromise()
      // await sleep(200);

      // expect(await writer.numDocsPromise()).toEqual(2)

      // expect(await writer.numDocsPromise()).toEqual(2)
      // await writer.deleteDocumentsPromise(await parser.parsePromise('gandalf'))
      // // expect(await writer.numDocsPromise()).toEqual(2)
      // await writer.deleteDocumentsPromise(await parser.parsePromise('gondor'))
      // expect(await writer.numDocsPromise()).toEqual(1)
      //
      // writer.flush()
      // // writer.closeSync()
      await writer.flushPromise()
      // await sleep(200);
      await writer.closePromise()
      // await sleep(200);
      // await writer.flushPromise()
      // await sleep(200);

      // const directory = lucene.index.DirectoryReader.open(index)
      const directory = lucene.index.DirectoryReader.open(index)
      const searcher = new lucene.search.IndexSearcher(directory)
      // const searcher = new lucene.search.IndexSearcher(index)
      const parser = new lucene.queryparser.classic.QueryParser('content', analyzer)

      // // searching for 'phrase does not exists' should return 0 results
      // let topDocs = await searcher.searchPromise(await parser.parsePromise('gandalf'), 10)
      // let topDocs = searcher.search(parser.parse( 'gandalf'), 10)
      // expect(topDocs.scoreDocs.length).toBe(0)
      let topDocs = await searcher.searchPromise(await parser.parsePromise('gondor'), 10)
      expect(topDocs.scoreDocs.length).toBe(1)

      // await directory.closePromise()

      // const searcher = getJava().newInstanceSync<any>("org.apache.lucene.search.IndexSearcher", getJava().callStaticMethodSync("org.apache.lucene.index.DirectoryReader", "open", index))
      // expect(searcher.toStringSync()).toContain('segments')
      done()
    })
  })
})
