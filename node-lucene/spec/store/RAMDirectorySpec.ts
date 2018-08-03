import * as lucene from '../../src'
describe('RAMDirectory', () => {
  it('1', () => {
    const d = new lucene.store.RAMDirectory()
    debugger;
    expect(d.ramBytesUsedSync()).toBe(0)
  })
})