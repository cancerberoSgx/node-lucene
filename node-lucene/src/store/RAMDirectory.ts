import { Callback, Long } from 'node-java-rt'
import Accountable from '../util/Accountable'
import BaseDirectory from './BaseDirectory'
import { getLuceneJava } from '../util/getLuceneJava'

export default class RAMDirectory extends BaseDirectory implements Accountable {
  constructor() {
    super()
    this._java = getLuceneJava().newInstanceSync(RAMDirectory._javaClassName())
  }

  static _javaClassName(): string {
    return 'org.apache.lucene.store.RAMDirectory'
  }

  ramBytesUsedSync(): Long {
    return this._java.ramBytesUsedSync()
  }

  ramBytesUsedAsync(callback: Callback<Long>) {
    this._java.ramBytesUsedAsync(callback)
  }

  ramBytesUsedPromise(): Promise<Long> {
    return this._java.ramBytesUsedPromise()
  }
}
