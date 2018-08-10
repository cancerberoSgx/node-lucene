import { lang } from 'node-java-rt';
import IndexReader from '../index/IndexReader';
import { getLuceneJava } from '../util/getLuceneJava';
import Query from './Query';
import TopDocs from './TopDocs';
/**
 * Implements search over a single IndexReader. Applications usually need only call the inherited
 * search(Query,int) method. For performance reasons, if your index is unchanging, you should share a single
 * IndexSearcher instance across multiple searches instead of creating a new one per-search. If your index has
 * changed and you wish to see the changes reflected in searching, you should use
 * DirectoryReader.openIfChanged(DirectoryReader) to obtain a new reader and then create a new IndexSearcher
 * from that. Also, for low-latency turnaround it's best to use a near-real-time reader
 * (DirectoryReader.open(IndexWriter)). Once you have a new IndexReader, it's relatively cheap to create a new
 * IndexSearcher from it.
 *
 * NOTE: IndexSearcher instances are completely thread safe, meaning multiple threads can call any of its
 * methods, concurrently. If your application requires external synchronization, you should not synchronize on
 * the IndexSearcher instance; use your own (non-Lucene) objects instead.
 */
export default class IndexSearcher extends lang.Object {

  /** Creates a searcher searching the provided index. */
  constructor(r: IndexReader) {
    super()
    this._java = getLuceneJava().newInstanceSync(IndexSearcher._javaClassName(), r._java)
  }

  static _javaClassName(): string {
    return 'org.apache.lucene.search.IndexSearcher'
  }

  /** Finds the top n hits for query. */
  searchSync(query: Query, n: number): TopDocs {
    const javaObject = this._java.searchSync(query._java, n)
    return IndexSearcher._buildSync(javaObject, new TopDocs())
  }
}
