import { Callback, Long, JavaBase, lang, getJava, util } from 'node-java-rt'
// import FieldStore from './FieldStore';
// import { IndexableField } from '../index/IndexableField';

export default class IndexSearcher extends lang.Object {

  constructor() {
    super()
    this._java = getJava().newInstanceSync(IndexSearcher._javaClassName())
  }

  static _javaClassName(): string {
    return 'org.apache.lucene.search.IndexSearcher'
  }

}

  //   interface org_apache_lucene_search_IndexSearcher extends org_apache_lucene_search_IndexSearcher {
  //     /**
  //      * (Lorg/apache/lucene/index/IndexReaderContext;)
  //      */
  //     new(arg0: any /*org.apache.lucene.index.IndexReaderContext*/);
  //     /**
  //      * (Lorg/apache/lucene/index/IndexReaderContext;Ljava/util/concurrent/ExecutorService;)
  //      */
  //     new(arg0: any /*org.apache.lucene.index.IndexReaderContext*/, arg1: any /*java.util.concurrent.ExecutorService*/);
  //     /**
  //      * (Lorg/apache/lucene/index/IndexReader;Ljava/util/concurrent/ExecutorService;)
  //      */
  //     new(arg0: any /*org.apache.lucene.index.IndexReader*/, arg1: any /*java.util.concurrent.ExecutorService*/);
  //     /**
  //      * (Lorg/apache/lucene/index/IndexReader;)
  //      */
  //     new(arg0: any /*org.apache.lucene.index.IndexReader*/);
  //     /**
  //      * ()Lorg/apache/lucene/index/IndexReader;
  //      */
  //     getIndexReader(): any /*org.apache.lucene.index.IndexReader*/;
  //     /**
  //      * (ILorg/apache/lucene/index/StoredFieldVisitor;)V
  //      */
  //     doc(arg0: number, arg1: any /*org.apache.lucene.index.StoredFieldVisitor*/): any /*void*/;
  //     /**
  //      * (I)Lorg/apache/lucene/document/Document;
  //      */
  //     doc(arg0: number): any /*org.apache.lucene.document.Document*/;
  //     /**
  //      * (ILjava/util/Set;)Lorg/apache/lucene/document/Document;
  //      */
  //     doc(arg0: number, arg1: any /*java.util.Set*/): any /*org.apache.lucene.document.Document*/;
  //     /**
  //      * (Lorg/apache/lucene/search/Query;)I
  //      */
  //     count(arg0: any /*org.apache.lucene.search.Query*/): number;
  //     /**
  //      * ()Ljava/lang/String;
  //      */
  //     toString(): string;
  //     /**
  //      * (Lorg/apache/lucene/search/Query;ILorg/apache/lucene/search/Sort;)Lorg/apache/lucene/search/TopFieldDocs;
  //      */
  //     search(arg0: any /*org.apache.lucene.search.Query*/, arg1: number, arg2: any /*org.apache.lucene.search.Sort*/): any /*org.apache.lucene.search.TopFieldDocs*/;
  //     /**
  //      * (Lorg/apache/lucene/search/Query;ILorg/apache/lucene/search/Sort;ZZ)Lorg/apache/lucene/search/TopFieldDocs;
  //      */
  //     search(arg0: any /*org.apache.lucene.search.Query*/, arg1: number, arg2: any /*org.apache.lucene.search.Sort*/, arg3: any /*boolean*/, arg4: any /*boolean*/): any /*org.apache.lucene.search.TopFieldDocs*/;
  //     /**
  //      * (Lorg/apache/lucene/search/Query;Lorg/apache/lucene/search/Collector;)V
  //      */
  //     search(arg0: any /*org.apache.lucene.search.Query*/, arg1: any /*org.apache.lucene.search.Collector*/): any /*void*/;
  //     /**
  //      * (Lorg/apache/lucene/search/Query;I)Lorg/apache/lucene/search/TopDocs;
  //      */
  //     search(arg0: any /*org.apache.lucene.search.Query*/, arg1: number): any /*org.apache.lucene.search.TopDocs*/;
  //     /**
  //      * (Lorg/apache/lucene/search/Query;Lorg/apache/lucene/search/CollectorManager;)Ljava/lang/Object;
  //      */
  //     search<C, T>(arg0: any /*org.apache.lucene.search.Query*/, arg1: any /*org.apache.lucene.search.CollectorManager*/): any /*java.lang.Object*/;
  //     /**
  //      * (Lorg/apache/lucene/search/Query;)Lorg/apache/lucene/search/Query;
  //      */
  //     rewrite(arg0: any /*org.apache.lucene.search.Query*/): any /*org.apache.lucene.search.Query*/;
  //     /**
  //      * (Lorg/apache/lucene/search/Query;ZF)Lorg/apache/lucene/search/Weight;
  //      */
  //     createWeight(arg0: any /*org.apache.lucene.search.Query*/, arg1: any /*boolean*/, arg2: number): any /*org.apache.lucene.search.Weight*/;
  //     /**
  //      * (Lorg/apache/lucene/search/Query;I)Lorg/apache/lucene/search/Explanation;
  //      */
  //     explain(arg0: any /*org.apache.lucene.search.Query*/, arg1: number): any /*org.apache.lucene.search.Explanation*/;
  //     /**
  //      * ()Lorg/apache/lucene/search/similarities/Similarity;
  //      */
  //     getDefaultSimilarity(): any /*org.apache.lucene.search.similarities.Similarity*/;
  //     /**
  //      * ()Lorg/apache/lucene/search/QueryCache;
  //      */
  //     getDefaultQueryCache(): any /*org.apache.lucene.search.QueryCache*/;
  //     /**
  //      * (Lorg/apache/lucene/search/QueryCache;)V
  //      */
  //     setDefaultQueryCache(arg0: any /*org.apache.lucene.search.QueryCache*/): any /*void*/;
  //     /**
  //      * ()Lorg/apache/lucene/search/QueryCachingPolicy;
  //      */
  //     getDefaultQueryCachingPolicy(): any /*org.apache.lucene.search.QueryCachingPolicy*/;
  //     /**
  //      * (Lorg/apache/lucene/search/QueryCachingPolicy;)V
  //      */
  //     setDefaultQueryCachingPolicy(arg0: any /*org.apache.lucene.search.QueryCachingPolicy*/): any /*void*/;
  //     /**
  //      * (Lorg/apache/lucene/search/QueryCache;)V
  //      */
  //     setQueryCache(arg0: any /*org.apache.lucene.search.QueryCache*/): any /*void*/;
  //     /**
  //      * ()Lorg/apache/lucene/search/QueryCache;
  //      */
  //     getQueryCache(): any /*org.apache.lucene.search.QueryCache*/;
  //     /**
  //      * (Lorg/apache/lucene/search/QueryCachingPolicy;)V
  //      */
  //     setQueryCachingPolicy(arg0: any /*org.apache.lucene.search.QueryCachingPolicy*/): any /*void*/;
  //     /**
  //      * ()Lorg/apache/lucene/search/QueryCachingPolicy;
  //      */
  //     getQueryCachingPolicy(): any /*org.apache.lucene.search.QueryCachingPolicy*/;
  //     /**
  //      * (Lorg/apache/lucene/search/similarities/Similarity;)V
  //      */
  //     setSimilarity(arg0: any /*org.apache.lucene.search.similarities.Similarity*/): any /*void*/;
  //     /**
  //      * (Z)Lorg/apache/lucene/search/similarities/Similarity;
  //      */
  //     getSimilarity(arg0: any /*boolean*/): any /*org.apache.lucene.search.similarities.Similarity*/;
  //     /**
  //      * (Lorg/apache/lucene/search/ScoreDoc;Lorg/apache/lucene/search/Query;ILorg/apache/lucene/search/Sort;)Lorg/apache/lucene/search/TopDocs;
  //      */
  //     searchAfter(arg0: any /*org.apache.lucene.search.ScoreDoc*/, arg1: any /*org.apache.lucene.search.Query*/, arg2: number, arg3: any /*org.apache.lucene.search.Sort*/): any /*org.apache.lucene.search.TopDocs*/;
  //     /**
  //      * (Lorg/apache/lucene/search/ScoreDoc;Lorg/apache/lucene/search/Query;ILorg/apache/lucene/search/Sort;ZZ)Lorg/apache/lucene/search/TopFieldDocs;
  //      */
  //     searchAfter(arg0: any /*org.apache.lucene.search.ScoreDoc*/, arg1: any /*org.apache.lucene.search.Query*/, arg2: number, arg3: any /*org.apache.lucene.search.Sort*/, arg4: any /*boolean*/, arg5: any /*boolean*/): any /*org.apache.lucene.search.TopFieldDocs*/;
  //     /**
  //      * (Lorg/apache/lucene/search/ScoreDoc;Lorg/apache/lucene/search/Query;I)Lorg/apache/lucene/search/TopDocs;
  //      */
  //     searchAfter(arg0: any /*org.apache.lucene.search.ScoreDoc*/, arg1: any /*org.apache.lucene.search.Query*/, arg2: number): any /*org.apache.lucene.search.TopDocs*/;
  //     /**
  //      * (Lorg/apache/lucene/search/Query;Z)Lorg/apache/lucene/search/Weight;
  //      */
  //     createNormalizedWeight(arg0: any /*org.apache.lucene.search.Query*/, arg1: any /*boolean*/): any /*org.apache.lucene.search.Weight*/;
  //     /**
  //      * ()Lorg/apache/lucene/index/IndexReaderContext;
  //      */
  //     getTopReaderContext(): any /*org.apache.lucene.index.IndexReaderContext*/;
  //     /**
  //      * (Lorg/apache/lucene/index/Term;Lorg/apache/lucene/index/TermContext;)Lorg/apache/lucene/search/TermStatistics;
  //      */
  //     termStatistics(arg0: any /*org.apache.lucene.index.Term*/, arg1: any /*org.apache.lucene.index.TermContext*/): any /*org.apache.lucene.search.TermStatistics*/;
  //     /**
  //      * (Ljava/lang/String;)Lorg/apache/lucene/search/CollectionStatistics;
  //      */
  //     collectionStatistics(arg0: string): any /*org.apache.lucene.search.CollectionStatistics*/;
  // }