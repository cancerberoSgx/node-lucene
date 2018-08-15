# node-lucene

[Apache Lucene](http://lucene.apache.org/core/) API for Node.js. Implemented calling Java directly from Node.js thanks to [node-java](https://github.com/joeferner/node-java) (no servers, no process spawning, no IPC-like mechanisms). Straightforward API.  

See [node-lucene sub project page](https://github.com/cancerberoSgx/node-lucene/tree/master/node-lucene) 

# Subprojects and research: 

See internal project's :

 * [javap-json](https://github.com/cancerberoSgx/node-lucene/tree/master/javap-json/) : get an AST-like JSON representation of given class names and .jar files
 * [javap](https://github.com/cancerberoSgx/node-lucene/tree/master/javap/): High level API and CLI for [javap-json](https://github.com/cancerberoSgx/node-lucene/tree/master/javap-json/). Implemented with bindings thanks to project [node-java](https://github.com/joeferner/node-java) .
 * [java2js](https://github.com/cancerberoSgx/node-lucene/tree/master/java2js/): Research. Generates TypeScript interfaces of given Java class names and .jars as a project structure in FS in different configurations (single files, packages as files, 1 file per class, etc. Also, (tries to) generate JavaScript implementations of given Java classes of .jars / .class files based on [node-java](https://github.com/joeferner/node-java) and optionally TypeScript interfaces / classes
 * [generate-cli-api-help](https://github.com/cancerberoSgx/node-lucene/tree/master/generate-cli-api-help) : generate CLI `--help` output from a given documented TypeScript interface. 
 * [node-java-rt](https://github.com/cancerberoSgx/node-lucene/tree/master/node-java-rt) : implementation and API of Java Standard class hierarchy itself (java.lang.Object, java.util.LinkedList, etc). node-lucene is based on this. Uses [node-java](https://github.com/joeferner/node-java)