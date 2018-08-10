import * as lucene from '../../src'

describe('IndexWriter', () => {

  describe('ramBytesUsed', () => {

    it('ramBytesUsedSync should return zero on new instances', done => {
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
      const index = new lucene.store.RAMDirectory()
      const writer = new lucene.index.IndexWriter(index, writerConfig)
      expect(writer.ramBytesUsedSync().valueOf()).toBe(0)
      done()
    })

    it('ramBytesUsedAsync should return zero on new instances', done => {
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
      const index = new lucene.store.RAMDirectory()
      const writer = new lucene.index.IndexWriter(index, writerConfig)
      writer.ramBytesUsedAsync((error, value) => {
        expect(error).not.toBeDefined()
        expect(value.valueOf()).toBe(0)
        done()
      })
    })

    it('ramBytesUsedPromise should return zero on new instances', async done => {
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
      const index = new lucene.store.RAMDirectory()
      const writer = new lucene.index.IndexWriter(index, writerConfig)
      const value = await writer.ramBytesUsedPromise()
      expect(value).toEqual(0)
      expect(value.valueOf()).toBe(0)
      done()
    })

  })


  // describe('addDocument', () => {

  //   it('addDocumentSync should return zero on new instances', done => {
  //     const analyzer = new lucene.analysis.standard.StandardAnalyzer()
  //     const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
  //     const index = new lucene.store.RAMDirectory()
  //     const writer = new lucene.index.IndexWriter(index, writerConfig)
  //     expect(writer.addDocumentSync().valueOf()).toBe(0)
  //     done()
  //   })

  //   it('addDocumentAsync should return zero on new instances', done => {
  //     const analyzer = new lucene.analysis.standard.StandardAnalyzer()
  //     const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
  //     const index = new lucene.store.RAMDirectory()
  //     const writer = new lucene.index.IndexWriter(index, writerConfig)
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