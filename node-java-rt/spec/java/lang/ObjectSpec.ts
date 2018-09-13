import * as java from '../../../src'

describe('Object', () => {
  describe('new', () => {
    it('should be instantiable', done => {
      const o = new java.lang.Object()
      expect(o.toStringSync()).toContain('java.lang.Object')
      expect(o.toString()).toContain('java.lang.Object')
      done()
    })
  })

  describe('getClass', () => {
    it('should return class', done => {
      const o = new java.lang.Object()
      expect(o.getClass().toString()).toBe('class java.lang.Object')
      done()
    })
  })

  describe('class', () => {
    it('should return class', done => {
      expect(java.lang.Object.class('java.lang.Object').toString()).toBe('class java.lang.Object')
      done()
    })
  })

  describe('equals', () => {
    it('should return false for two new objects', done => {
      expect(new java.lang.Object().equals(new java.lang.Object())).toBe(false)
      done()
    })
    it('should return Promise<false> for two new objects', async done => {
      expect(await new java.lang.Object().equalsPromise(new java.lang.Object())).toBe(false)
      done()
    })
  })


})