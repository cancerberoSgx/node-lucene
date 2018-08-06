import RAMDirectory from '../../src/store/RAMDirectory'
describe('RAMDirectory', () => {
  it('ramBytesUsedSync new instance should return 0', done => {
    const d = new RAMDirectory()
    expect(d.ramBytesUsedSync()).toEqual(0)
    expect(d.ramBytesUsedSync().valueOf()).toBe(0)
    done()
  })

  it('ramBytesUsedASync new instance should return 0', done => {
    new RAMDirectory().ramBytesUsedAsync((error, value) => {
      expect(error).not.toBeDefined()
      expect(value).toEqual(0)
      expect(value.valueOf()).toBe(0)
      done()
    })
  })

  it('ramBytesUsedPromise new instance should return 0', async done => {
    const value = await new RAMDirectory().ramBytesUsedPromise()

    // expect(error).not.toBeDefined()
    expect(value).toEqual(0)
    expect(value.valueOf()).toBe(0)
    done()
    // })
  })
})