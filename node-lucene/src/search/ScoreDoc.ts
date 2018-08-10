import { lang } from 'node-java-rt';
export default class ScoreDoc extends lang.Object {

  /** A hit document's number. */
  get doc(): number {
    return this._java.doc
  }

  /** The score of this document for the query.*/
  get score(): number {
    return this._java.doc
  }

  get shardIndex(): number {
    return this._java.shardIndex
  }
}
