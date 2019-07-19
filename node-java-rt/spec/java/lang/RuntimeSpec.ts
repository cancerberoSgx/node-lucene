import * as java from '../../../src'
import Runtime from '../../../src/java/lang/Runtime'

describe('Runtime', () => {
  describe('getRuntime', () => {
    it('should get runtime', done => {
      const runtime = Runtime.getRuntime()
      expect(runtime.availableProcessors()).toBeGreaterThan(0)
      done()
    })
  })
})
