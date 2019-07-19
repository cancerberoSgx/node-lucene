import { Callback, getJavaObjectOrThrow, lang, Long } from 'node-java-rt'
import RAMDirectory from '../store/RAMDirectory'
import { getLuceneJava } from '../util/getLuceneJava'
import IndexWriterConfig from './IndexWriterConfig'
import Directory from '../store/Directory'
import Query from '../search/Query'
import Term from './Term'
import { IndexableField } from './IndexableField'

export default class IndexWriter extends lang.Object /* TODO: implements lots of things */ {
  constructor(index: Directory, writerConfig: IndexWriterConfig) {
    super()
    this._java = getLuceneJava().newInstanceSync(IndexWriter._javaClassName(), index._java, writerConfig._java)
  }

  static _javaClassName(): string {
    return 'org.apache.lucene.index.IndexWriter'
  }

  public ramBytesUsedSync(): Long {
    return this._java.ramBytesUsedSync()
  }
  public ramBytesUsedAsync(callback: Callback<Long>): void {
    this._java.ramBytesUsedAsync(callback)
  }
  public ramBytesUsedPromise(): Promise<Long> {
    return this._java.ramBytesUsedPromise()
  }

  public closeSync(): void {
    return this._java.closeSync()
  }
  public close(): void {
    return this.closeSync.apply(this, arguments as any)
  }
  public closeAsync(callback: Callback<void>): void {
    this._java.closeAsync(callback)
  }
  public closePromise(): Promise<void> {
    return this._java.closePromise()
  }

  public flushSync(): void {
    return this._java.flushSync()
  }
  public flush(): void {
    return this.flushSync.apply(this, arguments as any)
  }
  public flushAsync(callback: Callback<void>): void {
    this._java.flushAsync(callback)
  }
  public flushPromise(): Promise<void> {
    return this._java.flushPromise()
  }

  public numDocsSync(): number {
    return this._java.numDocsSync()
  }
  public numDocsAsync(callback: Callback<number>): void {
    this._java.numDocsAsync(callback)
  }
  public numDocsPromise(): Promise<number> {
    return this._java.numDocsPromise()
  }

  public addDocumentSync<T>(document: lang.Iterable<T>): Long {
    return this._java.addDocumentSync(getJavaObjectOrThrow(document))
  }
  public addDocument<T>(document: lang.Iterable<T>): Long {
    return this.addDocumentSync.apply(this, arguments as any)
  }
  public addDocumentAsync<T>(document: lang.Iterable<T>, callback: Callback<Long>): void {
    this._java.addDocumentAsync(getJavaObjectOrThrow(document), callback)
  }
  public addDocumentPromise<T>(document: lang.Iterable<T>): Promise<Long> {
    return this._java.addDocumentPromise(getJavaObjectOrThrow(document))
  }

  public deleteAllSync(): Long {
    return this._java.deleteAllSync()
  }
  public deleteAll(): Long {
    return this.deleteAllSync()
  }
  public deleteAllAsync(callback: Callback<Long>): void {
    this._java.deleteAllAsync(callback)
  }
  public deleteAllPromise(): Promise<Long> {
    return this._java.deleteAllPromise()
  }

  public deleteDocumentsSync(...queries: (Query | Term)[]): Long {
    return this._java.deleteDocumentsSync(...queries.map(getJavaObjectOrThrow))
  }
  public deleteDocuments(...queries: (Query | Term)[]): Long {
    return this.deleteDocumentsSync(...queries.map(getJavaObjectOrThrow))
  }
  public async deleteDocumentsAsync(callback: Callback<Long>, ...queries: (Query | Term)[]) {
    var result = await this._java.deleteDocumentsPromise(...queries.map(getJavaObjectOrThrow))
    callback(null, result)
  }
  public async deleteDocumentsPromise(...queries: (Query | Term)[]): Promise<Long> {
    var result = await this._java.deleteDocumentsPromise(...queries.map(getJavaObjectOrThrow))
    return result
  }

  public updateDocumentSync(term: Term, doc: lang.Iterable<IndexableField>): Long {
    return this._java.updateDocumentSync(getJavaObjectOrThrow(term), getJavaObjectOrThrow(doc))
  }
  public updateDocument(term: Term, doc: lang.Iterable<IndexableField>): Long {
    return this.updateDocumentSync(getJavaObjectOrThrow(term), getJavaObjectOrThrow(doc))
  }
  public async updateDocumentAsync(callback: Callback<Long>, term: Term, doc: lang.Iterable<IndexableField>) {
    var result = await this._java.updateDocumentPromise(getJavaObjectOrThrow(term), getJavaObjectOrThrow(doc))
    callback(null, result)
  }
  public async updateDocumentPromise(term: Term, doc: lang.Iterable<IndexableField>): Promise<Long> {
    var result = await this._java.updateDocumentPromise(getJavaObjectOrThrow(term), getJavaObjectOrThrow(doc))
    return result
  }
}
