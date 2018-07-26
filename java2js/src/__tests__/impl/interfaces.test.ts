import { javap } from 'javap';
import { create } from '../..';
import { rtJar } from '../testUtils';
import { FileImpl } from '../../impl/interfaces';
import { writeFileSync } from 'fs';

describe('parser', () => {

  xit('should transform already processed ast', () => {
    const ast = javap({ classes: ['java.lang.Object'] })
    const transformer = create()
    const options = { ast }
    const sourceFile = transformer.transform(options).files[0] as FileImpl
    expect(sourceFile.sourceFileStructure.interfaces![0].methods!
      .find(m => m.name === 'toString')!.returnType)
      .toBe('string')
    expect(sourceFile.sourceFileStructure.interfaces![0].name).toBe('java_lang_Object')
  })

  xit('should be able to generate all java.* standard classes', () => {
    const javapOptions = {
      jars: [rtJar],
      classesFilter: 'java.*' // heads up - I'm filtering here if not I'm getting a resource missing error probably I need to include another .jar but not important right now
    }
    const transformer = create()
    const options = { javapOptions }
    // debugger;
    const result = transformer.transform(options)
    const content = result.files[0].getContent()
    console.log(content.length);
    writeFileSync('all.ts', content)
  })


  it('should generate for all classes in rt.jar (standard lang and util classes)', () => {
    const config = {
      jars: [rtJar],
      classesFilter: 'java.*' // heads up - I'm filtering here if not I'm getting a resource missing error probably I need to include another .jar but not important right now
    }
    const ast = javap(config)
    console.log('BIG ONE2: ' + ast.length);

    // const classes = ['java.lang.String', 'java.util.HashMap', 'java.lang.reflect.Method']
    // classes.forEach(className => expect(ast.find(c => c.name === className)).toBeTruthy())
  })

});
