import * as lucene from '../../src'
import Directory from '../../src/store/Directory';
import FSDirectory from '../../src/store/FSDirectory';
import Paths from 'node-java-rt/dist/src/java/nio/file/Paths';
import IndexWriterConfig$OpenMode from '../../src/index/IndexWriterConfig$OpenMode';
import IndexWriter from '../../src/index/IndexWriter';
import { rm, test } from 'shelljs';

describe('FSDirectory', () => {


  it('should create folder in FS after adding docs and closing it', done => {

    rm('-rf', Paths.getSync('.', 'tmp', 'index1').toString())
    expect(test('-d', Paths.getSync('.', 'tmp', 'index1').toString())).toBeFalsy()

    let directory: Directory = FSDirectory.open(Paths.getSync('.', 'tmp', 'index1'))
    let analyzer = new lucene.analysis.standard.StandardAnalyzer()
    let writerConfig = new lucene.index.IndexWriterConfig(analyzer)
    writerConfig.setOpenMode(IndexWriterConfig$OpenMode.CREATE_OR_APPEND)

    const writer: IndexWriter = new IndexWriter(directory, writerConfig);

    const doc1 = new lucene.document.Document()
    const field1 = new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES)

    const doc2 = new lucene.document.Document()
    const field2 = new lucene.document.TextField('content', 'hi world', lucene.document.FieldStore.YES)

    doc1.addSync(field1)
    writer.addDocumentSync(doc1)
    doc2.addSync(field2)
    writer.addDocumentSync(doc2)

    writer.closeSync()
    expect(test('-d', Paths.getSync('.', 'tmp', 'index1').toString())).toBeTruthy()
    rm('-rf', Paths.getSync('.', 'tmp', 'index1').toString())
    expect(test('-d', Paths.getSync('.', 'tmp', 'index1').toString())).toBeFalsy()

    done()
  })

  // })
})