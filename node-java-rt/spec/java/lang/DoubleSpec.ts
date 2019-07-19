import * as java from '../../../src'
import Double from '../../../src/java/lang/Double'

describe('Double', () => {
  describe('sum', () => {
    it('should sum', done => {
      const result = java.lang.Double.sum(new java.lang.Double('3.14'), new java.lang.Double('6.5'))
      expect(result.toString()).toBe('9.64')
      // expect(result.equals(new Double('9.64'))).toBe(true)
      done()
    })
  })
})
