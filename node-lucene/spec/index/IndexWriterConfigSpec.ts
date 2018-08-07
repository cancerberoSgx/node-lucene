// import StandardAnalyzer from '../../src/analysis/standard/StandardAnalyzer';
// import RAMDirectory from '../../src/store/RAMDirectory';
import * as lucene from '../../src'
// import { store } from '../../src';

describe('IndexWriterConfig', () => {
  it('should be instantiable', () => {
    const analyzer = new lucene.analysis.standard.StandardAnalyzer()
    const index = new lucene.store.RAMDirectory()
    // const writerConfig = java.newInstanceSync("org.apache.lucene.index.IndexWriterConfig", analyzer);
  })
})