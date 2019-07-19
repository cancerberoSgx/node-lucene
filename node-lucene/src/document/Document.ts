import { Callback, Long, JavaBase, lang, util } from 'node-java-rt'
import { IndexableField } from '../index/IndexableField'
import { getLuceneJava } from '../util/getLuceneJava'
import { IndexableFieldBase_ } from '../index/IndexableFieldBase_'

/**
 * Documents are the unit of indexing and search. A Document is a set of fields. Each field has a name and a
 * textual value. A field may be stored with the document, in which case it is returned with search hits on
 * the document. Thus each document should typically contain one or more stored fields which uniquely identify
 * it.
 *
 * Note that fields which are not stored are not available in documents retrieved from the index, e.g. with
 * ScoreDoc.doc or IndexReader.document(int).
 */
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
  removeField(fieldName: string): void {
    return this.removeFieldSync(fieldName)
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
  add(field: IndexableField): void {
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

  getFieldSync(fieldName: string): (IndexableField & lang.Object) | null {
    return Document._buildSync(this._java.getFieldSync(fieldName), new IndexableFieldBase_())
  }
  getField(fieldName: string): (IndexableField & lang.Object) | null {
    return this.getFieldSync(fieldName)
  }
  getFieldAsync(fieldName: string, callback: Callback<(IndexableField & lang.Object) | null>) {
    return Document._buildAsync(this._java.getFieldAsync(fieldName, callback), new IndexableFieldBase_())
  }
  getFieldPromise(fieldName: string): Promise<(IndexableField & lang.Object) | null> {
    return Document._buildPromise(this._java.getFieldPromise(fieldName), new IndexableFieldBase_())
  }

  /**
   * Returns the string value of the field with the given name if any exist in this document, or null.
   */
  get(name: string): string {
    return this._java.getSync(name)
  }
  getSync(name: string): string {
    return this._java.getSync(name)
  }
  async getPromise(name: string): Promise<string> {
    return this._java.getPromise(name)
  }
}
