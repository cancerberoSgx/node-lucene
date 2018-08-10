import { writeFileSync } from 'fs';
import { create } from '../src';
import { rtJar } from '../src/__tests__/testUtils';

// should be able to generate all java.* standard classes

// const javapOptions = {
//   classPath: [rtJar],
//   classesFilter: 'java.lang.*' // heads up - I'm filtering here if not I'm getting a resource missing error probably I need to include another .jar but not important right now
// }
// const transformer = create()
// const options = { javapOptions }
const result = create().transform({
  javapOptions: {
    classPath: [rtJar],
    classesFilterByName: 'java.lang.*' // heads up - I'm filtering here if not I'm getting a resource missing error probably I need to include another .jar but not important right now
  }
})

const content = result.files[0].getContent()
writeFileSync('examples-output/tmp_all_java_lang.ts', content)