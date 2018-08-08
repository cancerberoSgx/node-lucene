import Analyzer from '../analysis/Analyzer'
import JavaBase from '../java/JavaBase';
import { getJava, Callback, Long } from '../java';
import RAMDirectory from '../store/RAMDirectory';
import IndexWriterConfig from './IndexWriterConfig';

export default class IndexWriter extends JavaBase /* extends org_apache_lucene_index_IndexWriter, java_io_Closeable, org_apache_lucene_index_TwoPhaseCommit, org_apache_lucene_util_Accountable, org_apache_lucene_index_MergePolicy$MergeContext */ {
  /**
   * (Lorg/apache/lucene/analysis/Analyzer;)
   */
  constructor(index: RAMDirectory /* TODO: use super interface org.apache.lucene.store.Directory not this concrete type*/, writerConfig: IndexWriterConfig) {
    super()
    this._java = getJava().newInstanceSync(this.javaClassName, index.java, writerConfig.java)
  }

  get javaClassName(): string {
    return 'org.apache.lucene.index.IndexWriter'
  }

  ramBytesUsedSync(): Long {
    return this.java.ramBytesUsedSync()
  }

  ramBytesUsedAsync(callback: Callback<Long>) {
    this._java.ramBytesUsedAsync(callback)
  }

  ramBytesUsedPromise(): Promise<Long> {
    return this._java.ramBytesUsedPromise()
  }
}





// interface org_apache_lucene_index_IndexWriter extends org_apache_lucene_index_IndexWriter, java_io_Closeable, org_apache_lucene_index_TwoPhaseCommit, org_apache_lucene_util_Accountable, org_apache_lucene_index_MergePolicy$MergeContext {
//   /**
//    * (Lorg/apache/lucene/store/Directory;Lorg/apache/lucene/index/IndexWriterConfig;)
//    */
//   new(arg0: any /*org.apache.lucene.store.Directory*/, arg1: any /*org.apache.lucene.index.IndexWriterConfig*/);
//   public MAX_DOCS: number;
//   public MAX_POSITION: number;
//   public WRITE_LOCK_NAME: string;
//   public SOURCE: string;
//   public SOURCE_MERGE: string;
//   public SOURCE_FLUSH: string;
//   public SOURCE_ADDINDEXES_READERS: string;
//   public MAX_TERM_LENGTH: number;
//   public MAX_STORED_STRING_LENGTH: number;
//   /**
//    * ()J
//    */
//   ramBytesUsed(): number;
//   /**
//    * ()Lorg/apache/lucene/store/Directory;
//    */
//   getDirectory(): any /*org.apache.lucene.store.Directory*/;
//   /**
//    * ()I
//    */
//   maxDoc(): number;
//   /**
//    * ()Z
//    */
//   hasDeletions(): any /*boolean*/;
//   /**
//    * ()I
//    */
//   numDocs(): number;
//   /**
//    * ()V
//    */
//   flush(): any /*void*/;
//   /**
//    * ()V
//    */
//   close(): any /*void*/;
//   /**
//    * (Lorg/apache/lucene/index/MergePolicy$OneMerge;)V
//    */
//   merge(arg0: any /*org.apache.lucene.index.MergePolicy$OneMerge*/): any /*void*/;
//   /**
//    * ()Z
//    */
//   isOpen(): any /*boolean*/;
//   /**
//    * (Lorg/apache/lucene/index/SegmentCommitInfo;)I
//    */
//   numDeletedDocs(arg0: any /*org.apache.lucene.index.SegmentCommitInfo*/): number;
//   /**
//    * (Lorg/apache/lucene/index/SegmentCommitInfo;)I
//    */
//   numDeletesToMerge(arg0: any /*org.apache.lucene.index.SegmentCommitInfo*/): number;
//   /**
//    * ()Lorg/apache/lucene/index/LiveIndexWriterConfig;
//    */
//   getConfig(): any /*org.apache.lucene.index.LiveIndexWriterConfig*/;
//   /**
//    * ()V
//    */
//   maybeMerge(): any /*void*/;
//   /**
//    * ()J
//    */
//   commit(): number;
//   /**
//    * ()Lorg/apache/lucene/util/InfoStream;
//    */
//   getInfoStream(): any /*org.apache.lucene.util.InfoStream*/;
//   /**
//    * ()Lorg/apache/lucene/analysis/Analyzer;
//    */
//   getAnalyzer(): any /*org.apache.lucene.analysis.Analyzer*/;
//   /**
//    * (J)V
//    */
//   advanceSegmentInfosVersion(arg0: number): any /*void*/;
//   /**
//    * (Ljava/lang/Iterable;)J
//    */
//   addDocument(arg0: any /*java.lang.Iterable*/): number;
//   /**
//    * (Ljava/lang/Iterable;)J
//    */
//   addDocuments(arg0: any /*java.lang.Iterable*/): number;
//   /**
//    * (Lorg/apache/lucene/index/Term;Ljava/lang/Iterable;)J
//    */
//   updateDocuments(arg0: any /*org.apache.lucene.index.Term*/, arg1: any /*java.lang.Iterable*/): number;
//   /**
//    * (Lorg/apache/lucene/index/Term;Ljava/lang/Iterable;[Lorg/apache/lucene/document/Field;)J
//    */
//   softUpdateDocuments(arg0: any /*org.apache.lucene.index.Term*/, arg1: any /*java.lang.Iterable*/, arg2: any /*org.apache.lucene.document.Field[]*/): number;
//   /**
//    * (Lorg/apache/lucene/index/IndexReader;I)J
//    */
//   tryDeleteDocument(arg0: any /*org.apache.lucene.index.IndexReader*/, arg1: number): number;
//   /**
//    * (Lorg/apache/lucene/index/IndexReader;I[Lorg/apache/lucene/document/Field;)J
//    */
//   tryUpdateDocValue(arg0: any /*org.apache.lucene.index.IndexReader*/, arg1: number, arg2: any /*org.apache.lucene.document.Field[]*/): number;
//   /**
//    * ([Lorg/apache/lucene/search/Query;)J
//    */
//   deleteDocuments(arg0: any /*org.apache.lucene.search.Query[]*/): number;
//   /**
//    * ([Lorg/apache/lucene/index/Term;)J
//    */
//   deleteDocuments(arg0: any /*org.apache.lucene.index.Term[]*/): number;
//   /**
//    * (Lorg/apache/lucene/index/Term;Ljava/lang/Iterable;)J
//    */
//   updateDocument(arg0: any /*org.apache.lucene.index.Term*/, arg1: any /*java.lang.Iterable*/): number;
//   /**
//    * (Lorg/apache/lucene/index/Term;Ljava/lang/Iterable;[Lorg/apache/lucene/document/Field;)J
//    */
//   softUpdateDocument(arg0: any /*org.apache.lucene.index.Term*/, arg1: any /*java.lang.Iterable*/, arg2: any /*org.apache.lucene.document.Field[]*/): number;
//   /**
//    * (Lorg/apache/lucene/index/Term;Ljava/lang/String;J)J
//    */
//   updateNumericDocValue(arg0: any /*org.apache.lucene.index.Term*/, arg1: string, arg2: number): number;
//   /**
//    * (Lorg/apache/lucene/index/Term;Ljava/lang/String;Lorg/apache/lucene/util/BytesRef;)J
//    */
//   updateBinaryDocValue(arg0: any /*org.apache.lucene.index.Term*/, arg1: string, arg2: any /*org.apache.lucene.util.BytesRef*/): number;
//   /**
//    * (Lorg/apache/lucene/index/Term;[Lorg/apache/lucene/document/Field;)J
//    */
//   updateDocValues(arg0: any /*org.apache.lucene.index.Term*/, arg1: any /*org.apache.lucene.document.Field[]*/): number;
//   /**
//    * ()Ljava/util/Set;
//    */
//   getFieldNames(): any /*java.util.Set*/;
//   /**
//    * (IZ)V
//    */
//   forceMerge(arg0: number, arg1: any /*boolean*/): any /*void*/;
//   /**
//    * (I)V
//    */
//   forceMerge(arg0: number): any /*void*/;
//   /**
//    * ()V
//    */
//   forceMergeDeletes(): any /*void*/;
//   /**
//    * (Z)V
//    */
//   forceMergeDeletes(arg0: any /*boolean*/): any /*void*/;
//   /**
//    * ()Ljava/util/Set;
//    */
//   getMergingSegments(): any /*java.util.Set*/;
//   /**
//    * ()Lorg/apache/lucene/index/MergePolicy$OneMerge;
//    */
//   getNextMerge(): any /*org.apache.lucene.index.MergePolicy$OneMerge*/;
//   /**
//    * ()Z
//    */
//   hasPendingMerges(): any /*boolean*/;
//   /**
//    * ()V
//    */
//   rollback(): any /*void*/;
//   /**
//    * ()J
//    */
//   deleteAll(): number;
//   /**
//    * ([Lorg/apache/lucene/index/CodecReader;)J
//    */
//   addIndexes(arg0: any /*org.apache.lucene.index.CodecReader[]*/): number;
//   /**
//    * ([Lorg/apache/lucene/store/Directory;)J
//    */
//   addIndexes(arg0: any /*org.apache.lucene.store.Directory[]*/): number;
//   /**
//    * ()J
//    */
//   prepareCommit(): number;
//   /**
//    * ()Z
//    */
//   flushNextBuffer(): any /*boolean*/;
//   /**
//    * (Ljava/lang/Iterable;)V
//    */
//   setLiveCommitData(arg0: any /*java.lang.Iterable*/): any /*void*/;
//   /**
//    * (Ljava/lang/Iterable;Z)V
//    */
//   setLiveCommitData(arg0: any /*java.lang.Iterable*/, arg1: any /*boolean*/): any /*void*/;
//   /**
//    * ()Ljava/lang/Iterable;
//    */
//   getLiveCommitData(): any /*java.lang.Iterable*/;
//   /**
//    * ()Z
//    */
//   hasUncommittedChanges(): any /*boolean*/;
//   /**
//    * ()I
//    */
//   numRamDocs(): number;
//   /**
//    * ()Ljava/lang/Throwable;
//    */
//   getTragicException(): any /*java.lang.Throwable*/;
//   /**
//    * ()V
//    */
//   deleteUnusedFiles(): any /*void*/;
//   /**
//    * (Lorg/apache/lucene/index/SegmentInfos;)V
//    */
//   incRefDeleter(arg0: any /*org.apache.lucene.index.SegmentInfos*/): any /*void*/;
//   /**
//    * (Lorg/apache/lucene/index/SegmentInfos;)V
//    */
//   decRefDeleter(arg0: any /*org.apache.lucene.index.SegmentInfos*/): any /*void*/;
//   /**
//    * ()J
//    */
//   getMaxCompletedSequenceNumber(): number;
// }

