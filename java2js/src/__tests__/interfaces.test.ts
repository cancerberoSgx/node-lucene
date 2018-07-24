// import { buildSourceFiles } from '..';
import { javap } from 'javap/dist';
import { create } from '..';

describe('parser', () => {
  it('should transform already processed ast', () => {
    // console.log('start');

    const ast = javap({ classes: ['java.lang.Object'] })
    const transformer = create()
    const options = { ast }
    const sourceFile = transformer.transform(options)
    expect(sourceFile.files[0].sourceFile.interfaces![0].methods!.find(m => m.name === 'toString')!.returnType).toBe('string')
    // debugger
    // console.log(JSON.stringify(sourceFile, null, 2))

  })
});
