> **[node-lucene](../README.md)**

[Globals](../README.md) / ["document/Document"](../modules/_document_document_.md) / [Document](_document_document_.document.md) /

# Class: Document

Documents are the unit of indexing and search. A Document is a set of fields. Each field has a name and a
textual value. A field may be stored with the document, in which case it is returned with search hits on
the document. Thus each document should typically contain one or more stored fields which uniquely identify
it.

Note that fields which are not stored are not available in documents retrieved from the index, e.g. with
ScoreDoc.doc or IndexReader.document(int).

## Hierarchy

* `Object_`

  * **Document**

## Implements

* `IJavaBase`
* `Iterable<IndexableField>`

## Index

### Constructors

* [constructor](_document_document_.document.md#constructor)

### Properties

* [_java](_document_document_.document.md#_java)

### Methods

* [_javaClassName](_document_document_.document.md#_javaclassname)
* [add](_document_document_.document.md#add)
* [addAsync](_document_document_.document.md#addasync)
* [addPromise](_document_document_.document.md#addpromise)
* [addSync](_document_document_.document.md#addsync)
* [equals](_document_document_.document.md#equals)
* [equalsAsync](_document_document_.document.md#equalsasync)
* [equalsPromise](_document_document_.document.md#equalspromise)
* [equalsSync](_document_document_.document.md#equalssync)
* [get](_document_document_.document.md#get)
* [getClass](_document_document_.document.md#getclass)
* [getField](_document_document_.document.md#getfield)
* [getFieldAsync](_document_document_.document.md#getfieldasync)
* [getFieldPromise](_document_document_.document.md#getfieldpromise)
* [getFieldSync](_document_document_.document.md#getfieldsync)
* [getPromise](_document_document_.document.md#getpromise)
* [getSync](_document_document_.document.md#getsync)
* [hashCode](_document_document_.document.md#hashcode)
* [iterator](_document_document_.document.md#iterator)
* [removeField](_document_document_.document.md#removefield)
* [removeFieldAsync](_document_document_.document.md#removefieldasync)
* [removeFieldPromise](_document_document_.document.md#removefieldpromise)
* [removeFieldSync](_document_document_.document.md#removefieldsync)
* [toString](_document_document_.document.md#tostring)
* [toStringAsync](_document_document_.document.md#tostringasync)
* [toStringPromise](_document_document_.document.md#tostringpromise)
* [toStringSync](_document_document_.document.md#tostringsync)
* [_buildArraySync](_document_document_.document.md#static-_buildarraysync)
* [_buildAsync](_document_document_.document.md#static-protected-_buildasync)
* [_buildJavaArray](_document_document_.document.md#static-_buildjavaarray)
* [_buildPromise](_document_document_.document.md#static-protected-_buildpromise)
* [_buildSync](_document_document_.document.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_document_document_.document.md#static-protected-_buildsyncorthrow)
* [_getNative](_document_document_.document.md#static-_getnative)
* [_javaClassName](_document_document_.document.md#static-_javaclassname)
* [class](_document_document_.document.md#static-class)

## Constructors

###  constructor

\+ **new Document**(): *[Document](_document_document_.document.md)*

*Overrides void*

*Defined in [document/Document.ts:18](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L18)*

**Returns:** *[Document](_document_document_.document.md)*

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

###  add

▸ **add**(`field`: [IndexableField](../interfaces/_index_indexablefield_.indexablefield.md)): *void*

*Defined in [document/Document.ts:41](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [IndexableField](../interfaces/_index_indexablefield_.indexablefield.md) |

**Returns:** *void*

___

###  addAsync

▸ **addAsync**(`field`: [IndexableField](../interfaces/_index_indexablefield_.indexablefield.md), `callback`: `Callback<void>`): *void*

*Defined in [document/Document.ts:44](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [IndexableField](../interfaces/_index_indexablefield_.indexablefield.md) |
`callback` | `Callback<void>` |

**Returns:** *void*

___

###  addPromise

▸ **addPromise**(`field`: [IndexableField](../interfaces/_index_indexablefield_.indexablefield.md)): *`Promise<void>`*

*Defined in [document/Document.ts:47](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [IndexableField](../interfaces/_index_indexablefield_.indexablefield.md) |

**Returns:** *`Promise<void>`*

___

###  addSync

▸ **addSync**(`field`: [IndexableField](../interfaces/_index_indexablefield_.indexablefield.md)): *void*

*Defined in [document/Document.ts:38](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`field` | [IndexableField](../interfaces/_index_indexablefield_.indexablefield.md) |

**Returns:** *void*

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

###  get

▸ **get**(`name`: string): *string*

*Defined in [document/Document.ts:71](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L71)*

Returns the string value of the field with the given name if any exist in this document, or null.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string*

___

###  getClass

▸ **getClass**(): *`Class<any>`*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:16

**Returns:** *`Class<any>`*

___

###  getField

▸ **getField**(`fieldName`: string): *[IndexableField](../interfaces/_index_indexablefield_.indexablefield.md) & `Object_` | null*

*Defined in [document/Document.ts:58](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`fieldName` | string |

**Returns:** *[IndexableField](../interfaces/_index_indexablefield_.indexablefield.md) & `Object_` | null*

___

###  getFieldAsync

▸ **getFieldAsync**(`fieldName`: string, `callback`: `Callback<IndexableField & Object_ | null>`): *function*

*Defined in [document/Document.ts:61](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`fieldName` | string |
`callback` | `Callback<IndexableField & Object_ \| null>` |

**Returns:** *function*

▸ (`error`: any, `javaObject`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`javaObject` | any |

___

###  getFieldPromise

▸ **getFieldPromise**(`fieldName`: string): *`Promise<IndexableField & Object_ | null>`*

*Defined in [document/Document.ts:64](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L64)*

**Parameters:**

Name | Type |
------ | ------ |
`fieldName` | string |

**Returns:** *`Promise<IndexableField & Object_ | null>`*

___

###  getFieldSync

▸ **getFieldSync**(`fieldName`: string): *[IndexableField](../interfaces/_index_indexablefield_.indexablefield.md) & `Object_` | null*

*Defined in [document/Document.ts:55](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`fieldName` | string |

**Returns:** *[IndexableField](../interfaces/_index_indexablefield_.indexablefield.md) & `Object_` | null*

___

###  getPromise

▸ **getPromise**(`name`: string): *`Promise<string>`*

*Defined in [document/Document.ts:77](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *`Promise<string>`*

___

###  getSync

▸ **getSync**(`name`: string): *string*

*Defined in [document/Document.ts:74](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *string*

___

###  hashCode

▸ **hashCode**(): *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:15

**Returns:** *number*

___

###  iterator

▸ **iterator**(): *`Iterator<IndexableField>`*

*Defined in [document/Document.ts:51](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L51)*

**Returns:** *`Iterator<IndexableField>`*

___

###  removeField

▸ **removeField**(`fieldName`: string): *void*

*Defined in [document/Document.ts:28](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`fieldName` | string |

**Returns:** *void*

___

###  removeFieldAsync

▸ **removeFieldAsync**(`fieldName`: string, `callback`: `Callback<void>`): *void*

*Defined in [document/Document.ts:31](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`fieldName` | string |
`callback` | `Callback<void>` |

**Returns:** *void*

___

###  removeFieldPromise

▸ **removeFieldPromise**(`fieldName`: string): *`Promise<void>`*

*Defined in [document/Document.ts:34](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`fieldName` | string |

**Returns:** *`Promise<void>`*

___

###  removeFieldSync

▸ **removeFieldSync**(`fieldName`: string): *void*

*Defined in [document/Document.ts:25](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`fieldName` | string |

**Returns:** *void*

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

*Defined in [document/Document.ts:16](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/document/Document.ts#L16)*

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