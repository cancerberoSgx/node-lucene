import { lang } from 'node-java-rt';
import { getLuceneJava } from '../../util/getLuceneJava';
import Analyzer from '../Analyzer';

export default class CustomAnalyzer extends Analyzer/* TODO: implements Closeable, AutoCloseable*/ {
  // close(): void {
  //   throw new Error('Method not implemented.');
  // }

  constructor() {
    super()
    this._java = getLuceneJava().newInstanceSync(CustomAnalyzer._javaClassName())
  }

  public static _javaClassName(): string {
    return 'org.apache.lucene.analysis.util.CustomAnalyzer'
  }

}
