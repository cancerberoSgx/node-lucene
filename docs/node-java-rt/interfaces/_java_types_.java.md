> **[node-java-rt](../README.md)**

[Globals](../README.md) / ["java/types"](../modules/_java_types_.md) / [Java](_java_types_.java.md) /

# Interface: Java

(https://github.com/joeferner/node-java/#java-1)[node-java API]

## Hierarchy

* [JavaOptions](_java_types_.javaoptions.md)

  * **Java**

## Index

### Properties

* [asyncOptions](_java_types_.java.md#asyncoptions)
* [classpath](_java_types_.java.md#classpath)
* [options](_java_types_.java.md#options)

### Methods

* [callStaticMethod](_java_types_.java.md#callstaticmethod)
* [callStaticMethodPromise](_java_types_.java.md#callstaticmethodpromise)
* [callStaticMethodSync](_java_types_.java.md#callstaticmethodsync)
* [ensureJvm](_java_types_.java.md#ensurejvm)
* [getStaticFieldValue](_java_types_.java.md#getstaticfieldvalue)
* [import](_java_types_.java.md#import)
* [isJvmCreated](_java_types_.java.md#isjvmcreated)
* [newArray](_java_types_.java.md#newarray)
* [newByte](_java_types_.java.md#newbyte)
* [newChar](_java_types_.java.md#newchar)
* [newDouble](_java_types_.java.md#newdouble)
* [newFloat](_java_types_.java.md#newfloat)
* [newInstanceSync](_java_types_.java.md#newinstancesync)
* [newLong](_java_types_.java.md#newlong)
* [newProxy](_java_types_.java.md#newproxy)
* [newShort](_java_types_.java.md#newshort)

## Properties

###  asyncOptions

• **asyncOptions**: *[AsyncOptions](_java_types_.asyncoptions.md)*

*Inherited from [JavaOptions](_java_types_.javaoptions.md).[asyncOptions](_java_types_.javaoptions.md#asyncoptions)*

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

*Inherited from [JavaOptions](_java_types_.javaoptions.md).[classpath](_java_types_.javaoptions.md#classpath)*

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

*Inherited from [JavaOptions](_java_types_.javaoptions.md).[options](_java_types_.javaoptions.md#options)*

*Defined in [java/types.ts:45](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L45)*

Array of options to pass to the creation of the JVM.

All items must be added to the options before calling any other node-java methods.

Example:

```javascript
java.options.push('-Djava.awt.headless=true');
java.options.push('-Xmx1024m');
```

## Methods

###  callStaticMethod

▸ **callStaticMethod**<**T**>(`className`: string, `fieldName`: string, ...`args`: any[]): *void*

*Defined in [java/types.ts:134](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L134)*

Calls a static method on the specified class. If you are using the sync method an exception will be throw if an error occures, otherwise it will be the first argument in the callback.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`className` | string | The name of the class to call the method on. For nested classes separate using a `'$'` (eg. `com.nearinfinty.MyClass$NestedClass`) |
`fieldName` | string | - |
`...args` | any[] | - |

**Returns:** *void*

___

###  callStaticMethodPromise

▸ **callStaticMethodPromise**<**T**>(`className`: string, `fieldName`: string, ...`args`: any[]): *`Promise<T>`*

*Defined in [java/types.ts:146](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L146)*

Calls a static method on the specified class. If you are using the sync method an exception will be throw if an error occures, otherwise it will be the first argument in the callback.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`className` | string | The name of the class to call the method on. For nested classes separate using a `'$'` (eg. `com.nearinfinty.MyClass$NestedClass`) |
`fieldName` | string | - |
`...args` | any[] | - |

**Returns:** *`Promise<T>`*

___

###  callStaticMethodSync

▸ **callStaticMethodSync**<**T**>(`className`: string, `fieldName`: string, ...`args`: any[]): *`T`*

*Defined in [java/types.ts:122](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L122)*

Calls a static method on the specified class. If you are using the sync method an exception will be throw if an error occures, otherwise it will be the first argument in the callback.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`className` | string | The name of the class to call the method on. For nested classes separate using a `'$'` (eg. `com.nearinfinty.MyClass$NestedClass`) |
`fieldName` | string | - |
`...args` | any[] | - |

**Returns:** *`T`*

___

###  ensureJvm

▸ **ensureJvm**(`callback`: function): *void*

*Defined in [java/types.ts:92](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L92)*

If the JVM has not yet been created, execute the full JVM initialization process, then call callback
function when initialization is complete. If the JVM has been created, just call the callback. Note that
the full initialization process includes: 1) executing all registered client *before* hooks, 2) creating
the JVM, then 3) executing all registered client *after* hooks.

**Parameters:**

▪ **callback**: *function*

▸ (): *void*

**Returns:** *void*

___

###  getStaticFieldValue

▸ **getStaticFieldValue**<**T**>(`className`: string, `fieldName`: string): *`T`*

*Defined in [java/types.ts:110](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L110)*

Gets a static field value from the specified class.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`className` | string | The name of the class to get the value from. For nested classes separate using a `'$'` (eg. `com.nearinfinty.MyClass$NestedClass`) |
`fieldName` | string | The name of the field to get the value from.  Example:  ```js const data = java.getStaticFieldValue("com.nearinfinty.MyClass", "data"); ```  |

**Returns:** *`T`*

___

###  import

▸ **import**<**T**>(`className`: string): *`T`*

*Defined in [java/types.ts:71](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L71)*

Loads the class given by className such that it acts and feels like a javascript object.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`className` | string |   |

**Returns:** *`T`*

___

###  isJvmCreated

▸ **isJvmCreated**(): *boolean*

*Defined in [java/types.ts:97](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L97)*

Returns true if the JVM has been created. The JVM can only be created once.

**Returns:** *boolean*

___

###  newArray

▸ **newArray**(`className`: string, `array`: any[]): *any*

*Defined in [java/types.ts:163](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L163)*

Creates a new java array of given glass type. To create array of primitive types like char, byte, etc, pass the primitive type name (eg. `java.newArray("char", "hello world\n".split(''))`).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`className` | string | The name of the type of array elements. Separate nested classes using `'$'` (eg. `com.nearinfinty.MyClass$NestedClass`). |
`array` | any[] | A JavaScript array of values to assign to the java array.  |

**Returns:** *any*

___

###  newByte

▸ **newByte**(`val`: number): *any*

*Defined in [java/types.ts:169](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L169)*

Creates a new java byte. This is needed because JavaScript does not have the concept of a byte.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | number | The value of the java byte.  |

**Returns:** *any*

▸ **newByte**(`val`: number): *any*

*Defined in [java/types.ts:190](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L190)*

Creates a new java byte. This is needed because JavaScript does not have the concept of a byte.

**Parameters:**

Name | Type |
------ | ------ |
`val` | number |

**Returns:** *any*

___

###  newChar

▸ **newChar**(`val`: string): *any*

*Defined in [java/types.ts:175](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L175)*

Creates a new java char. This is needed because JavaScript does not have the concept of a char.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`val` | string | The value of the java char.  |

**Returns:** *any*

___

###  newDouble

▸ **newDouble**(`val`: number): *any*

*Defined in [java/types.ts:200](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L200)*

Creates a new java double. This is needed to force JavaScript's number to a double to call some methods.

**Parameters:**

Name | Type |
------ | ------ |
`val` | number |

**Returns:** *any*

___

###  newFloat

▸ **newFloat**(`val`: number): *any*

*Defined in [java/types.ts:195](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L195)*

Creates a new java float. This is needed to force JavaScript's number to a float to call some methods.

**Parameters:**

Name | Type |
------ | ------ |
`val` | number |

**Returns:** *any*

___

###  newInstanceSync

▸ **newInstanceSync**<**T**>(`javaClass`: string): *`T`*

*Defined in [java/types.ts:78](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L78)*

TODO
Creates an instance of the specified class. If you are using the sync method an exception will be throw if an error occurs,
otherwise it will be the first argument in the callback.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`javaClass` | string |

**Returns:** *`T`*

▸ **newInstanceSync**<**T**>(`javaClass`: string, ...`args`: any[]): *`T`*

*Defined in [java/types.ts:84](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L84)*

TODO Creates an instance of the specified class. If you are using the sync method an exception will be
throw if an error occurs, otherwise it will be the first argument in the callback.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`javaClass` | string |
`...args` | any[] |

**Returns:** *`T`*

___

###  newLong

▸ **newLong**(`val`: number): *any*

*Defined in [java/types.ts:185](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L185)*

Creates a new java long. This is needed because JavaScript does not have the concept of a long.

**Parameters:**

Name | Type |
------ | ------ |
`val` | number |

**Returns:** *any*

___

###  newProxy

▸ **newProxy**<**T**>(`interfaceName`: string, `functions`: any): *any*

*Defined in [java/types.ts:156](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L156)*

Creates a new java Proxy for the given interface. Functions passed in will run on the v8 main thread and not a new thread.

The returned object has a method unref() which you can use to free the object for garbage collection.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`interfaceName` | string | The name of the interface to proxy. Separate nested classes using `'$'` (eg. `com.nearinfinty.MyClass$NestedClass`). |
`functions` | any | A hash of functions matching the function in the interface.  |

**Returns:** *any*

___

###  newShort

▸ **newShort**(`val`: number): *any*

*Defined in [java/types.ts:180](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L180)*

Creates a new java short. This is needed because JavaScript does not have the concept of a short.

**Parameters:**

Name | Type |
------ | ------ |
`val` | number |

**Returns:** *any*