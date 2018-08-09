import * as java from '../../../src'

describe('Object', () => {
  describe('new', () => {
    it('should be instantiable', done => {
      const o = new java.lang.Object()
      expect(o.toStringSync()).toContain('java.lang.Object')
      // console.log(o.toStringSync());
      done()
    })
  })

})