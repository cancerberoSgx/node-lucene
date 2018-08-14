import * as lucene from '../../src'

describe('IndexWriterConfig$OpenModeSpec', () => {

  describe('accessing members', () => {

    it('should be defined', done => {
      expect(lucene.index.IndexWriterConfig$OpenMode.APPEND).toBeDefined()
      expect(lucene.index.IndexWriterConfig$OpenMode.CREATE).toBeDefined()
      expect(lucene.index.IndexWriterConfig$OpenMode.CREATE_OR_APPEND).toBeDefined()
      done()
    })

  })
})