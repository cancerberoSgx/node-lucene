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
java-ast --classPath ../node-lucene/lucene-lib/lucene-core-7.4.0.jar --classes org.apache.lucene.store.RAMDirectory
```

Print AST of all classes found in `rt.jar` to file `standard-ast.json`:


```sh
java-ast --classPath /usr/lib/jvm/java-8-jdk/jre/lib/rt.jar --all-classes
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
  classPath: ['../node-lucene/lucene-lib/lucene-core-7.4.0.jar'],
  classes: ['org.apache.lucene.store.RAMDirectory']
}
const ast = javap(config)
const RAMDirectory = ast.find(c => c.name == 'org.apache.lucene.store.RAMDirectory')
const fileNameExists = RAMDirectory.methods.find(m => m.name === 'fileNameExists')
console.log(`org.apache.lucene.store.RAMDirectory.fileNameExists method descriptor is ${fileNameExists.descriptor}`)
```

Or we can just print all classes of given classPath. In the following example we print the AST of all standard Java classes like java.lang and java.util. For that we must provide the rt.jar file distributed with the Java JRE / JDK : 


## Options

The following are the options that javap accept in general both in the JavaScript API and in the Command Line interface:

 * `classPath`: (`string[]`) - optional - paths or globs to `.jar` files or to folders with `.class` files to add to class path. In the command line must be comma-separated if more than one.
 * `classes`: (`string[]`) - optional - Classes to print. In the command line must be comma-separated if more than one. If omitted the behavior will be as if allClasses===true
 * `classesFilterByName`: (`string | ((s: string) => boolean)`) - optional - filter classes by name. Could be glob-like pattern or function predicate
 * `allClasses`: (`boolean`) - optional - generate all classes of given ClassPath
 * `classFilter`: (`((c: BaseNode) => boolean)`) - optional - Filter class / interface nodes. Besides being able to filter them by name using \`classesFilterByName\` this predicate can be also used to filter nodes for example by modifier (public, private, etc)
 * `output`: (`string`) - optional - write ast json to file. If not provided will print json to stdout
 * `memberFilter`: (`string | ((s: BaseNode) => boolean)`) - optional - if given will print only those members which name contain given string
 * `removeEmptyArrayProps`: (`boolean`) - optional - if true will remove all those properties which value are empty array or false
 * `pretty`: (`boolean`) - optional - if true JSON output will be indented if not minified
 * `help`: (`string`) - optional - shows usage help

## TODO

 * testing utility so I can get the AST of given java coded string (util will write, compile and execute javap-json over it automatically)
 * utility to output dependency tree: for each type found in fields, params, return type, extends, implements, type param, etc build dependency tree of given class(es). Why? so we can generate ts/js only of needed types and not of everything. 
 * classPath when using folders should support globs and class filtering
 * Contribute to java-node : add to examples to .npmignore - all its users are downloading lucene .classPath on npm install !! n and probably same goes for test/ and **/*.class