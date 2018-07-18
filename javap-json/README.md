

This is a program similar to Java command line tool `javap` program but outputs json so parsing is possible. 

Is implemented in Java and uses JavaRefection to obtain inforation by loading given .jars and query Classes via java.ang.reflect. 

Also it contains a small Node.js CLI tool /bin/javap-json.js

For more high level, flexible and easy to use package check the sibling project `javap` which is a facade on top of this one but nicer CLI and API. 

For be able to generate TypeScript interfaces from Java .class and even implementations based on node-java check sibling project  `java2js`. 

# Use 

### Install globally
 
```
npm install --global javap-json
```

### Use CLI 

(recommended)

#### Dump to json file

Just the AST of java.lang.Object  (not required to pass any jars) and dump it to an file: 

```
javap-json --output out.json --classes java.lang.Object 
```

#### Dump to stdout

AST of (comma-separated) classes org.apache.lucene.store.RAMDirectory, org.apache.lucene.store.LockFactory. This time we do need to pass their .jars.

```
javap-json --classes org.apache.lucene.store.RAMDirectory,org.apache.lucene.store.LockFactory \
  --jars lucene-core-7.4.0.jar,lucene-queryparser-7.4.0.jar
```


### run with java

so node.js is not required:

```
java -jar dist/javap-json.jar org.apache.lucene.store.RAMDirectory,org.apache.lucene.store.LockFactory,org.apache.lucene.util.Accountable,org.apache.lucene.util.FilterIterator ../node-lucene/lucene-lib/lucene-core-7.4.0.jar,../node-lucene/lucene-lib/lucene-queryparser-7.4.0.jar
```

### run directly using Java:

```
java -cp \"java-lib/gson-2.8.5.jar:java-src\" JavapJsonOutput org.apache.lucene.store.RAMDirectory,org.apache.lucene.store.LockFactory,org.apache.lucene.util.Accountable,org.apache.lucene.util.FilterIterator ../node-lucene/lucene-lib/lucene-core-7.4.0.jar,../node-lucene/lucene-lib/lucene-queryparser-7.4.0.jar
```


### run with npm run unix or npm run windows :

```
npm run unix -- org.apache.lucene.store.RAMDirectory,org.apache.lucene.store.LockFactory,org.apache.lucene.util.Accountable,org.apache.lucene.util.FilterIterator ../node-lucene/lucene-lib/lucene-core-7.4.0.jar,../node-lucene/lucene-lib/lucene-queryparser-7.4.0.jar
```


# Build

```
npm run build
```

That will generate the .jar file in dist/ folder