import Analyzer from '../../analysis/Analyzer'
import Query from '../../search/Query';
import { Callback, Long, JavaBase, getJava, lang } from 'node-java-rt';

export default class QueryParser extends lang.Object {

  constructor(fieldName: string, analyzer: Analyzer) {
    super()
    this._java = getJava().newInstanceSync(QueryParser._javaClassName(), fieldName, analyzer._java)
  }

  static _javaClassName(): string {
    return 'org.apache.lucene.queryparser.classic.QueryParser'
  }

  parseSync(queryString: string): Query {
    return QueryParser._buildSync<Query>(this._java.parseSync(queryString), new Query())
  }

  parseAsync(queryString: string, callback: Callback<Query>) {
    this._java.parseAsync(queryString, QueryParser._buildAsync(callback, new Query()))
  }

  parsePromise(queryString: string): Promise<Query> {
    return QueryParser._buildPromise(this._java.parsePromise(queryString), new Query())
  }

}