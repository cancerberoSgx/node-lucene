import * as lucene from '../../src'

describe('FieldStore', () => {

  describe('YES', () => {
    it('should get YES static field', done => {
      const YES = lucene.document.FieldStore.YES
      expect(lucene.document.FieldStore.YES.toStringSync().toUpperCase()).toBe('YES')
      done()
    })
  })

  describe('NO', () => {
    it('should get NO static field', done => {
      const NO = lucene.document.FieldStore.NO
      expect(lucene.document.FieldStore.NO.toStringSync().toUpperCase()).toBe('NO')
      done()
    })
  })

})