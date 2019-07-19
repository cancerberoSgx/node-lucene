> **[node-java-rt](../README.md)**

[Globals](../README.md) / ["java/JavaBase"](../modules/_java_javabase_.md) / [JavaBase](_java_javabase_.javabase.md) /

# Class: JavaBase

## Hierarchy

* **JavaBase**

  * [Object_](_java_lang_object_.object_.md)

## Implements

* [IJavaBase](../interfaces/_java_ijavabase_.ijavabase.md)

## Index

### Properties

* [_java](_java_javabase_.javabase.md#_java)

### Methods

* [_javaClassName](_java_javabase_.javabase.md#abstract-_javaclassname)
* [_buildArraySync](_java_javabase_.javabase.md#static-_buildarraysync)
* [_buildAsync](_java_javabase_.javabase.md#static-protected-_buildasync)
* [_buildJavaArray](_java_javabase_.javabase.md#static-_buildjavaarray)
* [_buildPromise](_java_javabase_.javabase.md#static-protected-_buildpromise)
* [_buildSync](_java_javabase_.javabase.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_java_javabase_.javabase.md#static-protected-_buildsyncorthrow)
* [_getNative](_java_javabase_.javabase.md#static-_getnative)
* [_javaClassName](_java_javabase_.javabase.md#static-_javaclassname)

## Properties

###  _java

• **_java**: *any*

*Implementation of [IJavaBase](../interfaces/_java_ijavabase_.ijavabase.md).[_java](../interfaces/_java_ijavabase_.ijavabase.md#_java)*

*Defined in [java/JavaBase.ts:18](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L18)*

Reference to the Java Object associated with this instance

**`internal`** 

## Methods

### `Abstract` _javaClassName

▸ **_javaClassName**(): *string*

*Implementation of [IJavaBase](../interfaces/_java_ijavabase_.ijavabase.md)*

*Defined in [java/JavaBase.ts:7](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L7)*

**`internal`** 

**Returns:** *string*

___

### `Static` _buildArraySync

▸ **_buildArraySync**<**T**>(`javaArray`: any, `createInstance`: [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*›): *`T`[]*

*Defined in [java/JavaBase.ts:61](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L61)*

**`internal`** 

**Type parameters:**

▪ **T**: *[JavaBase](_java_javabase_.javabase.md)*

**Parameters:**

Name | Type |
------ | ------ |
`javaArray` | any |
`createInstance` | [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*› |

**Returns:** *`T`[]*

___

### `Static` `Protected` _buildAsync

▸ **_buildAsync**<**T**>(`callback`: [Callback](../modules/_java_types_.md#callback)‹*`T` | null*›, `instance`: `T` | [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*›): *function*

*Defined in [java/JavaBase.ts:43](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L43)*

**`internal`** 

**Type parameters:**

▪ **T**: *[JavaBase](_java_javabase_.javabase.md)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [Callback](../modules/_java_types_.md#callback)‹*`T` \| null*› |
`instance` | `T` \| [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*› |

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

*Defined in [java/JavaBase.ts:72](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L72)*

**`internal`** 

**Type parameters:**

▪ **T**: *[JavaBase](_java_javabase_.javabase.md)*

**Parameters:**

Name | Type |
------ | ------ |
`jsArray` | `T`[] |
`className` | string |

**Returns:** *any*

___

### `Static` `Protected` _buildPromise

▸ **_buildPromise**<**T**>(`p`: `Promise<any>`, `instance`: `T` | [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*›): *`Promise<T | null>`*

*Defined in [java/JavaBase.ts:51](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L51)*

**`internal`** 

**Type parameters:**

▪ **T**: *[JavaBase](_java_javabase_.javabase.md)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | `Promise<any>` |
`instance` | `T` \| [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*› |

**Returns:** *`Promise<T | null>`*

___

### `Static` `Protected` _buildSync

▸ **_buildSync**<**T**>(`javaObject`: any, `instance`: `T` | [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*›): *`T` | null*

*Defined in [java/JavaBase.ts:21](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L21)*

**`internal`** 

**Type parameters:**

▪ **T**: *[JavaBase](_java_javabase_.javabase.md)*

**Parameters:**

Name | Type |
------ | ------ |
`javaObject` | any |
`instance` | `T` \| [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*› |

**Returns:** *`T` | null*

___

### `Static` `Protected` _buildSyncOrThrow

▸ **_buildSyncOrThrow**<**T**>(`javaObject`: any, `instance`: `T` | [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*›): *`T`*

*Defined in [java/JavaBase.ts:32](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L32)*

**`internal`** 

**Type parameters:**

▪ **T**: *[JavaBase](_java_javabase_.javabase.md)*

**Parameters:**

Name | Type |
------ | ------ |
`javaObject` | any |
`instance` | `T` \| [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*› |

**Returns:** *`T`*

___

### `Static` _getNative

▸ **_getNative**(`v`: any): *any*

*Defined in [java/JavaBase.ts:76](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *any*

___

### `Static` _javaClassName

▸ **_javaClassName**(): *string*

*Defined in [java/JavaBase.ts:10](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L10)*

**`internal`** 

**Returns:** *string*