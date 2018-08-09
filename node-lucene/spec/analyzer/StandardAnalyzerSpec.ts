import * as lucene from '../../src'

describe('StandardAnalyzer', () => {

  describe('getMaxTokenLength', () => {

    it('getMaxTokenLengthSync new instance should greater than 1', done => {
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      expect(analyzer.getMaxTokenLengthSync()).toBeGreaterThan(0)
      expect(analyzer.getMaxTokenLengthSync().valueOf()).toBeGreaterThan(0)
      done()
    })

    it('getMaxTokenLengthAsync new instance should return greater than 1', done => {
      new lucene.analysis.standard.StandardAnalyzer().getMaxTokenLengthAsync((error, value) => {
        expect(error).not.toBeDefined()
        expect(value).toBeGreaterThan(0)
        done()
      })
    })

    it('getMaxTokenLengthPromise new instance should return greater than 1 ', async done => {
      const value = await new lucene.analysis.standard.StandardAnalyzer().getMaxTokenLengthPromise()
      expect(value).toBeGreaterThan(0)
      done()
    })

  })

})