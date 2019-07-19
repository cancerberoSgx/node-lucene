# node-lucene

node.js API to apache lucene Java implementation. 

## Status

 * As proof of concept, this project project verifies that complex Java APIs like apache-lucene, can be ported to a JavaScript API in a quite straight forward and mechanical way.
 * Apache lucene JavaScript APIs are far to be completed. User contributions are welcome! Just create missing classes or methods copying existing implementations. 
 * An important limitation found is that creating class extensions from JavaScript is not possible and this is sometimes needed to use APIs like lucene in custom use cases. If you need to declare Java subclasses then you might need to write them in Java and add them in this project class path.



## Features

 * Node.js API straightforward translated / ported from Java API (trying to respect the original Java packages, types and interfaces as far as I could).
 * By default, methods are synchronous but there also exist signatures for Promise based return values. 
 * lucene Java Api calls binding directly called from node.js thanks to [node-java](https://github.com/joeferner/node-java). (no IPC, no process spawn, no server).
 * Written in TypeScript.
 * apache lucene is easily upgradable and included along the project.
 * Requirements: Node.js and Java. For the installation Python is also required.

## Usage

```sh
npm install --save node-lucene
```

Also, **lucene .jar** files need to be accessible. By default lucene version `7.7.2` jar files will try to be read from `./lucene-lib/` or `node_modules/node-lucene/lucene-lib/`. This can be configured in `node-lucene/src/util/getLuceneJava.ts`. Although lucene version 8 could be easily adapted it currently won't pass tests since the API are not 100% compatible with lucene version 7. 

**Important** node.s version 12 is not currently supported (since npm package `java` doesn't support it yet.). Nevertheless, node.js version 11 is supported. 

### Example: indexing and searching in RAM 

```ts
const lucene = require('node-lucene')
// or `import * as lucene from 'node-lucene'`

// We will be indexing the following "books":
const books = [
  {
    content: 'The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents.',
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

// searching for 'cold' should return 1 results. We iterate found documents and print its author and titles:
topDocs = searcher.search(parser.parse('cold'), 10) //TODO: lucene issue : why searching for 'the' is returning 0 results ? 

// now get back the document from the index to access matched book's author and title
const foundDoc = searcher.doc(topDocs.scoreDocs[0].doc)
console.log(`Found "${foundDoc.get('title')}" authored by ${foundDoc.get('author')}`);

```


### Example: indexing in File System

```typescript

import * as lucene from 'node-lucene'
import * as java from 'node-java-rt'

const indexFolder = java.nio.file.Paths.getSync('.', 'tmp', 'index1')
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
```

## Status 

**WIP / Planning**

 * still deciding if handcrafting an implementation or auto generating it using java2js like tool. Right now just a handcrafted respecting original lucene java package structure with folders and TS namespaces and using auto generated java2js interfaces as reference / copy/paste 

## why?

 * lucene is THE best index / search engine implementation
 * I want to call lucene API directly from my nodejs program without fork(), spawn(), request(), socket, or any IPC. 
 * I want to use original lucene java implementation not a clone/port like lucy and easily upgrade the java lucene implementation at any time. 
 * I want to call lucene java from node.js using analog API as fast a s possible. 
 * I don't want to start a server like solr or elasticsearch. Example: a text editor indexing lots of source code as eclipse IDE does.

## TODO

 * support node 12 - currently because `java` don't support node 12 we neither. node 11 is supported. 
 * make all extends java.lang.object and this should extends JavaBase - so they all implement toString() etc
 * contribute node-java README: to document standard `promisify: require('util').promisify` so no library is necessary. Also implement it as default promisify impl if exists since its supported from node 8.0.0 (LTS version now so it should be available in most cases) .
 * use https://github.com/joeferner/node-java-maven to manage lucene jars and run in npm prepare script
 * do reflection in java to get method / class signatures and generate TS interfaces and implementations automatically using java2js. We realized this will be very hard task but would be ideal.
 * contribute node-java README: fix several typos : "classes separate usi", "if an error occurs", "sted classes separate u"
 * consider deprecating *Async methods since promises are available OOTB in node LTS, can be polly filled in older Node versions and callbacks are "obsolete" today in favor of promises. Supporting *Async is double work and testing it is harder (testing promises is just copy&paste *Sync and add async/await while testing *Async implies callbacks and require('async') - test code is totally different - too much work and no real gain). 
 * async constructors ? today calling `var o = new java.lang.Object()` is sync - should we support async analogy for example, `var o = await java.lang.Object.newAsync()`
 * node-java - README - getStaticFieldValue  parameter  "callback(err, item) - Callback to be called when the class is created."   is confusing - is it really exists ? and if then " class is created" is wrong