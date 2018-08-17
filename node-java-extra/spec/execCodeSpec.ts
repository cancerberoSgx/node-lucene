import { compileCode } from '../src/compile';
import { dirname, join, basename } from 'path';
import { test, rm } from 'shelljs';

describe('compile', () => {
  it('should generate .class', () => {
    const result = compileCode({
      code: `
public class Class1 {
  public String method1(String p){
    return "from java: " + p;
  }
}
`,
      className: 'Class1'
    })
    expect(result.code).toBe(0)
    result.files.forEach(f => {
      const classFile = join(dirname(f), basename(f, '.java') + '.class')
      // console.log(classFile);
      expect(test('-f', classFile))
      rm('-rf', dirname(f))
    })
  })
})