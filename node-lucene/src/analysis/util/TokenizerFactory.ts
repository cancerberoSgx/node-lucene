import { lang } from 'node-java-rt';
import { getLuceneJava } from '../../util/getLuceneJava';

export default class TokenizerFactory extends lang.Object {

  constructor() {
    super()
    this._java = getLuceneJava().newInstanceSync(TokenizerFactory._javaClassName())
  }

  public static _javaClassName(): string {
    return 'org.apache.lucene.analysis.util.TokenizerFactory'
  }

}
