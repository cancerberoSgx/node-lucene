javap command execution and output string parser to a json AST like structure from given .jar and class names 

# Install
```sh
npm install javap [--global]
```

# CLI Usage


## Run javap manully and pass stdout

User use javap directly and pass output to stdin:

```sh
javap -s -classpath lucene-lib/lucene-core-7.4.0.jar org.apache.lucene.store.RAMDirectory | javap 
```

# Node.js API

User use javap directly and pass output to stdin:

```sh


```


# TODO

 * validate format is valid https://github.com/estree/estree (typescript) compatible (example: https://cancerberosgx.github.io/js-ast-experiments-of-mine/#ast-types%20print%20AST%20of%20TypeScript%20code) 

 * https://stackoverflow.com/questions/14434320/javap-in-a-programmable-way