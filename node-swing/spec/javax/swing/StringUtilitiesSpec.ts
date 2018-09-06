import { swing } from '../../../src/javax';

describe('SwingUtilities', () => {
  describe('invokeLater', () => {
    it('should invoke given Runnable', done => {
      let counter = 0
      swing.SwingUtilities.invokeLater({
        run() {
          counter++
          expect(counter).toBe(1)
          done()
        }
      })
      expect(counter).toBe(0)
    })
  })

})