import * as lucene from '../../../src'

describe('QueryParser', () => {

  describe('parse', () => {

    it('should parseSync simple field definition', done => {
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      const parser = new lucene.queryparser.classic.QueryParser('content', analyzer)
      const q = parser.parseSync('foo')
      expect(q.toStringSync()).toBe('content:foo')
      done()
    })

    it('should parsePromise simple field definition', async done => {
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      const parser = new lucene.queryparser.classic.QueryParser('content', analyzer)
      const q = await parser.parsePromise('foo')
      expect(await q.toStringPromise()).toBe('content:foo')
      done()
    })

  })

})