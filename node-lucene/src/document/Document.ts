import { Callback, Long, JavaBase, lang, util } from 'node-java-rt'
import { IndexableField } from '../index/IndexableField'
import { getLuceneJava } from '../util/getLuceneJava'
import { IndexableFieldBase_ } from '../index/IndexableFieldBase_';

export default class Document extends lang.Object implements lang.Iterable<IndexableField> {

  static _javaClassName(): string {
    return 'org.apache.lucene.document.Document'
  }

  constructor() {
    super()
    this._java = getLuceneJava().newInstanceSync(Document._javaClassName())
  }

  removeFieldSync(fieldName: string): void {
    return this._java.removeFieldSync(fieldName)
  }

  removeFieldAsync(fieldName: string, callback: Callback<void>) {
    this._java.removeFieldAsync(fieldName, callback)
  }

  removeFieldPromise(fieldName: string): Promise<void> {
    return this._java.removeFieldPromise(fieldName)
  }

  addSync(field: IndexableField): void {
    return this._java.addSync(Document._getNative(field))
  }

  addAsync(field: IndexableField, callback: Callback<void>) {
    this._java.addAsync(Document._getNative(field), callback)
  }

  addPromise(field: IndexableField): Promise<void> {
    return this._java.addPromise(Document._getNative(field))
  }

  iterator(): util.Iterator<IndexableField> {
    throw new Error('not implemented')
  }

  getFieldSync(field: string): (IndexableField & lang.Object) | null {
    return Document._buildSync(this._java.getFieldSync(field), new IndexableFieldBase_())
  }

  getFieldAsync(field: string, callback: Callback<(IndexableField & lang.Object) | null>) {
    return Document._buildAsync(this._java.getFieldAsync(field, callback), new IndexableFieldBase_())
  }

  getFieldPromise(field: string): Promise<(IndexableField & lang.Object) | null> {
    return Document._buildPromise(this._java.getFieldPromise(field), new IndexableFieldBase_())
  }

}