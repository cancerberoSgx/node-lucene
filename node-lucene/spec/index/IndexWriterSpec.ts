import * as lucene from '../../src'

describe('IndexWriter', () => {

  it('ramBytesUsedSync should return zero on new instances', done => {
    const analyzer = new lucene.analysis.standard.StandardAnalyzer()
    const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
    const index = new lucene.store.RAMDirectory()
    const writer = new lucene.index.IndexWriter(index, writerConfig)
    expect(writer.ramBytesUsedSync().valueOf()).toBe(0)
    done()
  })

  it('ramBytesUsedSync should return zero on new instances', done => {
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

  it('ramBytesUsedSync should return zero on new instances', async done => {
    const analyzer = new lucene.analysis.standard.StandardAnalyzer()
    const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
    const index = new lucene.store.RAMDirectory()
    const writer = new lucene.index.IndexWriter(index, writerConfig)
    const value = await writer.ramBytesUsedSync()
    expect(value.valueOf()).toBe(0)
    done()
  })

})