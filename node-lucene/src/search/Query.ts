import { Callback, Long, JavaBase } from 'node-java-rt'

export default class Query extends JavaBase {

  constructor() {
    super()
    // this._java = getJava().newInstanceSync(this._javaClassName, fieldName, analyzer._java)
  }

  get _javaClassName(): string {
    // return 'org.apache.lucene.queryparser.classic.QueryParser'
    throw new Error('Should not be called - _java should be given')
  }


  // parseSync(): Long {
  //   return this._java.parseSync()
  // }

  // parseAsync(callback: Callback<Long>) {
  //   this._java.parseAsync(callback)
  // }

  // parsePromise(): Promise<Long> {
  //   return this._java.parsePromise()
  // }
}