import Analyzer from '../analysis/Analyzer'
import JavaBase from '../java/JavaBase';
import { getJava, Callback } from '../java';

// export namespace index {
export default class IndexWriterConfig extends JavaBase {
  // /**
  //  * ()
  //  */
  // new();
  /**
   * (Lorg/apache/lucene/analysis/Analyzer;)
   */
  constructor(analyzer: Analyzer /*org.apache.lucene.analysis.Analyzer*/) {
    super()
    this._java = getJava().newInstanceSync(this.javaClassName, analyzer.java)
  }

  public get javaClassName(): string {
    return 'org.apache.lucene.index.IndexWriterConfig'
  }

  // var writerConfig = java.newInstanceSync("org.apache.lucene.index.IndexWriterConfig", analyzer);


  // public DISABLE_AUTO_FLUSH: number;
  // public DEFAULT_MAX_BUFFERED_DELETE_TERMS: number;
  // public DEFAULT_MAX_BUFFERED_DOCS: number;
  // public DEFAULT_RAM_BUFFER_SIZE_MB: number;
  // public DEFAULT_READER_POOLING: any /*boolean*/;
  // public DEFAULT_RAM_PER_THREAD_HARD_LIMIT_MB: number;
  // public DEFAULT_USE_COMPOUND_FILE_SYSTEM: any /*boolean*/;
  // public DEFAULT_COMMIT_ON_CLOSE: any /*boolean*/;
  // /**
  //  * (Lorg/apache/lucene/codecs/Codec;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setCodec(arg0: any /*org.apache.lucene.codecs.Codec*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Z)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setUseCompoundFile(arg0: any /*boolean*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Z)Lorg/apache/lucene/index/LiveIndexWriterConfig;
  //  */
  // setUseCompoundFile(arg0: any /*boolean*/): any /*org.apache.lucene.index.LiveIndexWriterConfig*/;
  // /**
  //  * ()Lorg/apache/lucene/codecs/Codec;
  //  */
  // getCodec(): any /*org.apache.lucene.codecs.Codec*/;
  // /**
  //  * ()Ljava/lang/String;
  //  */
  // toString(): string;
  // /**
  //  * (Lorg/apache/lucene/search/similarities/Similarity;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setSimilarity(arg0: any /*org.apache.lucene.search.similarities.Similarity*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * ()Lorg/apache/lucene/search/similarities/Similarity;
  //  */
  // getSimilarity(): any /*org.apache.lucene.search.similarities.Similarity*/;
  // /**
  //  * ()Lorg/apache/lucene/index/MergePolicy;
  //  */
  // getMergePolicy(): any /*org.apache.lucene.index.MergePolicy*/;
  // /**
  //  * ()Lorg/apache/lucene/util/InfoStream;
  //  */
  // getInfoStream(): any /*org.apache.lucene.util.InfoStream*/;
  // /**
  //  * ()Lorg/apache/lucene/analysis/Analyzer;
  //  */
  // getAnalyzer(): any /*org.apache.lucene.analysis.Analyzer*/;
  // /**
  //  * ()D
  //  */

  getRAMBufferSizeMBSync(): number {
    return this.java.getRAMBufferSizeMBSync()
  }

  getRAMBufferSizeMBAsync(callback: Callback<number>) {
    this._java.getRAMBufferSizeMBAsync(callback)
  }

  getRAMBufferSizeMBPromise(): Promise<number> {
    return this._java.getRAMBufferSizeMBPromise()
  }




  // /**
  //  * ()Lorg/apache/lucene/index/MergeScheduler;
  //  */
  // getMergeScheduler(): any /*org.apache.lucene.index.MergeScheduler*/;
  // /**
  //  * (Ljava/io/PrintStream;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setInfoStream(arg0: any /*java.io.PrintStream*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Lorg/apache/lucene/util/InfoStream;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setInfoStream(arg0: any /*org.apache.lucene.util.InfoStream*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * ()Lorg/apache/lucene/index/IndexWriterConfig$OpenMode;
  //  */
  // getOpenMode(): any /*org.apache.lucene.index.IndexWriterConfig$OpenMode*/;
  // /**
  //  * ()Lorg/apache/lucene/index/IndexCommit;
  //  */
  // getIndexCommit(): any /*org.apache.lucene.index.IndexCommit*/;
  // /**
  //  * ()Z
  //  */
  // getReaderPooling(): any /*boolean*/;
  // /**
  //  * ()Lorg/apache/lucene/index/IndexDeletionPolicy;
  //  */
  // getIndexDeletionPolicy(): any /*org.apache.lucene.index.IndexDeletionPolicy*/;
  // /**
  //  * ()Lorg/apache/lucene/index/IndexWriter$IndexReaderWarmer;
  //  */
  // getMergedSegmentWarmer(): any /*org.apache.lucene.index.IndexWriter$IndexReaderWarmer*/;
  // /**
  //  * (D)Lorg/apache/lucene/index/LiveIndexWriterConfig;
  //  */
  // setRAMBufferSizeMB(arg0: number): any /*org.apache.lucene.index.LiveIndexWriterConfig*/;
  // /**
  //  * (D)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setRAMBufferSizeMB(arg0: number): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (I)Lorg/apache/lucene/index/LiveIndexWriterConfig;
  //  */
  // setMaxBufferedDocs(arg0: number): any /*org.apache.lucene.index.LiveIndexWriterConfig*/;
  // /**
  //  * (I)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setMaxBufferedDocs(arg0: number): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * ()I
  //  */
  // getMaxBufferedDocs(): number;
  // /**
  //  * (Lorg/apache/lucene/index/MergePolicy;)Lorg/apache/lucene/index/LiveIndexWriterConfig;
  //  */
  // setMergePolicy(arg0: any /*org.apache.lucene.index.MergePolicy*/): any /*org.apache.lucene.index.LiveIndexWriterConfig*/;
  // /**
  //  * (Lorg/apache/lucene/index/MergePolicy;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setMergePolicy(arg0: any /*org.apache.lucene.index.MergePolicy*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Lorg/apache/lucene/index/IndexWriter$IndexReaderWarmer;)Lorg/apache/lucene/index/LiveIndexWriterConfig;
  //  */
  // setMergedSegmentWarmer(arg0: any /*org.apache.lucene.index.IndexWriter$IndexReaderWarmer*/): any /*org.apache.lucene.index.LiveIndexWriterConfig*/;
  // /**
  //  * (Lorg/apache/lucene/index/IndexWriter$IndexReaderWarmer;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setMergedSegmentWarmer(arg0: any /*org.apache.lucene.index.IndexWriter$IndexReaderWarmer*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * ()I
  //  */
  // getRAMPerThreadHardLimitMB(): number;
  // /**
  //  * (Z)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setCheckPendingFlushUpdate(arg0: any /*boolean*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Z)Lorg/apache/lucene/index/LiveIndexWriterConfig;
  //  */
  // setCheckPendingFlushUpdate(arg0: any /*boolean*/): any /*org.apache.lucene.index.LiveIndexWriterConfig*/;
  // /**
  //  * (Lorg/apache/lucene/index/IndexDeletionPolicy;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setIndexDeletionPolicy(arg0: any /*org.apache.lucene.index.IndexDeletionPolicy*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Lorg/apache/lucene/index/IndexWriterConfig$OpenMode;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setOpenMode(arg0: any /*org.apache.lucene.index.IndexWriterConfig$OpenMode*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Z)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setReaderPooling(arg0: any /*boolean*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Lorg/apache/lucene/index/IndexCommit;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setIndexCommit(arg0: any /*org.apache.lucene.index.IndexCommit*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Z)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setCommitOnClose(arg0: any /*boolean*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Lorg/apache/lucene/search/Sort;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setIndexSort(arg0: any /*org.apache.lucene.search.Sort*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Lorg/apache/lucene/index/MergeScheduler;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setMergeScheduler(arg0: any /*org.apache.lucene.index.MergeScheduler*/): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (I)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setRAMPerThreadHardLimitMB(arg0: number): any /*org.apache.lucene.index.IndexWriterConfig*/;
  // /**
  //  * (Ljava/lang/String;)Lorg/apache/lucene/index/IndexWriterConfig;
  //  */
  // setSoftDeletesField(arg0: string): any /*org.apache.lucene.index.IndexWriterConfig*/;
}
// }