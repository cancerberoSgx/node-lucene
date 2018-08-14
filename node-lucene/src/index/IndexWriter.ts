
import { Callback, getJavaObjectOrThrow, lang, Long } from 'node-java-rt';
import RAMDirectory from '../store/RAMDirectory';
import { getLuceneJava } from '../util/getLuceneJava';
import IndexWriterConfig from './IndexWriterConfig';

export default class IndexWriter extends lang.Object /* extends org_apache_lucene_index_IndexWriter, java_io_Closeable, org_apache_lucene_index_TwoPhaseCommit, org_apache_lucene_util_Accountable, org_apache_lucene_index_MergePolicy$MergeContext */ {

  constructor(index: RAMDirectory /* TODO: use super interface org.apache.lucene.store.Directory not this concrete type*/, writerConfig: IndexWriterConfig) {
    super()
    this._java = getLuceneJava().newInstanceSync(IndexWriter._javaClassName(), index._java, writerConfig._java)
  }

  static _javaClassName(): string {
    return 'org.apache.lucene.index.IndexWriter'
  }

  ramBytesUsedSync(): Long {
    return this._java.ramBytesUsedSync()
  }
  ramBytesUsedAsync(callback: Callback<Long>): void {
    this._java.ramBytesUsedAsync(callback)
  }
  ramBytesUsedPromise(): Promise<Long> {
    return this._java.ramBytesUsedPromise()
  }

  closeSync(): void {
    return this._java.closeSync()
  }
  close(): void {
    return this.closeSync.apply(this, arguments)
  }
  closeAsync(callback: Callback<void>): void {
    this._java.closeAsync(callback)
  }
  closePromise(): Promise<void> {
    return this._java.closePromise()
  }


  flushSync(): void {
    return this._java.flushSync()
  }
  flush(): void {
    return this.flushSync.apply(this, arguments)
  }
  flushAsync(callback: Callback<void>): void {
    this._java.flushAsync(callback)
  }
  flushPromise(): Promise<void> {
    return this._java.flushPromise()
  }

  numDocsSync(): number {
    return this._java.numDocsSync()
  }
  numDocsAsync(callback: Callback<number>): void {
    this._java.numDocsAsync(callback)
  }
  numDocsPromise(): Promise<number> {
    return this._java.numDocsPromise()
  }

  addDocumentSync<T>(document: lang.Iterable<T>): Long {
    return this._java.addDocumentSync(getJavaObjectOrThrow(document))
  }
  addDocument<T>(document: lang.Iterable<T>): Long {
    return this.addDocumentSync.apply(this, arguments)
  }
  addDocumentAsync<T>(document: lang.Iterable<T>, callback: Callback<Long>): void {
    this._java.addDocumentAsync(getJavaObjectOrThrow(document), callback)
  }
  addDocumentPromise<T>(document: lang.Iterable<T>): Promise<Long> {
    return this._java.addDocumentPromise(getJavaObjectOrThrow(document))
  }
}


