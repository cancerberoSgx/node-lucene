import * as lucene from '../../src'
import * as java from 'node-java-rt'
import { rm, test, config } from 'shelljs'

describe('FSDirectory', () => {
  let directory: lucene.store.Directory
  let analyzer: lucene.analysis.Analyzer
  let writerConfig: lucene.index.IndexWriterConfig
  let writer: lucene.index.IndexWriter
  let reader: lucene.index.DirectoryReader
  let searcher: lucene.search.IndexSearcher
  let parser: lucene.queryparser.classic.QueryParser
  let doc1: lucene.document.Document
  let folder: java.nio.file.Path

  it('should create folder in FS after adding docs and closing it', done => {
    folder = java.nio.file.Paths.getSync('.', 'tmp', 'index1')
    rm('-rf', folder.toString())
    expect(test('-d', folder.toString())).toBeFalsy()
    directory = lucene.store.FSDirectory.open(folder)
    analyzer = new lucene.analysis.standard.StandardAnalyzer()
    writerConfig = new lucene.index.IndexWriterConfig(analyzer)
    writerConfig.setOpenMode(lucene.index.IndexWriterConfig$OpenMode.CREATE)
    writer = new lucene.index.IndexWriter(directory, writerConfig)

    doc1 = new lucene.document.Document()
    doc1.addSync(new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES))
    writer.addDocumentSync(doc1)

    writer.closeSync()
    expect(test('-d', folder.toString())).toBeTruthy()

    rm('-rf', folder.toString())
    expect(test('-d', folder.toString())).toBeFalsy()
    done()
  })

  it('should create, add, close, search, open, add more and search again', done => {
    folder = java.nio.file.Paths.getSync('.', 'tmp', 'index2')

    rm('-rf', folder.toString())
    expect(test('-d', folder.toString())).toBeFalsy()
    directory = lucene.store.FSDirectory.open(folder)
    analyzer = new lucene.analysis.standard.StandardAnalyzer()
    writerConfig = new lucene.index.IndexWriterConfig(analyzer)
    writerConfig.setOpenMode(lucene.index.IndexWriterConfig$OpenMode.CREATE)
    writer = new lucene.index.IndexWriter(directory, writerConfig)

    doc1 = new lucene.document.Document()
    doc1.addSync(
      new lucene.document.TextField(
        'content',
        `Thus the man who is responsive to artistic stimuli reacts to the reality of dreams as does the philosopher to the reality of existence; he observes closely, and he enjoys his observation: for it is out of these images that he interprets life, out of these processes that he trains himself for life.`,
        lucene.document.FieldStore.YES
      )
    )
    writer.addDocumentSync(doc1)
    writer.closeSync()
    expect(test('-d', folder.toString())).toBeTruthy()

    reader = lucene.index.DirectoryReader.open(directory)
    searcher = new lucene.search.IndexSearcher(reader)
    parser = new lucene.queryparser.classic.QueryParser('content', analyzer)

    // search
    let topDocs = searcher.searchSync(parser.parseSync('whirling'), 10)
    expect(topDocs.totalHits).toEqual(0)
    topDocs = searcher.searchSync(parser.parseSync('responsive'), 10)
    expect(topDocs.totalHits).toEqual(1)
    reader.close()

    // open the index again on APPEND mode and add another document
    writerConfig = new lucene.index.IndexWriterConfig(analyzer)
    writerConfig.setOpenMode(lucene.index.IndexWriterConfig$OpenMode.APPEND)
    writer = new lucene.index.IndexWriter(directory, writerConfig)

    doc1 = new lucene.document.Document()
    doc1.add(
      new lucene.document.TextField(
        'content',
        `But what changes come upon the weary desert of our culture, so darkly described, when it is touched by the magic of Dionysus!`,
        lucene.document.FieldStore.YES
      )
    )
    writer.addDocumentSync(doc1)
    writer.closeSync()

    expect(() => searcher.searchSync(parser.parseSync('desert'), 10)).toThrow() // this index is closed

    // search again and now we should found both queries
    reader = lucene.index.DirectoryReader.open(directory)
    searcher = new lucene.search.IndexSearcher(reader)

    topDocs = searcher.searchSync(parser.parseSync('desert'), 10)
    expect(topDocs.totalHits).toEqual(1)
    topDocs = searcher.searchSync(parser.parseSync('responsive'), 10)
    expect(topDocs.totalHits).toEqual(1)
    reader.close()

    rm('-rf', folder.toString())
    expect(test('-d', folder.toString())).toBeFalsy()
    done()
  })
})
