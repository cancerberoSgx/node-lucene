import * as lucene from '../../src'

describe('IndexWriterConfig', () => {
  describe('getRAMBufferSizeMB', () => {
    it('getRAMBufferSizeMBSync should return number greater than zero', done => {
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
      expect(writerConfig.getRAMBufferSizeMBSync()).toBeGreaterThan(0)
      done()
    })

    it('getRAMBufferSizeMBAsync should return number greater than zero', done => {
      new lucene.index.IndexWriterConfig(new lucene.analysis.standard.StandardAnalyzer()).getRAMBufferSizeMBAsync(
        (error, value) => {
          expect(error).not.toBeDefined()
          expect(value).toBeGreaterThan(0)
          done()
        }
      )
    })

    it('getRAMBufferSizeMBPromise should return number greater than zero', async done => {
      const value = await new lucene.index.IndexWriterConfig(
        new lucene.analysis.standard.StandardAnalyzer()
      ).getRAMBufferSizeMBPromise()
      expect(value).toBeGreaterThan(0)
      done()
    })
  })
})
