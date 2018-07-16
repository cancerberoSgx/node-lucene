

This is a program similar to Java command line tool `javap` program but outputs json so parsing is possible. 

This project is 100% java. No JavaScript. For more high level, flexible and easy to use package check the sibling project `javap` which is a facade on top of this one but nicer CLI and API. 

For be able to generate TypeScript interfaces from Java .class and even implementations based on node-java check sibling project  `java2js`. 

Both, `javap` and `java2js` are based on this project to extract Java AST from .class / .jar files.

# Use 

### Install globally
 
```
npm install --global javap-json
```

#### Dump to json file
```
javap-json --output out.json \
  --classes org.apache.lucene.store.RAMDirectory,org.apache.lucene.store.LockFactory \
  --jars lucene-core-7.4.0.jar,lucene-queryparser-7.4.0.jar
```

#### Dump to stdout
```
javap-json --classes org.apache.lucene.store.RAMDirectory,org.apache.lucene.store.LockFactory \
  --jars lucene-core-7.4.0.jar,lucene-queryparser-7.4.0.jar
```


### run using the jar file  
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