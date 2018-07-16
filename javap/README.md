Given a .jar and class name it prints the Java AST in JSON format. 

Bindings for javap-json sibling project with nice CLI and node.js API.

Implements allClasses to extract all class names from .jar file.

Used by java2js to build a TS / JS project from given classes.


<!-- 
node-javap command execution and output string parser to a json AST like structure from given .jar and class names 

# Install
```sh
npm install javap [--global]
```


# CLI Usage

If installed with --global will install the command `javap-parser`

 * parse all lucene jar files classes and print resulting AST to stdout

```sh
javap-parser --classPath "lib/**/lucene*.jar" --allClasses 
```

* parse classes that match `java.util.*` from standard java library:

java.lang* , java.util* , etc classes are located in JRE distribution `rt.jar`: 

```sh
javap-parser --classPath /usr/local/java/jre/lib/rt.jar --classes "java.util.*"
```

 * Run `javap` manually and pass stdout to `javap-parser`

```sh
javap -s -classpath lucene-lib/lucene-core-7.4.0.jar org.apache.lucene.store.RAMDirectory | javap-parser
```


# Node.js API

User use javap directly and pass output to stdin:

```sh

```

# Options

Options both for API and CLI

TODO link to types.ts or copy paste

# TODO

 * maybe instead of parsing javap is safer to create a .java program that loads the class and use reflection to get everything, like http://javahungry.blogspot.com/2013/05/reflection-javap-command.html

 
 * this fails - fileMap is not well parsed because of generics...

```
 public class org.apache.lucene.store.RAMDirectory extends org.apache.lucene.store.BaseDirectory implements org.apache.lucene.util.Accountable {
  protected final java.util.Map<java.lang.String, org.apache.lucene.store.RAMFile> fileMap;
    descriptor: Ljava/util/Map;```


 
 * validate format is valid https://github.com/estree/estree (typescript) compatible (example: https://cancerberosgx.github.io/js-ast-experiments-of-mine/#ast-types%20print%20AST%20of%20TypeScript%20code) 


# Dones


 * parser issue class and methods names can have generics: {"java.util.List<E>":{"name":"java.util.List<E>" - this is wrong remove generics from name and put them in new field typeParameters.  -->