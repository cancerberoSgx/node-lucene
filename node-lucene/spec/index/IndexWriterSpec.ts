import * as lucene from '../../src'

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


  // describe('addDocument', () => {

  //   it('addDocumentSync should return zero on new instances', done => {
  //     // const analyzer = new lucene.analysis.standard.StandardAnalyzer()
  //     // const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
  //     // const index = new lucene.store.RAMDirectory()
  //     // const writer = new lucene.index.IndexWriter(index, writerConfig)

  // //     const doc1 = new lucene.document.Document()
  // //     const field1 = new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES)


  //     expect(writer.addDocumentSync().valueOf()).toBe(0)
  //     done()
  //   })

  //   it('addDocumentAsync should return zero on new instances', done => {
  //     // const analyzer = new lucene.analysis.standard.StandardAnalyzer()
  //     // const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
  //     // const index = new lucene.store.RAMDirectory()
  //     // const writer = new lucene.index.IndexWriter(index, writerConfig)
  //     writer.addDocumentAsync((error, value) => {
  //       expect(error).not.toBeDefined()
  //       expect(value.valueOf()).toBe(0)
  //       done()
  //     })
  //   })

  //   it('addDocumentPromise should return zero on new instances', async done => {
  //     const analyzer = new lucene.analysis.standard.StandardAnalyzer()
  //     const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
  //     const index = new lucene.store.RAMDirectory()
  //     const writer = new lucene.index.IndexWriter(index, writerConfig)
  //     const value = await writer.addDocumentPromise()
  //     expect(value).toEqual(0)
  //     expect(value.valueOf()).toBe(0)
  //     done()
  //   })

  // })



})