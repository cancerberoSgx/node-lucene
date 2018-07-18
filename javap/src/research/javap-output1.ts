// export const output1 = `Compiled from "RAMDirectory.java"
// public class org.apache.lucene.store.RAMDirectory extends org.apache.lucene.store.BaseDirectory implements org.apache.lucene.util.Accountable {
//   protected final java.util.Map<java.lang.String, org.apache.lucene.store.RAMFile> fileMap;
//     descriptor: Ljava/util/Map;
//   protected final java.util.concurrent.atomic.AtomicLong sizeInBytes;
//     descriptor: Ljava/util/concurrent/atomic/AtomicLong;
//   public org.apache.lucene.store.RAMDirectory();
//     descriptor: ()V

//   public org.apache.lucene.store.RAMDirectory(org.apache.lucene.store.LockFactory);
//     descriptor: (Lorg/apache/lucene/store/LockFactory;)V

//   public org.apache.lucene.store.RAMDirectory(org.apache.lucene.store.FSDirectory, org.apache.lucene.store.IOContext) throws java.io.IOException;
//     descriptor: (Lorg/apache/lucene/store/FSDirectory;Lorg/apache/lucene/store/IOContext;)V

//   public final java.lang.String[] listAll();
//     descriptor: ()[Ljava/lang/String;

//   public final boolean fileNameExists(java.lang.String);
//     descriptor: (Ljava/lang/String;)Z

//   public final long fileLength(java.lang.String) throws java.io.IOException;
//     descriptor: (Ljava/lang/String;)J

//   public final long ramBytesUsed();
//     descriptor: ()J

//   public java.util.Collection<org.apache.lucene.util.Accountable> getChildResources();
//     descriptor: ()Ljava/util/Collection;

//   public void deleteFile(java.lang.String) throws java.io.IOException;
//     descriptor: (Ljava/lang/String;)V

//   public org.apache.lucene.store.IndexOutput createOutput(java.lang.String, org.apache.lucene.store.IOContext) throws java.io.IOException;
//     descriptor: (Ljava/lang/String;Lorg/apache/lucene/store/IOContext;)Lorg/apache/lucene/store/IndexOutput;

//   public org.apache.lucene.store.IndexOutput createTempOutput(java.lang.String, java.lang.String, org.apache.lucene.store.IOContext) throws java.io.IOException;
//     descriptor: (Ljava/lang/String;Ljava/lang/String;Lorg/apache/lucene/store/IOContext;)Lorg/apache/lucene/store/IndexOutput;

//   protected org.apache.lucene.store.RAMFile newRAMFile();
//     descriptor: ()Lorg/apache/lucene/store/RAMFile;

//   public void sync(java.util.Collection<java.lang.String>) throws java.io.IOException;
//     descriptor: (Ljava/util/Collection;)V

//   public void rename(java.lang.String, java.lang.String) throws java.io.IOException;
//     descriptor: (Ljava/lang/String;Ljava/lang/String;)V

//   public void syncMetaData() throws java.io.IOException;
//     descriptor: ()V

//   public org.apache.lucene.store.IndexInput openInput(java.lang.String, org.apache.lucene.store.IOContext) throws java.io.IOException;
//     descriptor: (Ljava/lang/String;Lorg/apache/lucene/store/IOContext;)Lorg/apache/lucene/store/IndexInput;

//   public void close();
//     descriptor: ()V
// }
// `