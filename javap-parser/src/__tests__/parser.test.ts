import { readFileSync } from 'fs';
import { parse } from '../parser';
import { JavaAst } from '../types';

describe('parser', () => {
  it('basic case should work', () => {
    const output = readFileSync(__dirname + '/javap-output1.txt').toString()
    const ast: JavaAst = parse(output)
    const RAMDirectory = ast['org.apache.lucene.store.RAMDirectory']
    expect(RAMDirectory.methods.find(m=>m.name==='openInput').scope).toBeDefined()
  })
})