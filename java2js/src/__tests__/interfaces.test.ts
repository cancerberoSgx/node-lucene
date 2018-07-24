import { buildSourceFile } from '..';
import { javap } from 'javap/dist';

describe('parser', () => {
  it('should accept function predicate', () => {
    const ast = javap({ classes: ['java.lang.Object'] })
    const sourceFile = buildSourceFile(ast)
    console.log(JSON.stringify(sourceFile));

  })
});
