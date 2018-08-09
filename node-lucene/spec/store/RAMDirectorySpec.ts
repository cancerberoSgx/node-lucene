import * as lucene from '../../src'

describe('RAMDirectory', () => {

  describe('ramBytesUsed', () => {
    it('ramBytesUsedSync new instance should return 0', done => {
      const index = new lucene.store.RAMDirectory()
      expect(index.ramBytesUsedSync()).toEqual(0)
      expect(index.ramBytesUsedSync().valueOf()).toBe(0)
      done()
    })

    it('ramBytesUsedASync new instance should return 0', done => {
      new lucene.store.RAMDirectory().ramBytesUsedAsync((error, value) => {
        expect(error).not.toBeDefined()
        expect(value).toEqual(0)
        expect(value.valueOf()).toBe(0)
        done()
      })
    })

    it('ramBytesUsedPromise new instance should return 0', async done => {
      const value = await new lucene.store.RAMDirectory().ramBytesUsedPromise()
      expect(value).toEqual(0)
      expect(value.valueOf()).toBe(0)
      done()
    })

  })
})