import * as lucene from '../../src'
import * as java from 'node-java-rt'
import { rm, test } from 'shelljs';

describe('FSDirectory', () => {

  it('should create folder in FS after adding docs and closing it', done => {
    const indexFolder = java.nio.file.Paths.getSync('.', 'tmp', 'index1')

    rm('-rf', indexFolder.toString())
    expect(test('-d', indexFolder.toString())).toBeFalsy()

    let directory = lucene.store.FSDirectory.open(indexFolder)
    let analyzer = new lucene.analysis.standard.StandardAnalyzer()
    let writerConfig = new lucene.index.IndexWriterConfig(analyzer)
    writerConfig.setOpenMode(lucene.index.IndexWriterConfig$OpenMode.CREATE_OR_APPEND)

    const writer = new lucene.index.IndexWriter(directory, writerConfig);

    const doc1 = new lucene.document.Document()
    const field1 = new lucene.document.TextField('content', 'hello world', lucene.document.FieldStore.YES)

    doc1.addSync(field1)
    writer.addDocumentSync(doc1)

    writer.closeSync()

    expect(test('-d', indexFolder.toString())).toBeTruthy()
    rm('-rf', indexFolder.toString())
    expect(test('-d', indexFolder.toString())).toBeFalsy()

    done()
  })

})