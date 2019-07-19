import * as java from '../../../src'

describe('BigIntegerSpec', () => {
  describe('multiply', () => {
    it('should multiply', done => {
      const a = new java.math.BigInteger('123123123123123123123123')
      const b = new java.math.BigInteger('123123123123123123123123')
      expect(a.multiply(b).toString()).toBe('15159303447591735880024137993849705561417273129')
      done()
    })
  })
})
