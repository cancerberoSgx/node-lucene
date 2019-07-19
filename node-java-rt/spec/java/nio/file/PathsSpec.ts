import * as java from '../../../../src'
import { join } from 'path'
describe('Paths', () => {
  it('getSync', done => {
    const p = java.nio.file.Paths.getSync('.', 'tmp', 'index1')
    expect(p.toStringSync()).toContain(join('.', 'tmp', 'index1'))
    done()
  })
})
