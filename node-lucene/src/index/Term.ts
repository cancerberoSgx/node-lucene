import { lang, getJavaObjectOrThrow } from 'node-java-rt';
import { getLuceneJava } from '../util/getLuceneJava';

export default class Term extends lang.Object implements lang.Comparable<Term> {
  static _javaClassName(): string {
    return 'org.apache.lucene.index.Term'
  }

  constructor(fld: string, text?: string) {
    super()
    this._java = getLuceneJava().newInstanceSync(Term._javaClassName(), fld, text)
  }

  compareTo(t: Term): number {
    return this._java.compareTo(getJavaObjectOrThrow(t))
  }

}