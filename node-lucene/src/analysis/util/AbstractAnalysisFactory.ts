import { lang } from 'node-java-rt';
import { getLuceneJava } from '../../util/getLuceneJava';

export default class AbstractAnalysisFactory extends lang.Object {

  constructor() {
    super()
    this._java = getLuceneJava().newInstanceSync(AbstractAnalysisFactory._javaClassName())
  }

  public static _javaClassName(): string {
    return 'org.apache.lucene.analysis.util.AbstractAnalysisFactory'
  }

}
