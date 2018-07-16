import { ast1 } from './output1';
import { traverse } from '../../../javap-parser/dist/src';

const ast = ast1
traverse(ast['org.apache.lucene.store.RAMDirectory'], (data) => {
  if (data.key === 'type') {
    console.log(data.value, data.parent.name)
  }

})