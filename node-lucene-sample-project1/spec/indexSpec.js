const exec = require('shelljs').exec

describe('1', () => {
  it('1', () => {
    expect(exec('npm i').code).toBe(0)
    const p = exec('node index')
    expect(p.code).toBe(0)
    expect(p.stdout).toContain('Found "1984" authored by George Orwell')
  })
})