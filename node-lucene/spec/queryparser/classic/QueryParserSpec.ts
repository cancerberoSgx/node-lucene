import * as lucene from '../../../src'

describe('QueryParser', () => {

  describe('parse', () => {

    it('parseSync new instance should greater than 1', done => {
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      const parser = new lucene.queryparser.classic.QueryParser('content', analyzer)
      const q = parser.parseSync('foo')
      expect(q).toBeDefined()
      // console.log(q);

      // expect(parser.parseSync('foo')).toBeGreaterThan(0)
      // expect(parser.parseSync('foo').valueOf()).toBeGreaterThan(0)
      done()
    })

    // it('parsePromise new instance should return greater than 1', done => {
    //   new lucene.analysis.standard.StandardAnalyzer().parseAsync((error, value) => {
    //     expect(error).not.toBeDefined()
    //     expect(value).toBeGreaterThan(0)
    //     done()
    //   })
    // })

    // it('parsePromise new instance should return greater than 1 ', async done => {
    //   const value = await new lucene.analysis.standard.StandardAnalyzer().parsePromise()
    //   expect(value).toBeGreaterThan(0)
    //   done()
    // })

  })

})