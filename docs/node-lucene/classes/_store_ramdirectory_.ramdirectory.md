> **[node-lucene](../README.md)**

[Globals](../README.md) / ["store/RAMDirectory"](../modules/_store_ramdirectory_.md) / [RAMDirectory](_store_ramdirectory_.ramdirectory.md) /

# Class: RAMDirectory

## Hierarchy

  * [BaseDirectory](_store_basedirectory_.basedirectory.md)

  * **RAMDirectory**

## Implements

* `IJavaBase`
* `Closeable`
* [Accountable](../interfaces/_util_accountable_.accountable.md)

## Index

### Constructors

* [constructor](_store_ramdirectory_.ramdirectory.md#constructor)

### Properties

* [_java](_store_ramdirectory_.ramdirectory.md#_java)

### Methods

* [_javaClassName](_store_ramdirectory_.ramdirectory.md#_javaclassname)
* [close](_store_ramdirectory_.ramdirectory.md#close)
* [equals](_store_ramdirectory_.ramdirectory.md#equals)
* [equalsAsync](_store_ramdirectory_.ramdirectory.md#equalsasync)
* [equalsPromise](_store_ramdirectory_.ramdirectory.md#equalspromise)
* [equalsSync](_store_ramdirectory_.ramdirectory.md#equalssync)
* [getClass](_store_ramdirectory_.ramdirectory.md#getclass)
* [hashCode](_store_ramdirectory_.ramdirectory.md#hashcode)
* [ramBytesUsedAsync](_store_ramdirectory_.ramdirectory.md#rambytesusedasync)
* [ramBytesUsedPromise](_store_ramdirectory_.ramdirectory.md#rambytesusedpromise)
* [ramBytesUsedSync](_store_ramdirectory_.ramdirectory.md#rambytesusedsync)
* [toString](_store_ramdirectory_.ramdirectory.md#tostring)
* [toStringAsync](_store_ramdirectory_.ramdirectory.md#tostringasync)
* [toStringPromise](_store_ramdirectory_.ramdirectory.md#tostringpromise)
* [toStringSync](_store_ramdirectory_.ramdirectory.md#tostringsync)
* [_buildArraySync](_store_ramdirectory_.ramdirectory.md#static-_buildarraysync)
* [_buildAsync](_store_ramdirectory_.ramdirectory.md#static-protected-_buildasync)
* [_buildJavaArray](_store_ramdirectory_.ramdirectory.md#static-_buildjavaarray)
* [_buildPromise](_store_ramdirectory_.ramdirectory.md#static-protected-_buildpromise)
* [_buildSync](_store_ramdirectory_.ramdirectory.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_store_ramdirectory_.ramdirectory.md#static-protected-_buildsyncorthrow)
* [_getNative](_store_ramdirectory_.ramdirectory.md#static-_getnative)
* [_javaClassName](_store_ramdirectory_.ramdirectory.md#static-_javaclassname)
* [class](_store_ramdirectory_.ramdirectory.md#static-class)

## Constructors

###  constructor

\+ **new RAMDirectory**(): *[RAMDirectory](_store_ramdirectory_.ramdirectory.md)*

*Overrides void*

*Defined in [store/RAMDirectory.ts:6](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/store/RAMDirectory.ts#L6)*

**Returns:** *[RAMDirectory](_store_ramdirectory_.ramdirectory.md)*

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

###  close

▸ **close**(): *void*

*Inherited from [Directory](_store_directory_.directory.md).[close](_store_directory_.directory.md#close)*

*Defined in [store/Directory.ts:4](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/store/Directory.ts#L4)*

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

###  ramBytesUsedAsync

▸ **ramBytesUsedAsync**(`callback`: `Callback<Long>`): *void*

*Implementation of [Accountable](../interfaces/_util_accountable_.accountable.md)*

*Defined in [store/RAMDirectory.ts:20](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/store/RAMDirectory.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<Long>` |

**Returns:** *void*

___

###  ramBytesUsedPromise

▸ **ramBytesUsedPromise**(): *`Promise<Long>`*

*Implementation of [Accountable](../interfaces/_util_accountable_.accountable.md)*

*Defined in [store/RAMDirectory.ts:24](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/store/RAMDirectory.ts#L24)*

**Returns:** *`Promise<Long>`*

___

###  ramBytesUsedSync

▸ **ramBytesUsedSync**(): *`Long`*

*Implementation of [Accountable](../interfaces/_util_accountable_.accountable.md)*

*Defined in [store/RAMDirectory.ts:16](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/store/RAMDirectory.ts#L16)*

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

*Defined in [store/RAMDirectory.ts:12](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/store/RAMDirectory.ts#L12)*

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