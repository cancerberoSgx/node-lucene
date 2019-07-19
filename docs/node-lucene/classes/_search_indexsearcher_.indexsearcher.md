> **[node-lucene](../README.md)**

[Globals](../README.md) / ["search/IndexSearcher"](../modules/_search_indexsearcher_.md) / [IndexSearcher](_search_indexsearcher_.indexsearcher.md) /

# Class: IndexSearcher

Implements search over a single IndexReader. Applications usually need only call the inherited
search(Query,int) method. For performance reasons, if your index is unchanging, you should share a single
IndexSearcher instance across multiple searches instead of creating a new one per-search. If your index has
changed and you wish to see the changes reflected in searching, you should use
DirectoryReader.openIfChanged(DirectoryReader) to obtain a new reader and then create a new IndexSearcher
from that. Also, for low-latency turnaround it's best to use a near-real-time reader
(DirectoryReader.open(IndexWriter)). Once you have a new IndexReader, it's relatively cheap to create a new
IndexSearcher from it.

NOTE: IndexSearcher instances are completely thread safe, meaning multiple threads can call any of its
methods, concurrently. If your application requires external synchronization, you should not synchronize on
the IndexSearcher instance; use your own (non-Lucene) objects instead.

## Hierarchy

* `Object_`

  * **IndexSearcher**

## Implements

* `IJavaBase`

## Index

### Constructors

* [constructor](_search_indexsearcher_.indexsearcher.md#constructor)

### Properties

* [_java](_search_indexsearcher_.indexsearcher.md#_java)

### Methods

* [_javaClassName](_search_indexsearcher_.indexsearcher.md#_javaclassname)
* [doc](_search_indexsearcher_.indexsearcher.md#doc)
* [docPromise](_search_indexsearcher_.indexsearcher.md#docpromise)
* [docSync](_search_indexsearcher_.indexsearcher.md#docsync)
* [equals](_search_indexsearcher_.indexsearcher.md#equals)
* [equalsAsync](_search_indexsearcher_.indexsearcher.md#equalsasync)
* [equalsPromise](_search_indexsearcher_.indexsearcher.md#equalspromise)
* [equalsSync](_search_indexsearcher_.indexsearcher.md#equalssync)
* [getClass](_search_indexsearcher_.indexsearcher.md#getclass)
* [hashCode](_search_indexsearcher_.indexsearcher.md#hashcode)
* [search](_search_indexsearcher_.indexsearcher.md#search)
* [searchPromise](_search_indexsearcher_.indexsearcher.md#searchpromise)
* [searchSync](_search_indexsearcher_.indexsearcher.md#searchsync)
* [toString](_search_indexsearcher_.indexsearcher.md#tostring)
* [toStringAsync](_search_indexsearcher_.indexsearcher.md#tostringasync)
* [toStringPromise](_search_indexsearcher_.indexsearcher.md#tostringpromise)
* [toStringSync](_search_indexsearcher_.indexsearcher.md#tostringsync)
* [_buildArraySync](_search_indexsearcher_.indexsearcher.md#static-_buildarraysync)
* [_buildAsync](_search_indexsearcher_.indexsearcher.md#static-protected-_buildasync)
* [_buildJavaArray](_search_indexsearcher_.indexsearcher.md#static-_buildjavaarray)
* [_buildPromise](_search_indexsearcher_.indexsearcher.md#static-protected-_buildpromise)
* [_buildSync](_search_indexsearcher_.indexsearcher.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_search_indexsearcher_.indexsearcher.md#static-protected-_buildsyncorthrow)
* [_getNative](_search_indexsearcher_.indexsearcher.md#static-_getnative)
* [_javaClassName](_search_indexsearcher_.indexsearcher.md#static-_javaclassname)
* [class](_search_indexsearcher_.indexsearcher.md#static-class)

## Constructors

###  constructor

\+ **new IndexSearcher**(`r`: [IndexReader](_index_indexreader_.indexreader.md)): *[IndexSearcher](_search_indexsearcher_.indexsearcher.md)*

*Overrides void*

*Defined in [search/IndexSearcher.ts:21](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/search/IndexSearcher.ts#L21)*

Creates a searcher searching the provided index.

**Parameters:**

Name | Type |
------ | ------ |
`r` | [IndexReader](_index_indexreader_.indexreader.md) |

**Returns:** *[IndexSearcher](_search_indexsearcher_.indexsearcher.md)*

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

###  doc

▸ **doc**(`docId`: number): *[Document](_document_document_.document.md)*

*Defined in [search/IndexSearcher.ts:48](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/search/IndexSearcher.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`docId` | number |

**Returns:** *[Document](_document_document_.document.md)*

___

###  docPromise

▸ **docPromise**(`docId`: number): *`Promise<Document>`*

*Defined in [search/IndexSearcher.ts:51](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/search/IndexSearcher.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`docId` | number |

**Returns:** *`Promise<Document>`*

___

###  docSync

▸ **docSync**(`docId`: number): *[Document](_document_document_.document.md)*

*Defined in [search/IndexSearcher.ts:45](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/search/IndexSearcher.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`docId` | number |

**Returns:** *[Document](_document_document_.document.md)*

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

###  search

▸ **search**(`query`: [Query](_search_query_.query.md), `n`: number): *[TopDocs](_search_topdocs_.topdocs.md)*

*Defined in [search/IndexSearcher.ts:37](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/search/IndexSearcher.ts#L37)*

Finds the top n hits for query.

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Query](_search_query_.query.md) |
`n` | number |

**Returns:** *[TopDocs](_search_topdocs_.topdocs.md)*

___

###  searchPromise

▸ **searchPromise**(`query`: [Query](_search_query_.query.md), `n`: number): *`Promise<TopDocs>`*

*Defined in [search/IndexSearcher.ts:41](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/search/IndexSearcher.ts#L41)*

Finds the top n hits for query.

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Query](_search_query_.query.md) |
`n` | number |

**Returns:** *`Promise<TopDocs>`*

___

###  searchSync

▸ **searchSync**(`query`: [Query](_search_query_.query.md), `n`: number): *[TopDocs](_search_topdocs_.topdocs.md)*

*Defined in [search/IndexSearcher.ts:33](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/search/IndexSearcher.ts#L33)*

Finds the top n hits for query.

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Query](_search_query_.query.md) |
`n` | number |

**Returns:** *[TopDocs](_search_topdocs_.topdocs.md)*

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

*Defined in [search/IndexSearcher.ts:28](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/search/IndexSearcher.ts#L28)*

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