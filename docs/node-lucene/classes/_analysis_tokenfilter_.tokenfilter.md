> **[node-lucene](../README.md)**

[Globals](../README.md) / ["analysis/TokenFilter"](../modules/_analysis_tokenfilter_.md) / [TokenFilter](_analysis_tokenfilter_.tokenfilter.md) /

# Class: TokenFilter

## Hierarchy

  * [TokenStream](_analysis_tokenstream_.tokenstream.md)

  * **TokenFilter**

  * [WordDelimiterGraphFilter](_analysis_miscellaneous_worddelimitergraphfilter_.worddelimitergraphfilter.md)

## Implements

* `IJavaBase`
* `Closeable`

## Index

### Constructors

* [constructor](_analysis_tokenfilter_.tokenfilter.md#constructor)

### Properties

* [_java](_analysis_tokenfilter_.tokenfilter.md#_java)

### Methods

* [_javaClassName](_analysis_tokenfilter_.tokenfilter.md#_javaclassname)
* [close](_analysis_tokenfilter_.tokenfilter.md#close)
* [end](_analysis_tokenfilter_.tokenfilter.md#end)
* [equals](_analysis_tokenfilter_.tokenfilter.md#equals)
* [equalsAsync](_analysis_tokenfilter_.tokenfilter.md#equalsasync)
* [equalsPromise](_analysis_tokenfilter_.tokenfilter.md#equalspromise)
* [equalsSync](_analysis_tokenfilter_.tokenfilter.md#equalssync)
* [getClass](_analysis_tokenfilter_.tokenfilter.md#getclass)
* [hashCode](_analysis_tokenfilter_.tokenfilter.md#hashcode)
* [incrementToken](_analysis_tokenfilter_.tokenfilter.md#incrementtoken)
* [reflectAsString](_analysis_tokenfilter_.tokenfilter.md#reflectasstring)
* [reset](_analysis_tokenfilter_.tokenfilter.md#reset)
* [toString](_analysis_tokenfilter_.tokenfilter.md#tostring)
* [toStringAsync](_analysis_tokenfilter_.tokenfilter.md#tostringasync)
* [toStringPromise](_analysis_tokenfilter_.tokenfilter.md#tostringpromise)
* [toStringSync](_analysis_tokenfilter_.tokenfilter.md#tostringsync)
* [_buildArraySync](_analysis_tokenfilter_.tokenfilter.md#static-_buildarraysync)
* [_buildAsync](_analysis_tokenfilter_.tokenfilter.md#static-protected-_buildasync)
* [_buildJavaArray](_analysis_tokenfilter_.tokenfilter.md#static-_buildjavaarray)
* [_buildPromise](_analysis_tokenfilter_.tokenfilter.md#static-protected-_buildpromise)
* [_buildSync](_analysis_tokenfilter_.tokenfilter.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_analysis_tokenfilter_.tokenfilter.md#static-protected-_buildsyncorthrow)
* [_getNative](_analysis_tokenfilter_.tokenfilter.md#static-_getnative)
* [_javaClassName](_analysis_tokenfilter_.tokenfilter.md#static-_javaclassname)
* [class](_analysis_tokenfilter_.tokenfilter.md#static-class)

## Constructors

###  constructor

\+ **new TokenFilter**(): *[TokenFilter](_analysis_tokenfilter_.tokenfilter.md)*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/lang/Object.d.ts:4

**Returns:** *[TokenFilter](_analysis_tokenfilter_.tokenfilter.md)*

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

*Inherited from [AttributeSource](_util_attributesource_.attributesource.md).[close](_util_attributesource_.attributesource.md#close)*

*Defined in [util/AttributeSource.ts:4](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/util/AttributeSource.ts#L4)*

**Returns:** *void*

___

###  end

▸ **end**(): *void*

*Inherited from [AttributeSource](_util_attributesource_.attributesource.md).[end](_util_attributesource_.attributesource.md#end)*

*Defined in [util/AttributeSource.ts:10](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/util/AttributeSource.ts#L10)*

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

###  incrementToken

▸ **incrementToken**(): *boolean*

*Inherited from [TokenStream](_analysis_tokenstream_.tokenstream.md).[incrementToken](_analysis_tokenstream_.tokenstream.md#incrementtoken)*

*Defined in [analysis/TokenStream.ts:4](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/analysis/TokenStream.ts#L4)*

**Returns:** *boolean*

___

###  reflectAsString

▸ **reflectAsString**(`prependAttClass`: boolean): *string*

*Inherited from [TokenStream](_analysis_tokenstream_.tokenstream.md).[reflectAsString](_analysis_tokenstream_.tokenstream.md#reflectasstring)*

*Defined in [analysis/TokenStream.ts:7](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/analysis/TokenStream.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`prependAttClass` | boolean |

**Returns:** *string*

___

###  reset

▸ **reset**(): *void*

*Inherited from [AttributeSource](_util_attributesource_.attributesource.md).[reset](_util_attributesource_.attributesource.md#reset)*

*Defined in [util/AttributeSource.ts:7](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/util/AttributeSource.ts#L7)*

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

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-lucene/node_modules/node-java-rt/dist/src/java/JavaBase.d.ts:7

**`internal`** 

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