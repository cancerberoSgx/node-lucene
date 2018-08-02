import { create } from '../src';
import { writeFileSync } from 'fs';
import { luceneCoreJar } from '../src/__tests__/testUtils';
import { Config } from 'javap';

// should be able to generate all java.* standard classes

const transformer = create()
const result = transformer.transform({
  javapOptions: {
    jars: [luceneCoreJar],
    // allClasses: true
    classesFilterByName: 'org.apache.lucene.*', // heads up - I'm filtering here because there are duplicate classes also in META-INF/ that generate class not found errors
    classFilter: c => c.modifiers.includes('public'),
    memberFilter: n => n.modifiers.includes('public')
  }
})
console.log('seba7', result.ast.length);

const content = result.files[0].getContent()
console.log(content.length);
writeFileSync('examples-output/tmp_lucene_core_all.ts', content)