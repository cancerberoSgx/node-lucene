> **[node-lucene](../README.md)**

[Globals](../README.md) / ["queryparser/classic/QueryParser"](../modules/_queryparser_classic_queryparser_.md) / [QueryParser](_queryparser_classic_queryparser_.queryparser.md) /

# Class: QueryParser

## Hierarchy

  * [QueryParserBase](_queryparser_classic_queryparserbase_.queryparserbase.md)

  * **QueryParser**

## Implements

* `IJavaBase`

## Index

### Constructors

* [constructor](_queryparser_classic_queryparser_.queryparser.md#constructor)

### Properties

* [_java](_queryparser_classic_queryparser_.queryparser.md#_java)

### Methods

* [_javaClassName](_queryparser_classic_queryparser_.queryparser.md#_javaclassname)
* [equals](_queryparser_classic_queryparser_.queryparser.md#equals)
* [equalsAsync](_queryparser_classic_queryparser_.queryparser.md#equalsasync)
* [equalsPromise](_queryparser_classic_queryparser_.queryparser.md#equalspromise)
* [equalsSync](_queryparser_classic_queryparser_.queryparser.md#equalssync)
* [getClass](_queryparser_classic_queryparser_.queryparser.md#getclass)
* [hashCode](_queryparser_classic_queryparser_.queryparser.md#hashcode)
* [parse](_queryparser_classic_queryparser_.queryparser.md#parse)
* [parseAsync](_queryparser_classic_queryparser_.queryparser.md#parseasync)
* [parsePromise](_queryparser_classic_queryparser_.queryparser.md#parsepromise)
* [parseSync](_queryparser_classic_queryparser_.queryparser.md#parsesync)
* [toString](_queryparser_classic_queryparser_.queryparser.md#tostring)
* [toStringAsync](_queryparser_classic_queryparser_.queryparser.md#tostringasync)
* [toStringPromise](_queryparser_classic_queryparser_.queryparser.md#tostringpromise)
* [toStringSync](_queryparser_classic_queryparser_.queryparser.md#tostringsync)
* [_buildArraySync](_queryparser_classic_queryparser_.queryparser.md#static-_buildarraysync)
* [_buildAsync](_queryparser_classic_queryparser_.queryparser.md#static-protected-_buildasync)
* [_buildJavaArray](_queryparser_classic_queryparser_.queryparser.md#static-_buildjavaarray)
* [_buildPromise](_queryparser_classic_queryparser_.queryparser.md#static-protected-_buildpromise)
* [_buildSync](_queryparser_classic_queryparser_.queryparser.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_queryparser_classic_queryparser_.queryparser.md#static-protected-_buildsyncorthrow)
* [_getNative](_queryparser_classic_queryparser_.queryparser.md#static-_getnative)
* [_javaClassName](_queryparser_classic_queryparser_.queryparser.md#static-_javaclassname)
* [class](_queryparser_classic_queryparser_.queryparser.md#static-class)

## Constructors

###  constructor

\+ **new QueryParser**(`fieldName`: string, `analyzer`: [Analyzer](_analysis_analyzer_.analyzer.md)): *[QueryParser](_queryparser_classic_queryparser_.queryparser.md)*

*Overrides void*

*Defined in [queryparser/classic/QueryParser.ts:7](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/queryparser/classic/QueryParser.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`fieldName` | string |
`analyzer` | [Analyzer](_analysis_analyzer_.analyzer.md) |

**Returns:** *[QueryParser](_queryparser_classic_queryparser_.queryparser.md)*

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

###  parse

▸ **parse**(`queryString`: string): *[Query](_search_query_.query.md)*

*Defined in [queryparser/classic/QueryParser.ts:20](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/queryparser/classic/QueryParser.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`queryString` | string |

**Returns:** *[Query](_search_query_.query.md)*

___

###  parseAsync

▸ **parseAsync**(`queryString`: string, `callback`: `Callback<Query>`): *void*

*Defined in [queryparser/classic/QueryParser.ts:23](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/queryparser/classic/QueryParser.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`queryString` | string |
`callback` | `Callback<Query>` |

**Returns:** *void*

___

###  parsePromise

▸ **parsePromise**(`queryString`: string): *`Promise<Query>`*

*Defined in [queryparser/classic/QueryParser.ts:26](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/queryparser/classic/QueryParser.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`queryString` | string |

**Returns:** *`Promise<Query>`*

___

###  parseSync

▸ **parseSync**(`queryString`: string): *[Query](_search_query_.query.md)*

*Defined in [queryparser/classic/QueryParser.ts:17](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/queryparser/classic/QueryParser.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`queryString` | string |

**Returns:** *[Query](_search_query_.query.md)*

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

*Defined in [queryparser/classic/QueryParser.ts:13](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/queryparser/classic/QueryParser.ts#L13)*

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