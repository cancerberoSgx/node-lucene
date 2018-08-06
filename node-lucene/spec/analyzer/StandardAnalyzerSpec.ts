import RAMDirectory from '../../src/store/RAMDirectory'
import StandardAnalyzer from '../../src/analysis/standard/StandardAnalyzer';
describe('StandardAnalyzer', () => {
  it('getMaxTokenLengthSync new instance should greater than 1', done => {
    const d = new StandardAnalyzer()
    expect(d.getMaxTokenLengthSync()).toBeGreaterThan(0)
    expect(d.getMaxTokenLengthSync().valueOf()).toBeGreaterThan(0)
    done()
  })

  it('getMaxTokenLengthPromise new instance should return greater than 1', done => {
    new StandardAnalyzer().getMaxTokenLengthAsync((error, value) => {
      expect(error).not.toBeDefined()
      expect(value).toBeGreaterThan(0)
      done()
    })
  })

  it('getMaxTokenLengthPromise new instance should return greater than 1 ', async  done => {
    const value = await new StandardAnalyzer().getMaxTokenLengthPromise()
    expect(value).toBeGreaterThan(0)
    done()
  })
})