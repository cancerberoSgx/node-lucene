> **[node-lucene](../README.md)**

[Globals](../README.md) / ["index/Term"](../modules/_index_term_.md) / [Term](_index_term_.term.md) /

# Class: Term

## Hierarchy

* `Object_`

  * **Term**

## Implements

* `IJavaBase`
* `Comparable<Term>`

## Index

### Constructors

* [constructor](_index_term_.term.md#constructor)

### Properties

* [_java](_index_term_.term.md#_java)

### Methods

* [_javaClassName](_index_term_.term.md#_javaclassname)
* [compareTo](_index_term_.term.md#compareto)
* [equals](_index_term_.term.md#equals)
* [equalsAsync](_index_term_.term.md#equalsasync)
* [equalsPromise](_index_term_.term.md#equalspromise)
* [equalsSync](_index_term_.term.md#equalssync)
* [getClass](_index_term_.term.md#getclass)
* [hashCode](_index_term_.term.md#hashcode)
* [toString](_index_term_.term.md#tostring)
* [toStringAsync](_index_term_.term.md#tostringasync)
* [toStringPromise](_index_term_.term.md#tostringpromise)
* [toStringSync](_index_term_.term.md#tostringsync)
* [_buildArraySync](_index_term_.term.md#static-_buildarraysync)
* [_buildAsync](_index_term_.term.md#static-protected-_buildasync)
* [_buildJavaArray](_index_term_.term.md#static-_buildjavaarray)
* [_buildPromise](_index_term_.term.md#static-protected-_buildpromise)
* [_buildSync](_index_term_.term.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_index_term_.term.md#static-protected-_buildsyncorthrow)
* [_getNative](_index_term_.term.md#static-_getnative)
* [_javaClassName](_index_term_.term.md#static-_javaclassname)
* [class](_index_term_.term.md#static-class)

## Constructors

###  constructor

\+ **new Term**(`fld`: string, `text?`: string): *[Term](_index_term_.term.md)*

*Overrides void*

*Defined in [index/Term.ts:7](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/Term.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`fld` | string |
`text?` | string |

**Returns:** *[Term](_index_term_.term.md)*

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

###  compareTo

▸ **compareTo**(`t`: [Term](_index_term_.term.md)): *number*

*Defined in [index/Term.ts:14](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/Term.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | [Term](_index_term_.term.md) |

**Returns:** *number*

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

*Defined in [index/Term.ts:5](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/index/Term.ts#L5)*

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