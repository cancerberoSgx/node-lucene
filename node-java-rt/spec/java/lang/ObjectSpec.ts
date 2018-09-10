import * as java from '../../../src'

describe('Object', () => {
  describe('new', () => {
    it('should be instantiable', done => {
      const o = new java.lang.Object()
      expect(o.toStringSync()).toContain('java.lang.Object')
      expect(o.toString()).toContain('java.lang.Object')
      done()
    })
  })
  describe('getClass', () => {
    it('should return class', done => {
      const o = new java.lang.Object()
      expect(o.getClass().toString()).toBe('class java.lang.Object')
      done()
    })
  })

})