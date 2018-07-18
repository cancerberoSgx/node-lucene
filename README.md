Apache lucene bindings for nodejs and utilities around node-java to auto generate interfaces and implementations from java .jars

See internal project's :

 * [javap-json](https://bitbucket.org/Cancerberosgx/node-lucene/src/master/javap-json/) : get an AST-like JSON representation of given class names and .jar files
 * [javap](https://bitbucket.org/Cancerberosgx/node-lucene/src/master/javap/): High level API and CLI for [javap-json](https://bitbucket.org/Cancerberosgx/node-lucene/src/master/javap-json/). Implemented with bindings thanks to project node-java .
 * [java2js](https://bitbucket.org/Cancerberosgx/node-lucene/src/master/java2js/): Generates TypeScript interfaces of given Java class names and .jars as a project structure in FS. Also, (tries to) generate JavaScript implementations of given Java classes of .jars / .class files based on node-java and optionally TypeScript interfaces / classes