const exec = require('shelljs').exec

describe('clean, install and run all tests', () => {
  it('should test1', () => {
    expect(exec('rm -rf node_modules package-lock.json').code).toBe(0)
    expect(exec('npm i').code).toBe(0)
    const p = exec('node src/test1')
    expect(p.code).toBe(0)
    expect(p.stdout).toContain('Found "1984" authored by George Orwell')
  })
})