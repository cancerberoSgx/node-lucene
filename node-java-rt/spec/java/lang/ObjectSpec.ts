import * as java from '../../../src'
import Class2 from '../../../src/java/lang/Class';

describe('Object', () => {
  describe('new', () => {
    it('should be instantiable', done => {
      const o = new java.lang.Object()
      expect(o.toStringSync()).toContain('java.lang.Object')
      expect(o.toString()).toContain('java.lang.Object')
      // console.log(o.toStringSync());
      done()
    })
  })
  describe('getClass', () => {
    it('should return class', done => {
      // const c = new Class2()
      const o = new java.lang.Object()
      expect(o.getClass().toString()).toBe('class java.lang.Object')
      // console.log(o.getClass().toString());
      done()
    })
  })

})