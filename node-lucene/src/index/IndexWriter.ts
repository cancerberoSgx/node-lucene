import Analyzer from '../analysis/Analyzer'
import JavaBase from '../java/JavaBase';
import { getJava } from '../java';
import RAMDirectory from '../store/RAMDirectory';
import IndexWriterConfig from './IndexWriterConfig';

// export namespace index {
export default class IndexWriter extends JavaBase {
  /**
   * (Lorg/apache/lucene/analysis/Analyzer;)
   */
  constructor(index: RAMDirectory /* TODO: use super interface not this concrete type*/, writerConfig: IndexWriterConfig) {
    super()
    this._java = getJava().newInstanceSync(this.javaClassName, index.java, writerConfig.java)
  }

  public get javaClassName(): string {
    return 'org.apache.lucene.index.IndexWriter'
  }


  // var writer = java.newInstanceSync("org.apache.lucene.index.IndexWriter", index, writerConfig);

}