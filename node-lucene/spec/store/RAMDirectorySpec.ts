import * as lucene from '../../src'
describe('RAMDirectory', () => {
  it('ramBytesUsedSync new instance should return 0', done => {
    const d = new lucene.store.RAMDirectory()
    expect(d.ramBytesUsedSync()).toEqual(0)
    expect(d.ramBytesUsedSync().valueOf()).toBe(0)
    done()
  })

  it('ramBytesUsedASync new instance should return 0', done => {
    // const d =
    new lucene.store.RAMDirectory().ramBytesUsedAsync((error, value) => {
      expect(error).not.toBeDefined()
      expect(value).toEqual(0)
      expect(value.valueOf()).toBe(0)
      done()
    })
  })

  it('ramBytesUsedPromise new instance should return 0', async done => {
    const value = await new lucene.store.RAMDirectory().ramBytesUsedPromise()

    // expect(error).not.toBeDefined()
    expect(value).toEqual(0)
    expect(value.valueOf()).toBe(0)
    done()
    // })
  })
})