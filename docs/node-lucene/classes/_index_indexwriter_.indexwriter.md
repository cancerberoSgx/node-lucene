> **[node-lucene](../README.md)**

[Globals](../README.md) / ["index/IndexWriter"](../modules/_index_indexwriter_.md) / [IndexWriter](_index_indexwriter_.indexwriter.md) /

# Class: IndexWriter

## Hierarchy

* `Object_`

  * **IndexWriter**

## Implements

* `IJavaBase`

## Index

### Constructors

* [constructor](_index_indexwriter_.indexwriter.md#constructor)

### Properties

* [_java](_index_indexwriter_.indexwriter.md#_java)

### Methods

* [_javaClassName](_index_indexwriter_.indexwriter.md#_javaclassname)
* [addDocument](_index_indexwriter_.indexwriter.md#adddocument)
* [addDocumentAsync](_index_indexwriter_.indexwriter.md#adddocumentasync)
* [addDocumentPromise](_index_indexwriter_.indexwriter.md#adddocumentpromise)
* [addDocumentSync](_index_indexwriter_.indexwriter.md#adddocumentsync)
* [close](_index_indexwriter_.indexwriter.md#close)
* [closeAsync](_index_indexwriter_.indexwriter.md#closeasync)
* [closePromise](_index_indexwriter_.indexwriter.md#closepromise)
* [closeSync](_index_indexwriter_.indexwriter.md#closesync)
* [deleteAll](_index_indexwriter_.indexwriter.md#deleteall)
* [deleteAllAsync](_index_indexwriter_.indexwriter.md#deleteallasync)
* [deleteAllPromise](_index_indexwriter_.indexwriter.md#deleteallpromise)
* [deleteAllSync](_index_indexwriter_.indexwriter.md#deleteallsync)
* [deleteDocuments](_index_indexwriter_.indexwriter.md#deletedocuments)
* [deleteDocumentsAsync](_index_indexwriter_.indexwriter.md#deletedocumentsasync)
* [deleteDocumentsPromise](_index_indexwriter_.indexwriter.md#deletedocumentspromise)
* [deleteDocumentsSync](_index_indexwriter_.indexwriter.md#deletedocumentssync)
* [equals](_index_indexwriter_.indexwriter.md#equals)
* [equalsAsync](_index_indexwriter_.indexwriter.md#equalsasync)
* [equalsPromise](_index_indexwriter_.indexwriter.md#equalspromise)
* [equalsSync](_index_indexwriter_.indexwriter.md#equalssync)
* [flush](_index_indexwriter_.indexwriter.md#flush)
* [flushAsync](_index_indexwriter_.indexwriter.md#flushasync)
* [flushPromise](_index_indexwriter_.indexwriter.md#flushpromise)
* [flushSync](_index_indexwriter_.indexwriter.md#flushsync)
* [getClass](_index_indexwriter_.indexwriter.md#getclass)
* [hashCode](_index_indexwriter_.indexwriter.md#hashcode)
* [numDocsAsync](_index_indexwriter_.indexwriter.md#numdocsasync)
* [numDocsPromise](_index_indexwriter_.indexwriter.md#numdocspromise)
* [numDocsSync](_index_indexwriter_.indexwriter.md#numdocssync)
* [ramBytesUsedAsync](_index_indexwriter_.indexwriter.md#rambytesusedasync)
* [ramBytesUsedPromise](_index_indexwriter_.indexwriter.md#rambytesusedpromise)
* [ramBytesUsedSync](_index_indexwriter_.indexwriter.md#rambytesusedsync)
* [toString](_index_indexwriter_.indexwriter.md#tostring)
* [toStringAsync](_index_indexwriter_.indexwriter.md#tostringasync)
* [toStringPromise](_index_indexwriter_.indexwriter.md#tostringpromise)
* [toStringSync](_index_indexwriter_.indexwriter.md#tostringsync)
* [updateDocument](_index_indexwriter_.indexwriter.md#updatedocument)
* [updateDocumentAsync](_index_indexwriter_.indexwriter.md#updatedocumentasync)
* [updateDocumentPromise](_index_indexwriter_.indexwriter.md#updatedocumentpromise)
* [updateDocumentSync](_index_indexwriter_.indexwriter.md#updatedocumentsync)
* [_buildArraySync](_index_indexwriter_.indexwriter.md#static-_buildarraysync)
* [_buildAsync](_index_indexwriter_.indexwriter.md#static-protected-_buildasync)
* [_buildJavaArray](_index_indexwriter_.indexwriter.md#static-_buildjavaarray)
* [_buildPromise](_index_indexwriter_.indexwriter.md#static-protected-_buildpromise)
* [_buildSync](_index_indexwriter_.indexwriter.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_index_indexwriter_.indexwriter.md#static-protected-_buildsyncorthrow)
* [_getNative](_index_indexwriter_.indexwriter.md#static-_getnative)
* [_javaClassName](_index_indexwriter_.indexwriter.md#static-_javaclassname)
* [class](_index_indexwriter_.indexwriter.md#static-class)

## Constructors

###  constructor

\+ **new IndexWriter**(`index`: [Directory](_store_directory_.directory.md), `writerConfig`: [IndexWriterConfig](_index_indexwriterconfig_.indexwriterconfig.md)): *[IndexWriter](_index_indexwriter_.indexwriter.md)*

*Overrides void*

*Defined in [index/IndexWriter.ts:10](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | [Directory](_store_directory_.directory.md) |
`writerConfig` | [IndexWriterConfig](_index_indexwriterconfig_.indexwriterconfig.md) |

**Returns:** *[IndexWriter](_index_indexwriter_.indexwriter.md)*

## Properties

###  _java

• **_java**: *any*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/JavaBase.d.ts:12

Reference to the Java Object associated with this instance

**`internal`** 

## Methods

###  _javaClassName

▸ **_javaClassName**(): *string*

*Inherited from void*

*Overrides void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:6

**Returns:** *string*

___

###  addDocument

▸ **addDocument**<**T**>(`document`: `Iterable<T>`): *`Long`*

*Defined in [index/IndexWriter.ts:69](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L69)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`document` | `Iterable<T>` |

**Returns:** *`Long`*

___

###  addDocumentAsync

▸ **addDocumentAsync**<**T**>(`document`: `Iterable<T>`, `callback`: `Callback<Long>`): *void*

*Defined in [index/IndexWriter.ts:72](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L72)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`document` | `Iterable<T>` |
`callback` | `Callback<Long>` |

**Returns:** *void*

___

###  addDocumentPromise

▸ **addDocumentPromise**<**T**>(`document`: `Iterable<T>`): *`Promise<Long>`*

*Defined in [index/IndexWriter.ts:75](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L75)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`document` | `Iterable<T>` |

**Returns:** *`Promise<Long>`*

___

###  addDocumentSync

▸ **addDocumentSync**<**T**>(`document`: `Iterable<T>`): *`Long`*

*Defined in [index/IndexWriter.ts:66](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L66)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`document` | `Iterable<T>` |

**Returns:** *`Long`*

___

###  close

▸ **close**(): *void*

*Defined in [index/IndexWriter.ts:33](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L33)*

**Returns:** *void*

___

###  closeAsync

▸ **closeAsync**(`callback`: `Callback<void>`): *void*

*Defined in [index/IndexWriter.ts:36](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<void>` |

**Returns:** *void*

___

###  closePromise

▸ **closePromise**(): *`Promise<void>`*

*Defined in [index/IndexWriter.ts:39](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L39)*

**Returns:** *`Promise<void>`*

___

###  closeSync

▸ **closeSync**(): *void*

*Defined in [index/IndexWriter.ts:30](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L30)*

**Returns:** *void*

___

###  deleteAll

▸ **deleteAll**(): *`Long`*

*Defined in [index/IndexWriter.ts:82](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L82)*

**Returns:** *`Long`*

___

###  deleteAllAsync

▸ **deleteAllAsync**(`callback`: `Callback<Long>`): *void*

*Defined in [index/IndexWriter.ts:85](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<Long>` |

**Returns:** *void*

___

###  deleteAllPromise

▸ **deleteAllPromise**(): *`Promise<Long>`*

*Defined in [index/IndexWriter.ts:88](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L88)*

**Returns:** *`Promise<Long>`*

___

###  deleteAllSync

▸ **deleteAllSync**(): *`Long`*

*Defined in [index/IndexWriter.ts:79](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L79)*

**Returns:** *`Long`*

___

###  deleteDocuments

▸ **deleteDocuments**(...`queries`: [Query](_search_query_.query.md) | [Term](_index_term_.term.md)[]): *`Long`*

*Defined in [index/IndexWriter.ts:95](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`...queries` | [Query](_search_query_.query.md) \| [Term](_index_term_.term.md)[] |

**Returns:** *`Long`*

___

###  deleteDocumentsAsync

▸ **deleteDocumentsAsync**(`callback`: `Callback<Long>`, ...`queries`: [Query](_search_query_.query.md) | [Term](_index_term_.term.md)[]): *`Promise<void>`*

*Defined in [index/IndexWriter.ts:98](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<Long>` |
`...queries` | [Query](_search_query_.query.md) \| [Term](_index_term_.term.md)[] |

**Returns:** *`Promise<void>`*

___

###  deleteDocumentsPromise

▸ **deleteDocumentsPromise**(...`queries`: [Query](_search_query_.query.md) | [Term](_index_term_.term.md)[]): *`Promise<Long>`*

*Defined in [index/IndexWriter.ts:102](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`...queries` | [Query](_search_query_.query.md) \| [Term](_index_term_.term.md)[] |

**Returns:** *`Promise<Long>`*

___

###  deleteDocumentsSync

▸ **deleteDocumentsSync**(...`queries`: [Query](_search_query_.query.md) | [Term](_index_term_.term.md)[]): *`Long`*

*Defined in [index/IndexWriter.ts:92](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`...queries` | [Query](_search_query_.query.md) \| [Term](_index_term_.term.md)[] |

**Returns:** *`Long`*

___

###  equals

▸ **equals**(`value`: `JavaBase`): *boolean*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:12

**Parameters:**

Name | Type |
------ | ------ |
`value` | `JavaBase` |

**Returns:** *boolean*

___

###  equalsAsync

▸ **equalsAsync**(`value`: `JavaBase`, `c`: `Callback<boolean>`): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`value` | `JavaBase` |
`c` | `Callback<boolean>` |

**Returns:** *void*

___

###  equalsPromise

▸ **equalsPromise**(`value`: `JavaBase`): *`Promise<boolean>`*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`value` | `JavaBase` |

**Returns:** *`Promise<boolean>`*

___

###  equalsSync

▸ **equalsSync**(`value`: `JavaBase`): *boolean*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:11

**Parameters:**

Name | Type |
------ | ------ |
`value` | `JavaBase` |

**Returns:** *boolean*

___

###  flush

▸ **flush**(): *void*

*Defined in [index/IndexWriter.ts:46](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L46)*

**Returns:** *void*

___

###  flushAsync

▸ **flushAsync**(`callback`: `Callback<void>`): *void*

*Defined in [index/IndexWriter.ts:49](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<void>` |

**Returns:** *void*

___

###  flushPromise

▸ **flushPromise**(): *`Promise<void>`*

*Defined in [index/IndexWriter.ts:52](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L52)*

**Returns:** *`Promise<void>`*

___

###  flushSync

▸ **flushSync**(): *void*

*Defined in [index/IndexWriter.ts:43](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L43)*

**Returns:** *void*

___

###  getClass

▸ **getClass**(): *`Class<any>`*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:16

**Returns:** *`Class<any>`*

___

###  hashCode

▸ **hashCode**(): *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:15

**Returns:** *number*

___

###  numDocsAsync

▸ **numDocsAsync**(`callback`: `Callback<number>`): *void*

*Defined in [index/IndexWriter.ts:59](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<number>` |

**Returns:** *void*

___

###  numDocsPromise

▸ **numDocsPromise**(): *`Promise<number>`*

*Defined in [index/IndexWriter.ts:62](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L62)*

**Returns:** *`Promise<number>`*

___

###  numDocsSync

▸ **numDocsSync**(): *number*

*Defined in [index/IndexWriter.ts:56](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L56)*

**Returns:** *number*

___

###  ramBytesUsedAsync

▸ **ramBytesUsedAsync**(`callback`: `Callback<Long>`): *void*

*Defined in [index/IndexWriter.ts:23](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<Long>` |

**Returns:** *void*

___

###  ramBytesUsedPromise

▸ **ramBytesUsedPromise**(): *`Promise<Long>`*

*Defined in [index/IndexWriter.ts:26](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L26)*

**Returns:** *`Promise<Long>`*

___

###  ramBytesUsedSync

▸ **ramBytesUsedSync**(): *`Long`*

*Defined in [index/IndexWriter.ts:20](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L20)*

**Returns:** *`Long`*

___

###  toString

▸ **toString**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:8

**Returns:** *string*

___

###  toStringAsync

▸ **toStringAsync**(`c`: `Callback<string>`): *void*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:9

**Parameters:**

Name | Type |
------ | ------ |
`c` | `Callback<string>` |

**Returns:** *void*

___

###  toStringPromise

▸ **toStringPromise**(): *`Promise<string>`*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:10

**Returns:** *`Promise<string>`*

___

###  toStringSync

▸ **toStringSync**(): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:7

**Returns:** *string*

___

###  updateDocument

▸ **updateDocument**(`term`: [Term](_index_term_.term.md), `doc`: `Iterable<IndexableField>`): *`Long`*

*Defined in [index/IndexWriter.ts:110](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`term` | [Term](_index_term_.term.md) |
`doc` | `Iterable<IndexableField>` |

**Returns:** *`Long`*

___

###  updateDocumentAsync

▸ **updateDocumentAsync**(`callback`: `Callback<Long>`, `term`: [Term](_index_term_.term.md), `doc`: `Iterable<IndexableField>`): *`Promise<void>`*

*Defined in [index/IndexWriter.ts:113](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<Long>` |
`term` | [Term](_index_term_.term.md) |
`doc` | `Iterable<IndexableField>` |

**Returns:** *`Promise<void>`*

___

###  updateDocumentPromise

▸ **updateDocumentPromise**(`term`: [Term](_index_term_.term.md), `doc`: `Iterable<IndexableField>`): *`Promise<Long>`*

*Defined in [index/IndexWriter.ts:117](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`term` | [Term](_index_term_.term.md) |
`doc` | `Iterable<IndexableField>` |

**Returns:** *`Promise<Long>`*

___

###  updateDocumentSync

▸ **updateDocumentSync**(`term`: [Term](_index_term_.term.md), `doc`: `Iterable<IndexableField>`): *`Long`*

*Defined in [index/IndexWriter.ts:107](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`term` | [Term](_index_term_.term.md) |
`doc` | `Iterable<IndexableField>` |

**Returns:** *`Long`*

___

### `Static` _buildArraySync

▸ **_buildArraySync**<**T**>(`javaArray`: any, `createInstance`: `InstanceCreator<T>`): *`T`[]*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/JavaBase.d.ts:22

**`internal`** 

**Type parameters:**

▪ **T**: *`JavaBase`*

**Parameters:**

Name | Type |
------ | ------ |
`javaArray` | any |
`createInstance` | `InstanceCreator<T>` |

**Returns:** *`T`[]*

___

### `Static` `Protected` _buildAsync

▸ **_buildAsync**<**T**>(`callback`: `Callback<T | null>`, `instance`: `T` | `InstanceCreator<T>`): *function*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/JavaBase.d.ts:18

**`internal`** 

**Type parameters:**

▪ **T**: *`JavaBase`*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<T \| null>` |
`instance` | `T` \| `InstanceCreator<T>` |

**Returns:** *function*

▸ (`error`: any, `javaObject`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`javaObject` | any |

___

### `Static` _buildJavaArray

▸ **_buildJavaArray**<**T**>(`jsArray`: `T`[], `className`: string): *any*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/JavaBase.d.ts:24

**`internal`** 

**Type parameters:**

▪ **T**: *`JavaBase`*

**Parameters:**

Name | Type |
------ | ------ |
`jsArray` | `T`[] |
`className` | string |

**Returns:** *any*

___

### `Static` `Protected` _buildPromise

▸ **_buildPromise**<**T**>(`p`: `Promise<any>`, `instance`: `T` | `InstanceCreator<T>`): *`Promise<T | null>`*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/JavaBase.d.ts:20

**`internal`** 

**Type parameters:**

▪ **T**: *`JavaBase`*

**Parameters:**

Name | Type |
------ | ------ |
`p` | `Promise<any>` |
`instance` | `T` \| `InstanceCreator<T>` |

**Returns:** *`Promise<T | null>`*

___

### `Static` `Protected` _buildSync

▸ **_buildSync**<**T**>(`javaObject`: any, `instance`: `T` | `InstanceCreator<T>`): *`T` | null*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/JavaBase.d.ts:14

**`internal`** 

**Type parameters:**

▪ **T**: *`JavaBase`*

**Parameters:**

Name | Type |
------ | ------ |
`javaObject` | any |
`instance` | `T` \| `InstanceCreator<T>` |

**Returns:** *`T` | null*

___

### `Static` `Protected` _buildSyncOrThrow

▸ **_buildSyncOrThrow**<**T**>(`javaObject`: any, `instance`: `T` | `InstanceCreator<T>`): *`T`*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/JavaBase.d.ts:16

**`internal`** 

**Type parameters:**

▪ **T**: *`JavaBase`*

**Parameters:**

Name | Type |
------ | ------ |
`javaObject` | any |
`instance` | `T` \| `InstanceCreator<T>` |

**Returns:** *`T`*

___

### `Static` _getNative

▸ **_getNative**(`v`: any): *any*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/JavaBase.d.ts:25

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *any*

___

### `Static` _javaClassName

▸ **_javaClassName**(): *string*

*Overrides void*

*Defined in [index/IndexWriter.ts:16](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/IndexWriter.ts#L16)*

**Returns:** *string*

___

### `Static` class

▸ **class**(`className`: string): *`Class<any>`*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:20

this is similar to SomeClass.class but user must pass classname because of limitations/ bad design

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |

**Returns:** *`Class<any>`*