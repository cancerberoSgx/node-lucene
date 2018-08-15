import { Callback, lang } from 'node-java-rt';
import Analyzer from '../../analysis/Analyzer';
import Query from '../../search/Query';
import { getLuceneJava } from '../../util/getLuceneJava';
import QueryParserBase from './QueryParserBase';

export default class QueryParser extends QueryParserBase {

  constructor(fieldName: string, analyzer: Analyzer) {
    super()
    this._java = getLuceneJava().newInstanceSync(QueryParser._javaClassName(), fieldName, analyzer._java)
  }

  static _javaClassName(): string {
    return 'org.apache.lucene.queryparser.classic.QueryParser'
  }

  parseSync(queryString: string): Query {
    return QueryParser._buildSync<Query>(this._java.parseSync(queryString), new Query())
  }
  parse(queryString: string): Query {
    return this.parseSync(queryString)
  }
  parseAsync(queryString: string, callback: Callback<Query>) {
    this._java.parseAsync(queryString, QueryParser._buildAsync(callback, new Query()))
  }
  parsePromise(queryString: string): Promise<Query> {
    return QueryParser._buildPromise(this._java.parsePromise(queryString), new Query())
  }

}