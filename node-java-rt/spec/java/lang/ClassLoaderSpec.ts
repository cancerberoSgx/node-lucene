import * as java from '../../../src'

describe('ClassLoader', () => {
  describe('getSystemClassLoader, loadClass', () => {
    it('should allow to load class statically by name', done => {
      expect(
        java.lang.ClassLoader.getSystemClassLoader()
          .getClass()
          .toString()
      ).toContain('class ')

      done()
    })
  })
})
