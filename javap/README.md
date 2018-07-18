# javap

# What?

 * Given a .jar and class name it prints the Java AST in JSON format.
 * High level performant CLI and Node.js APIs
 * Supports .jar inspection to, for example, extract the AST of all its classes
 * Supports class and .jar file glob matching 
 * Node.js API are actually bindings to javap-json (sibling project) with nice (not a wrapper around the CLI). (uses java-node project for this)
 * Performant, direct access to Jvm, no wrapping, no process spawns
 * Written in TypeScript so have typings out of the box!

# How 

```sh
npm install javap
```

or globally to use the CLI tool directly: 

```sh
npm install -g javap
```

## CLI

TODO

## Node.js API

Get the AST of java.util.List interface and print all its method return types: 

```js
import { javap } from 'javap';
const config = { classes: ['java.util.List'] }
const ast = javap(config)
const listClass = ast.find(c => c.name === 'java.util.List')
console.log(`Methods : ${listClass.methods.map(m => m.name).join(', ')}`)
```

This time we will get the descriptor of method `org.apache.lucene.store.RAMDirectory.fileNameExists` we will need to provide the library's .jar file:

```js
import { javap } from 'javap';
const config = {
  jars: ['../node-lucene/lucene-lib/lucene-core-7.4.0.jar'],
  classes: ['org.apache.lucene.store.RAMDirectory']
}
const ast = javap(config)
const RAMDirectory = ast.find(c => c.name == 'org.apache.lucene.store.RAMDirectory')
const fileNameExists = RAMDirectory.methods.find(m => m.name == 'fileNameExists')
console.log(`org.apache.lucene.store.RAMDirectory.fileNameExists method descriptor is ${fileNameExists.descriptor}`)
```




