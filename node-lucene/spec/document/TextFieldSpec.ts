import * as lucene from '../../src'

describe('TextField', () => {

  describe('constructor', () => {
    it('should be instantiable', done => {
      const field1 = new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES)
      expect(field1.toStringSync()).toContain('content:hello world')
      done()
    })
  })

})