> **[node-java-rt](../README.md)**

[Globals](../README.md) / ["java/types"](../modules/_java_types_.md) / [JavaOptions](_java_types_.javaoptions.md) /

# Interface: JavaOptions

## Hierarchy

* **JavaOptions**

  * [Java](_java_types_.java.md)

## Index

### Properties

* [asyncOptions](_java_types_.javaoptions.md#asyncoptions)
* [classpath](_java_types_.javaoptions.md#classpath)
* [options](_java_types_.javaoptions.md#options)

## Properties

###  asyncOptions

• **asyncOptions**: *[AsyncOptions](_java_types_.asyncoptions.md)*

*Defined in [java/types.ts:17](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L17)*

Create async methods that return promises by setting the asyncOptions property of the java object. Allow changing the suffix assigned for sync and async method variants, and to further configure this module to optionally omit generation of any of these variants.

#### NOTES:
If you want the defacto standard behavior, simply don't set java.asyncOptions.
If you do provide asyncOptions, be aware that this module will not generate method variants of a given flavor if you don't provide a string value for the corresponding suffix (`asyncSuffix`, `syncSuffix`, `promiseSuffix`). In the example above, the application is configured to omit the method variants using node-style async callback functions.
If you provide `asyncOptions.promiseSuffix` then you must also set `asyncOptions.promisify` to a function that *promisifies* a node-style async function. I.e. the provided function must take as input a function whose last argument is a node callback function, and it must return an equivalent promise-returning function. Several Promises/A+ libraries provide such functions, but it may be necessary to provide a wrapper function. See `testHelpers.js` for an example.
If you provide `asyncOptions.promisify` then you must provide a *non-empty* string for `asyncOptions.promiseSuffix`.
Either (but not both) `asyncSuffix` or `syncSuffix` can be the empty string. If you want the defacto standard behavior for no suffix on async methods, you must provide an empty string for `asyncSuffix`.
We've tested promises with five Promises/A+ implementations. See `testHelpers.js` for more information.
NOTE: Due to specifics of initialization order, the methods  `java.newInstancePromise`, `java.callMethodPromise`, and `java.callStaticMethodPromise` are not available until the JVM has been created. You may need to call some other java method such as `java.import()` to finalize java initialization, or even better, the function `java.ensureJvm()`.

___

###  classpath

• **classpath**: *string[]*

*Defined in [java/types.ts:31](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L31)*

Array of paths or jars to pass to the creation of the JVM.

All items must be added to the classpath before calling any other node-java methods.

Example:

```javascript
java.classpath.push('commons.io.jar');
java.classpath.push('src');
```

___

###  options

• **options**: *string[]*

*Defined in [java/types.ts:45](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L45)*

Array of options to pass to the creation of the JVM.

All items must be added to the options before calling any other node-java methods.

Example:

```javascript
java.options.push('-Djava.awt.headless=true');
java.options.push('-Xmx1024m');
```