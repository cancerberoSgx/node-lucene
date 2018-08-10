import * as lucene from '../../src'

describe('Document', () => {

  describe('constructor', () => {
    it('should be instantiable', async done => {
      const doc1 = new lucene.document.Document()
      expect(await doc1.toStringPromise()).toContain('Document<>')
      done()
    })
  })


  describe('add, getField', () => {

    it('addSync and getFieldSync should work as expected', done => {
      const doc1 = new lucene.document.Document()
      expect(doc1.getFieldSync('content')).toBe(null)
      doc1.addSync(new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES))
      expect(doc1.getFieldSync('content').toStringSync()).toContain('content:hello world')
      done()
    })

    it('addAsync and getFieldAsync should return zero on new instances', done => {
      const doc1 = new lucene.document.Document()
      doc1.getFieldAsync('content', (error, value) => {
        expect(error).not.toBeDefined()
        expect(value).toBe(null)
        doc1.addAsync(new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES), (error, value) => {
          expect(error).not.toBeDefined()
          expect(value).toBeFalsy()

          doc1.getFieldAsync('content', (error, value) => {
            expect(error).not.toBeDefined()
            doc1.getFieldAsync('content', (error, value) => {
              expect(error).not.toBeDefined()
              expect(value.toStringSync()).toContain('content:hello world')
              done()
            })
          })
        })
      })
    })

    it('addPromise should return zero on new instances', async done => {
      const doc1 = new lucene.document.Document()
      expect(await doc1.getFieldPromise('content')).toBe(null)
      await doc1.addPromise(new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES))
      const field1 = await doc1.getFieldPromise('content')
      expect(field1.toStringSync()).toContain('content:hello world')
      done()
    })

  })


})