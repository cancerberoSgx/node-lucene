# What ? 

Just a research to see how viable is to automatic generate TypeScript interfaces from Java .class/.jar based on AST provided by javap/javap-json sibling projects and ultimately how viable is to automatically create implementations. 

## Tries to answer:

 * Is it possible to automatically generate part of lucene JS API automatically ? how much ? what about automatically generating its implementation ? 
 * What about smaller projects / utilities / libraries that doesn't exists in node.js like BigDecimal, swing, SWT, etc ? 

## Ultimate objectives

 * generate typescript interfaces 100% automatically from given java classes / .jars
 * generate different modes of output project structures (flat, on-big-file, folder tree)
 * automatically generate working implementations
 * report / mock those cases where is impossible to translate java-to-js automatically
 * is we are ever going to translate standard java APIs like java.util, java.io, java.lang, then we should also translate java harness / acid tests and run them along the project. 


# The following are Initial research Notes

# how is the API

the call will be something like this the important part is the config object
```ts
javaToJs({
})

```
## API Alternative 1

```ts
interface Java2JsConfig extends JavapConfig {
}
```

# Output type for content

 * Should we generate .ts files contents strings or estree AST (https://github.com/estree/formal/tree/master/formal-data/TypeScript) ? for now we generate content as strings since with that we can parse it to estree AST

## output project structure  different alternatives

 * alternative one: flat folder with all classes names fixed inside 
 * folder tree org.apache.lucene.store.RAMDirectory generates org/apache/lucene/store/RAMDirectory.ts

initially default impl is the later



# TODO

## Issues

 * interface I extends I if base - (Type 'I' recursively references itself as a base type.)
 * interfaces:  public YES: any - 'public' modifier cannot appear on a type member. <-- this is probably a ts-simple-ast issue - should not print 'public' in this case


## Problems ahead / detected

 * problems since we need to create java types from js types, some like not be possible to transform - for being 100% automatic we will need to verify if a signature can be transformed at all and if not decied what to do.
 * Java allow static properties on interfaces - how we translate that to js ? classes instead of interfaces ? 
 * problem: java overloaded methods : probably hard to ayuto-implement in js
 * for auto code generation we need to discover the method java signature like 'javapJson([Ljava/lang/String;[Ljava/lang/String;)Ljava/lang/String;' 
 * decide the API
 * User able to configure output type "only interfaces", "only interfaces one file", "interfaces and node-java implementations"
 * references to other types like "returns": "org.foo.Bar" - need to add imports and exports . 
 generate signatures for node-java sync & async methods which is configurable and we should expose and respect : https://github.com/joeferner/node-java#asyncoptions-control-over-the-generation-of-sync-async--promise-method-variants 
 * references to other types: What happens reference is external ? should we create it or warn the user - configurable ?
 * java natives (java.lang.String) translated to js natives
 * user able to configure format of arguments names (autogenerated)
 * support overrides in ts interfaces
 * other output project structures like one big file with everything inside, vs. folders java/lang/String.ts vs flat files at the same level like javaLangString.ts, etc


# Ideas (some crazy ones)

 * port small standard java utilities to js - like BigDecimal - try to do it 100% automatically - generating interfaces and class implementations . Also include java spec harness tests and also compile them so we make sure the new js api works.
 * port GUI libraries like swing / awt / swt to node.js. Could we be 100% automatic ? these kind of GUI libraries or ports to qt / gtk doesn't exists in node.js or ha ve very poor quality - everyone works with electron-like technologies. .... 
 *por XML related utilities like parser, validation, dtd, schema, SOAP, etc that are mature in java and in Node.js practically doesn't exist.