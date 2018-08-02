import { exec, rm, cat } from 'shelljs';
import { javapJsonJar } from './testUtils';

describe('build and cli', () => {

  it('should build', () => {
    expect(exec('npm run build').code).toBe(0)
  })

  it('should print json to stdout if no --input provided', () => {
    const p = exec(`node bin/java-ast.js --classPath ${javapJsonJar} --classes JavapJsonOutput,java.util.List`)
    expect(p.code).toBe(0)
    //@ts-ignore
    expect(JSON.parse(p.stdout).find(c => c.name === 'JavapJsonOutput').methods.find(m => m.name === 'javap'))
  })

  it('should write json to file if --output provided', () => {
    const f = `tmp_${Date.now()}.json`
    const p = exec(`node bin/java-ast.js --output ${f} --classPath ${javapJsonJar} --classes JavapJsonOutput,java.util.List`)
    expect(p.code).toBe(0)
    //@ts-ignore
    expect(JSON.parse(cat(f)).find(c => c.name === 'JavapJsonOutput').methods.find(m => m.name === 'javap'))
    rm(f)
  })
})
