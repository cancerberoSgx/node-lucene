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

The executable is called `java-ast` so it not collides with existing Java `javap` command. Examples: 

Print AST of class `org.apache.lucene.store.RAMDirectory` to stdout:

```sh
java-ast --jars ../node-lucene/lucene-lib/lucene-core-7.4.0.jar --classes org.apache.lucene.store.RAMDirectory
```

Print AST of all classes found in `rt.jar` to file `standard-ast.json`:


```sh
java-ast --jars /usr/lib/jvm/java-8-jdk/jre/lib/rt.jar --all-classes
```



## Node.js API

Get the AST of java.util.List interface and print all its method return types: 

```js
import { javap } from 'javap';
const config = { classes: ['java.util.List'] }
const ast = javap(config)
const List = ast.find(c => c.name === 'java.util.List')
console.log(`Methods : ${List.methods.map(m => m.name).join(', ')}`)
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
const fileNameExists = RAMDirectory.methods.find(m => m.name === 'fileNameExists')
console.log(`org.apache.lucene.store.RAMDirectory.fileNameExists method descriptor is ${fileNameExists.descriptor}`)
```

Or we can just print all classes of given jars. In the following example we print the AST of all standard Java classes like java.lang and java.util. For that we must provide the rt.jar file distributed with the Java JRE / JDK : 


## Options

The following are the options that javap accept in general both in the JavaScript API and in the Command Line interface:

 * `jars`: (`string[]`) - optional - paths or globs to jars. In the command line must be comma-separated if more than one.
 * `classes`: (`string[]`) - optional - Classes to print. In the command line must be comma-separated if more than one. If omitted the behavior will be as if allClasses===true
 * `classesFilter`: (`string`) - optional - glob-like pattern for matching classes
 * `allClasses`: (`boolean`) - optional - generate all classes of given ClassPath
 * `output`: (`string`) - optional - write ast json to file. If not provided will print json to stdout
 * `memberFilter`: (`string | ((s: BaseNode) => boolean)`) - optional - if given will print only those members which name contain given string
 * `removeEmptyArrayProps`: (`boolean`) - optional - if true will remove all those properties which value are empty array or false
 * `pretty`: (`boolean`) - optional - if true JSON output will be indented if not minified
 * `help`: (`string`) - optional - shows usage help

# TODO

 * Contribute to java-node : add to examples to .npmignore - all its users are downloading lucene .jars on npm install !! n and probably same goes for test/ and **/*.class