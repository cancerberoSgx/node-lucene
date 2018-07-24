import {RAMDirectory, StandardAnalyzer, IndexWriterConfig, IndexWriter, QueryParser, Document, DirectoryReader, FieldStore} from 'lucene'

const index = new RAMDirectory()
const analyzer = new StandardAnalyzer()
const writerConfig = new IndexWriterConfig(analyzer)
const writer = new IndexWriter(index, writerConfig)
const queryParser = new QueryParser("content", analyzer)

writer.addDocumentSync(createDocument("Theodore Roosevelt",
  "It behooves every man to remember that the work of the " +
  "critic, is of altogether secondary importance, and that, " +
  "in the end, progress is accomplished by the man who does " +
  "things."));
writer.addDocumentSync(createDocument("Friedrich Hayek",
  "The case for individual freedom rests largely on the " +
  "recognition of the inevitable and universal ignorance " +
  "of all of us concerning a great many of the factors on " +
  "which the achievements of our ends and welfare depend."));
writer.addDocumentSync(createDocument("Ayn Rand",
  "There is nothing to take a man's freedom away from " +
  "him, save other men. To be free, a man must be free " +
  "of his brothers."));
writer.addDocumentSync(createDocument("Mohandas Gandhi",
  "Freedom is not worth having if it does not connote " +
  "freedom to err."));

writer.closeSync();

var searcher = new IndexSearcher(DirectoryReader.open(index))

search(searcher, "freedom");
search(searcher, "free");
search(searcher, "progress or achievements");

function createDocument(title, content) {
  // var fieldStoreYes = java.callStaticMethodSync("org.apache.lucene.document.Field$Store", "valueOf", "YES");
  var doc = java.newInstanceSync("org.apache.lucene.document.Document");
  doc.addSync(java.newInstanceSync("org.apache.lucene.document.TextField", "title", title, fieldStoreYes));
  doc.addSync(java.newInstanceSync("org.apache.lucene.document.TextField", "content", content, FieldStore.YES));
  return doc;
}



function search(searcher, queryString) {
  var query = queryParser.parseSync(queryString);
  var topDocs = searcher.searchSync(query, 10);

  console.log("Found " + topDocs.totalHits + " hits for query \"" + queryString + "\".");
  var scoreDocs = topDocs.scoreDocs;
  for(var i=0; i<topDocs.scoreDocs.length; i++) {
    var docId = scoreDocs[i].doc;
    var doc = searcher.docSync(docId);
    console.log("  " + (i + 1) + ". " + doc.getSync("title"));
  }
}

