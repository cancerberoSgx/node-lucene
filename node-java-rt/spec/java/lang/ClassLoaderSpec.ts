import * as java from '../../../src'
import ClassLoader from '../../../src/java/lang/ClassLoader';

describe('ClassLoader', () => {
  describe('getSystemClassLoader, loadClass', () => {
    it('should allow to load class statically by name', done => {


      // console.log();
      expect(ClassLoader.getSystemClassLoader().getClass().toString()).toContain('class ')

      done()
    })
  })
})