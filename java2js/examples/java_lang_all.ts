import { javap } from 'javap';
import { create } from '../src';
import { rtJar } from '../src/__tests__/testUtils';
import { FileImpl } from '../src/impl/interfaces';
import { writeFileSync } from 'fs';

// should be able to generate all java.* standard classes

const javapOptions = {
  jars: [rtJar],
  classesFilter: 'java.lang.*' // heads up - I'm filtering here if not I'm getting a resource missing error probably I need to include another .jar but not important right now
}
const transformer = create()
const options = { javapOptions }
// debugger;
const result = transformer.transform(options)
// console.log('seba7', result.files.length);

const content = result.files[0].getContent()
// console.log(content.length);
writeFileSync('examples-output/tmp_all_java_lang.ts', content)