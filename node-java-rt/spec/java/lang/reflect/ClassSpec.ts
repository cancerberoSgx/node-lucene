import * as java from '../../../../src'

describe('Class', () => {
  describe('getMethods', () => {
    it('should return methods', done => {
      const methods = new java.lang.Object().getClass().getMethods()
      const getClass = methods.find(m => m.getName() === 'getClass')
      expect(getClass).toBeDefined()
      // methods.map(m => m.toString())
      done()
    })
  })
})