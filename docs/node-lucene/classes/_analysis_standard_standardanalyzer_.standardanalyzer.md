> **[node-lucene](../README.md)**

[Globals](../README.md) / ["analysis/standard/StandardAnalyzer"](../modules/_analysis_standard_standardanalyzer_.md) / [StandardAnalyzer](_analysis_standard_standardanalyzer_.standardanalyzer.md) /

# Class: StandardAnalyzer

## Hierarchy

  * [Analyzer](_analysis_analyzer_.analyzer.md)

  * **StandardAnalyzer**

## Implements

* `IJavaBase`
* `Closeable`

## Index

### Constructors

* [constructor](_analysis_standard_standardanalyzer_.standardanalyzer.md#constructor)

### Properties

* [_java](_analysis_standard_standardanalyzer_.standardanalyzer.md#_java)

### Methods

* [_javaClassName](_analysis_standard_standardanalyzer_.standardanalyzer.md#_javaclassname)
* [close](_analysis_standard_standardanalyzer_.standardanalyzer.md#close)
* [equals](_analysis_standard_standardanalyzer_.standardanalyzer.md#equals)
* [equalsAsync](_analysis_standard_standardanalyzer_.standardanalyzer.md#equalsasync)
* [equalsPromise](_analysis_standard_standardanalyzer_.standardanalyzer.md#equalspromise)
* [equalsSync](_analysis_standard_standardanalyzer_.standardanalyzer.md#equalssync)
* [getClass](_analysis_standard_standardanalyzer_.standardanalyzer.md#getclass)
* [getMaxTokenLength](_analysis_standard_standardanalyzer_.standardanalyzer.md#getmaxtokenlength)
* [getMaxTokenLengthAsync](_analysis_standard_standardanalyzer_.standardanalyzer.md#getmaxtokenlengthasync)
* [getMaxTokenLengthPromise](_analysis_standard_standardanalyzer_.standardanalyzer.md#getmaxtokenlengthpromise)
* [getMaxTokenLengthSync](_analysis_standard_standardanalyzer_.standardanalyzer.md#getmaxtokenlengthsync)
* [hashCode](_analysis_standard_standardanalyzer_.standardanalyzer.md#hashcode)
* [toString](_analysis_standard_standardanalyzer_.standardanalyzer.md#tostring)
* [toStringAsync](_analysis_standard_standardanalyzer_.standardanalyzer.md#tostringasync)
* [toStringPromise](_analysis_standard_standardanalyzer_.standardanalyzer.md#tostringpromise)
* [toStringSync](_analysis_standard_standardanalyzer_.standardanalyzer.md#tostringsync)
* [tokenStream](_analysis_standard_standardanalyzer_.standardanalyzer.md#tokenstream)
* [_buildArraySync](_analysis_standard_standardanalyzer_.standardanalyzer.md#static-_buildarraysync)
* [_buildAsync](_analysis_standard_standardanalyzer_.standardanalyzer.md#static-protected-_buildasync)
* [_buildJavaArray](_analysis_standard_standardanalyzer_.standardanalyzer.md#static-_buildjavaarray)
* [_buildPromise](_analysis_standard_standardanalyzer_.standardanalyzer.md#static-protected-_buildpromise)
* [_buildSync](_analysis_standard_standardanalyzer_.standardanalyzer.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_analysis_standard_standardanalyzer_.standardanalyzer.md#static-protected-_buildsyncorthrow)
* [_getNative](_analysis_standard_standardanalyzer_.standardanalyzer.md#static-_getnative)
* [_javaClassName](_analysis_standard_standardanalyzer_.standardanalyzer.md#static-_javaclassname)
* [class](_analysis_standard_standardanalyzer_.standardanalyzer.md#static-class)

## Constructors

###  constructor

\+ **new StandardAnalyzer**(): *[StandardAnalyzer](_analysis_standard_standardanalyzer_.standardanalyzer.md)*

*Overrides [Analyzer](_analysis_analyzer_.analyzer.md).[constructor](_analysis_analyzer_.analyzer.md#constructor)*

*Defined in [analysis/standard/StandardAnalyzer.ts:6](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/analysis/standard/StandardAnalyzer.ts#L6)*

**Returns:** *[StandardAnalyzer](_analysis_standard_standardanalyzer_.standardanalyzer.md)*

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

*Overrides [Analyzer](_analysis_analyzer_.analyzer.md).[close](_analysis_analyzer_.analyzer.md#close)*

*Defined in [analysis/standard/StandardAnalyzer.ts:29](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/analysis/standard/StandardAnalyzer.ts#L29)*

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

###  getMaxTokenLength

▸ **getMaxTokenLength**(): *`Long`*

*Defined in [analysis/standard/StandardAnalyzer.ts:19](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/analysis/standard/StandardAnalyzer.ts#L19)*

**Returns:** *`Long`*

___

###  getMaxTokenLengthAsync

▸ **getMaxTokenLengthAsync**(`callback`: `Callback<Long>`): *void*

*Defined in [analysis/standard/StandardAnalyzer.ts:22](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/analysis/standard/StandardAnalyzer.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<Long>` |

**Returns:** *void*

___

###  getMaxTokenLengthPromise

▸ **getMaxTokenLengthPromise**(): *`Promise<Long>`*

*Defined in [analysis/standard/StandardAnalyzer.ts:25](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/analysis/standard/StandardAnalyzer.ts#L25)*

**Returns:** *`Promise<Long>`*

___

###  getMaxTokenLengthSync

▸ **getMaxTokenLengthSync**(): *`Long`*

*Defined in [analysis/standard/StandardAnalyzer.ts:16](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/analysis/standard/StandardAnalyzer.ts#L16)*

**Returns:** *`Long`*

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

###  tokenStream

▸ **tokenStream**(`fieldName`: string, `text`: string): *[TokenStream](_analysis_tokenstream_.tokenstream.md)*

*Defined in [analysis/standard/StandardAnalyzer.ts:33](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/analysis/standard/StandardAnalyzer.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`fieldName` | string |
`text` | string |

**Returns:** *[TokenStream](_analysis_tokenstream_.tokenstream.md)*

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

*Defined in [analysis/standard/StandardAnalyzer.ts:12](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/analysis/standard/StandardAnalyzer.ts#L12)*

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