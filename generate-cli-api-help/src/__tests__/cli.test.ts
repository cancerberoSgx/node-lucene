import { Options, printHelp } from '..';
import { execSync, spawnSync } from 'child_process';

describe('cli', () => {

  beforeAll(() => {
    expect(spawnSync('npm', ['run', 'build']).status).toBe(0)
  })

  it('cli basic', () => {
    let args = ['--input', 'src/__tests__/assets/interface1.ts', '--interfaceName', 'Options']
    let p = spawnSync('node', ['bin/generate-cli-api-help.js'].concat(args))
    expect(p.stdout.toString()).toContain('ace describes both Node.js API and CLI opti')
    expect(p.status).toBe(0)
  })
  // it('should support de-camelized arg format like --interface-name', () => {
  //   let args = ['--input', 'src/__tests__/assets/interface1.ts', '--interfaceName', 'Options']
  //   let p = spawnSync('node', ['bin/generate-cli-api-help.js'].concat(args))
  //   expect(p.stdout.toString()).toContain('ace describes both Node.js API and CLI opti')
  //   expect(p.status).toBe(0)
  // })
  it('should fail when insufficient args', () => {
    const args = ['--input', 'src/__tests__/assets/interface1.ts']
    const p = spawnSync('node', ['bin/generate-cli-api-help.js'].concat(args))
    expect(p.stdout.toString()).toContain('Incorrect call')
    expect(p.status).not.toBe(0)
  })
})
