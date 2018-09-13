import { getJava } from '../../../src';
import String from '../../../src/java/lang/String';

describe('String', () => {
  describe('copyValueOf', () => {

    it('should return string', done => {
      const javaCharArray = getJava().newArray('char', ['a', 'b', 'c'])
      const copy = String.copyValueOf(javaCharArray)
      // console.log(copy);
      // debugger;
      expect(copy).toBe('abc')
      done()
    })

    it('should be callable manually using node-java', done => {
      // getJava().import('java.lang.String')
      const javaCharArray = getJava().newArray('char', ['a', 'b', 'c'])
      const copy = getJava().callStaticMethodSync('java.lang.String', 'copyValueOf', javaCharArray)
      expect(copy).toBe('abc')
      // console.log(copy);
      done()
    })

    it('should be callable manually using node-java', done => {
      const S = getJava().import('java.lang.String')
      const javaCharArray = getJava().newArray('char', ['a', 'b', 'c'])
      const copy = S.copyValueOfSync(javaCharArray)
      // console.log(copy);
      expect(copy).toBe('abc')
      done()
    })
  })
})