import { lang, Long } from 'node-java-rt';
import ScoreDoc from './ScoreDoc';
export default class TopDocs extends lang.Object {

  /** The total number of hits for the query. */
  get totalHits(): Long {
    return this._java.totalHits
  }
  /** The top hits for the query. */
  get scoreDocs(): ScoreDoc[] {
    return this._java.scoreDocs
  }
}
