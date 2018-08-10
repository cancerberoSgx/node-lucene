
import { Callback, Long, JavaBase, getJava, IJavaBase, lang, getJavaObjectOrThrow } from 'node-java-rt';
import RAMDirectory from '../store/RAMDirectory';
import IndexWriterConfig from './IndexWriterConfig';

export default class DirectoryReader extends lang.Object /* extends org_apache_lucene_index_IndexWriter, java_io_Closeable, org_apache_lucene_index_TwoPhaseCommit, org_apache_lucene_util_Accountable, org_apache_lucene_index_MergePolicy$MergeContext */ {

  constructor() {
    super()
    this._java = getJava().newInstanceSync(DirectoryReader._javaClassName())
  }

  static _javaClassName(): string {
    return 'org.apache.lucene.index.DirectoryReader'
  }
}


// interface org_apache_lucene_index_DirectoryReader extends org_apache_lucene_index_DirectoryReader {
//   /**
//    * (Lorg/apache/lucene/store/Directory;[Lorg/apache/lucene/index/LeafReader;)
//    */
//   new(arg0: any /*org.apache.lucene.store.Directory*/, arg1: any /*org.apache.lucene.index.LeafReader[]*/);
//   /**
//    * ()Lorg/apache/lucene/store/Directory;
//    */
//   directory(): any /*org.apache.lucene.store.Directory*/;
//   /**
//    * (Lorg/apache/lucene/store/Directory;)Lorg/apache/lucene/index/DirectoryReader;
//    */
//   open(arg0: any /*org.apache.lucene.store.Directory*/): any /*org.apache.lucene.index.DirectoryReader*/;
//   /**
//    * (Lorg/apache/lucene/index/IndexWriter;ZZ)Lorg/apache/lucene/index/DirectoryReader;
//    */
//   open(arg0: any /*org.apache.lucene.index.IndexWriter*/, arg1: any /*boolean*/, arg2: any /*boolean*/): any /*org.apache.lucene.index.DirectoryReader*/;
//   /**
//    * (Lorg/apache/lucene/index/IndexCommit;)Lorg/apache/lucene/index/DirectoryReader;
//    */
//   open(arg0: any /*org.apache.lucene.index.IndexCommit*/): any /*org.apache.lucene.index.DirectoryReader*/;
//   /**
//    * (Lorg/apache/lucene/index/IndexWriter;)Lorg/apache/lucene/index/DirectoryReader;
//    */
//   open(arg0: any /*org.apache.lucene.index.IndexWriter*/): any /*org.apache.lucene.index.DirectoryReader*/;
//   /**
//    * ()Z
//    */
//   isCurrent(): any /*boolean*/;
//   /**
//    * (Lorg/apache/lucene/store/Directory;)Z
//    */
//   indexExists(arg0: any /*org.apache.lucene.store.Directory*/): any /*boolean*/;
//   /**
//    * ()Lorg/apache/lucene/index/IndexCommit;
//    */
//   getIndexCommit(): any /*org.apache.lucene.index.IndexCommit*/;
//   /**
//    * ()J
//    */
//   getVersion(): number;
//   /**
//    * (Lorg/apache/lucene/store/Directory;)Ljava/util/List;
//    */
//   listCommits(arg0: any /*org.apache.lucene.store.Directory*/): any /*java.util.List*/;
//   /**
//    * (Lorg/apache/lucene/index/DirectoryReader;)Lorg/apache/lucene/index/DirectoryReader;
//    */
//   openIfChanged(arg0: any /*org.apache.lucene.index.DirectoryReader*/): any /*org.apache.lucene.index.DirectoryReader*/;
//   /**
//    * (Lorg/apache/lucene/index/DirectoryReader;Lorg/apache/lucene/index/IndexWriter;Z)Lorg/apache/lucene/index/DirectoryReader;
//    */
//   openIfChanged(arg0: any /*org.apache.lucene.index.DirectoryReader*/, arg1: any /*org.apache.lucene.index.IndexWriter*/, arg2: any /*boolean*/): any /*org.apache.lucene.index.DirectoryReader*/;
//   /**
//    * (Lorg/apache/lucene/index/DirectoryReader;Lorg/apache/lucene/index/IndexCommit;)Lorg/apache/lucene/index/DirectoryReader;
//    */
//   openIfChanged(arg0: any /*org.apache.lucene.index.DirectoryReader*/, arg1: any /*org.apache.lucene.index.IndexCommit*/): any /*org.apache.lucene.index.DirectoryReader*/;
//   /**
//    * (Lorg/apache/lucene/index/DirectoryReader;Lorg/apache/lucene/index/IndexWriter;)Lorg/apache/lucene/index/DirectoryReader;
//    */
//   openIfChanged(arg0: any /*org.apache.lucene.index.DirectoryReader*/, arg1: any /*org.apache.lucene.index.IndexWriter*/): any /*org.apache.lucene.index.DirectoryReader*/;
// }