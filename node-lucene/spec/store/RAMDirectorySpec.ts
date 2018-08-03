import * as lucene from '../../src'
describe('RAMDirectory', () => {
  it('should return 0 ramBytesUsedSync new instance', done => {
    const d = new lucene.store.RAMDirectory()
    expect(d.ramBytesUsedSync()).toEqual(0)
    expect(d.ramBytesUsedSync().valueOf()).toBe(0)
    d.ramBytesUsed((error, value) => {
      expect(error).not.toBeDefined()
      expect(value).toEqual(0)
      expect(value.valueOf()).toBe(0)
      done()
    })
  })
})