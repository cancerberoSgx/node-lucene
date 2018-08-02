import { javap } from 'javap';
import { create } from '../..';
import { FileImpl } from '../../impl/interfaces';
import { rtJar } from '../testUtils';

describe('parser', () => {

  it('should transform already processed ast', () => {
    const ast = javap({ classes: ['java.lang.Object'] })
    const transformer = create()
    const options = { ast }
    const sourceFile = transformer.transform(options).files[0] as FileImpl
    expect(sourceFile.sourceFileStructure.interfaces![0].methods!
      .find(m => m.name === 'toString')!.returnType)
      .toBe('string')
    expect(sourceFile.sourceFileStructure.interfaces![0].name).toBe('java_lang_Object')
  })

  it('should generate for all classes in rt.jar (standard lang and util classes)', () => {
    const ast = javap({
      classPath: [rtJar],
      classesFilterByName: 'java.*' // heads up - I'm filtering here if not I'm getting a resource missing error probably I need to include another .jar but not important right now
    })
  })

});
