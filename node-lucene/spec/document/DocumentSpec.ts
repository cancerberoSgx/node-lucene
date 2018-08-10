import * as lucene from '../../src'

describe('Document', () => {

  describe('constructor', () => {
    it('should be instantiable', async done => {
      const doc1 = new lucene.document.Document()
      expect(await doc1.toStringPromise()).toContain('Document<>')
      done()
    })
  })


  describe('addDocument', () => {

    it('addDocumentSync should return zero on new instances', done => {
      const doc1 = new lucene.document.Document()
      const field1 = new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES)
      expect(doc1.getFieldSync('content')).toBe(null)
      doc1.addSync(field1)
      expect(doc1.getFieldSync('content').toStringSync()).toContain('content:hello world')
      done()
    })

    //   //   it('addDocumentAsync should return zero on new instances', done => {
    //   //     const analyzer = new lucene.analysis.standard.StandardAnalyzer()
    //   //     const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
    //   //     const index = new lucene.store.RAMDirectory()
    //   //     const writer = new lucene.index.IndexWriter(index, writerConfig)
    //   //     writer.addDocumentAsync((error, value) => {
    //   //       expect(error).not.toBeDefined()
    //   //       expect(value.valueOf()).toBe(0)
    //   //       done()
    //   //     })
    //   //   })

    //   //   it('addDocumentPromise should return zero on new instances', async done => {
    //   //     const analyzer = new lucene.analysis.standard.StandardAnalyzer()
    //   //     const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
    //   //     const index = new lucene.store.RAMDirectory()
    //   //     const writer = new lucene.index.IndexWriter(index, writerConfig)
    //   //     const value = await writer.addDocumentPromise()
    //   //     expect(value).toEqual(0)
    //   //     expect(value.valueOf()).toBe(0)
    //   //     done()
    //   //   })

  })


})