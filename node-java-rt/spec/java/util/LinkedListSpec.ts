import * as java from '../../../src'
describe('LinkedList', () => {

  // java.
  describe('add', () => {

    it('toStringSync should print list content representation', done => {
      const list1 = new java.util.LinkedList<number>() // TODO: how to force users to use generic in new call expression ? "Type parameters cannot appear on a constructor declaration."
      expect(list1.toStringSync()).toContain('[]')
      list1.addSync(1)
      expect(list1.toStringSync()).toContain('[1]')
      list1.addSync(2)
      expect(list1.toStringSync()).toContain('[1, 2]')
      done()
    })

    it('toStringAsync should print list content representation', done => {
      const list1 = new java.util.LinkedList<number>()
      list1.addAsync(1, async (error, value) => {
        expect(error).not.toBeDefined()
        expect(value).toBe(true)
        expect(list1.toStringSync()).toContain('[1]')
        expect(await list1.toStringPromise()).toContain('[1]')
        done()
      })
    })

    it('toStringPromise should print list content representation ', async done => {
      const list1 = new java.util.LinkedList<number>()
      expect(list1.toStringSync()).toContain('[]')
      expect(await list1.toStringPromise()).toContain('[]')
      await list1.addPromise(1)
      expect(list1.toStringSync()).toContain('[1]')
      expect(await list1.toStringPromise()).toContain('[1]')
      await list1.addPromise(2)
      expect(await list1.toStringPromise()).toContain('[1, 2]')
      done()
    })

    describe('equals', () => {
      it('should return true for two empty lists', done => {
        expect(new java.util.LinkedList().equals(new java.util.LinkedList())).toBe(true)
        done()
      })
    })


  })


  describe('new', () => {
    it('should return new instances', done => {
      const obj1 = java.lang.Class.new<java.lang.Object>('java.lang.Object', new java.lang.Object())
      expect(obj1.getClass().toString()).toBe('class java.lang.Object')
      done()
    })
  })

})