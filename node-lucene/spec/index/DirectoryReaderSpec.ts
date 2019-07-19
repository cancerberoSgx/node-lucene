import * as lucene from '../../src'
import { getJava } from 'node-java-rt'

describe('DirectoryReader', () => {
  describe('open', () => {
    it('should throw of open() without closing the writer', done => {
      const index = new lucene.store.RAMDirectory()
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      expect(() => lucene.index.DirectoryReader.openSync(index)).toThrow()
      done()
    })
  })
})
