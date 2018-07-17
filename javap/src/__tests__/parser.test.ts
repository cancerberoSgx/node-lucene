// import { readFileSync } from 'fs';
import { javap } from '../javap';
import { JavaAst } from '../types';
import { output1 } from './javap-output1';

describe('parser', () => {
  it('basic case should work', () => {

    const classes: string[] = ['org.apache.lucene.store.RAMDirectory', 'org.apache.lucene.store.LockFactory']
    const jars: string[] = ['../node-lucene/lucene-lib/lucene-core-7.4.0.jar', '../node-lucene/lucene-lib/lucene-queryparser-7.4.0.jar']

    // expect(1).toBe(1)
    const ast: JavaAst = javap({ jars, classes })
    // console.log(ast);

    // debugger
    const RAMDirectory = ast.find(c => c.name == 'org.apache.lucene.store.RAMDirectory')
const fileNameExists = RAMDirectory.methods.find(m=>m.name=='fileNameExists')
    console.log(fileNameExists);
    
    expect(fileNameExists.type.name).toBe('boolean')
  })
})