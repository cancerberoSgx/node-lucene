import Analyzer from '../../analysis/Analyzer';
import JavaBase from '../../java/JavaBase';
import { getJava, Callback } from '../../java';
import Query from '../../search/Query';

export default class QueryParser extends JavaBase {

  constructor(fieldName: string, analyzer: Analyzer) {
    super()
    this._java = getJava().newInstanceSync(this._javaClassName, fieldName, analyzer._java)
  }

  get _javaClassName(): string {
    return 'org.apache.lucene.queryparser.classic.QueryParser'
  }

  parseSync(queryString: string): Query {
    return this._buildSync<Query>(this._java.parseSync(queryString), new Query())
  }

  parseAsync(queryString: string, callback: Callback<Query>) {
    this._java.parseAsync(queryString, this._buildAsync(callback, new Query()))
  }

  parsePromise(queryString: string): Promise<Query> {
    return this._buildPromise(this._java.parsePromise(queryString), new Query())
  }

}