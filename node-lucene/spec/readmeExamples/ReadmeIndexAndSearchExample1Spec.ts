import * as lucene from '../../src'

describe('ReadmeIndexAndSearchExample1Spec', () => {
  describe('Indexing and searching synchronously', () => {
    it('should be able to index a couple of documents and then search using synchronous operations', () => {
      // We will be indexing the following "books":
      const books = [
        {
          content:
            'The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents.',
          title: 'One Hundred Years of Solitude',
          author: 'Gabriel Garcia Marquez'
        },
        {
          content: 'It was a bright cold day in April, and the clocks were striking thirteen.',
          title: '1984',
          author: 'George Orwell'
        },
        {
          content: 'Happy families are all alike; every unhappy family is unhappy in its own way.',
          author: 'Leo Tolstoy',
          title: 'Anna Karenina'
        },
        {
          content: 'True! – nervous – very, very nervous I had been and am; but why will you say that I am mad?',
          author: 'Edgar Allan Poe',
          title: 'The Tell-Tale Heart'
        }
      ]

      // before using this library make sure you call the following function for loading lucene .jars in Java classpath:
      lucene.initialize()

      // create lucene index in memory:
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      const writerConfig = new lucene.index.IndexWriterConfig(analyzer)
      const index = new lucene.store.RAMDirectory()
      const writer = new lucene.index.IndexWriter(index, writerConfig)

      // add the documents:
      books.forEach(book => {
        const doc = new lucene.document.Document()
        doc.add(new lucene.document.TextField('content', book.content, lucene.document.FieldStore.YES))
        doc.add(new lucene.document.TextField('author', book.author, lucene.document.FieldStore.YES))
        doc.add(new lucene.document.TextField('title', book.title, lucene.document.FieldStore.YES))
        writer.addDocument(doc)
      })

      // because we finished adding documents we close the index so we can start searching:
      writer.close()

      // now we want to search so we create a directory reader, index searcher and a query parser
      const directory = lucene.index.DirectoryReader.open(index)
      const searcher = new lucene.search.IndexSearcher(directory)
      const parser = new lucene.queryparser.classic.QueryParser('content', analyzer)

      // searching for 'phrase does not exists' should return 0 results
      let topDocs = searcher.search(parser.parse('phrase does not exists'), 10)
      expect(topDocs.totalHits).toEqual(0)

      // searching for 'cold' should return 1 results. We iterate found documents and print its author and titles:
      topDocs = searcher.search(parser.parse('cold'), 10) //TODO: lucene issue : why searching for 'the' is returning 0 results ?
      expect(topDocs.totalHits).toEqual(1)

      // now get back the document from the index to access matched book's author and title
      const foundDoc = searcher.doc(topDocs.scoreDocs[0].doc)
      expect(foundDoc.get('author')).toBe('George Orwell')
      expect(foundDoc.get('title')).toBe('1984')
    })
  })
})
