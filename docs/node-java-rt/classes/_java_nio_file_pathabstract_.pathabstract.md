> **[node-java-rt](../README.md)**

[Globals](../README.md) / ["java/nio/file/PathAbstract"](../modules/_java_nio_file_pathabstract_.md) / [PathAbstract](_java_nio_file_pathabstract_.pathabstract.md) /

# Class: PathAbstract

## Hierarchy

  * [Object_](_java_lang_object_.object_.md)

  * **PathAbstract**

## Implements

* [IJavaBase](../interfaces/_java_ijavabase_.ijavabase.md)
* [Path](../interfaces/_java_nio_file_path_.path.md)

## Index

### Constructors

* [constructor](_java_nio_file_pathabstract_.pathabstract.md#constructor)

### Properties

* [_java](_java_nio_file_pathabstract_.pathabstract.md#_java)

### Methods

* [__@iterator](_java_nio_file_pathabstract_.pathabstract.md#__@iterator)
* [_javaClassName](_java_nio_file_pathabstract_.pathabstract.md#_javaclassname)
* [compareTo](_java_nio_file_pathabstract_.pathabstract.md#compareto)
* [equals](_java_nio_file_pathabstract_.pathabstract.md#equals)
* [equalsAsync](_java_nio_file_pathabstract_.pathabstract.md#equalsasync)
* [equalsPromise](_java_nio_file_pathabstract_.pathabstract.md#equalspromise)
* [equalsSync](_java_nio_file_pathabstract_.pathabstract.md#equalssync)
* [getClass](_java_nio_file_pathabstract_.pathabstract.md#getclass)
* [hashCode](_java_nio_file_pathabstract_.pathabstract.md#hashcode)
* [toString](_java_nio_file_pathabstract_.pathabstract.md#tostring)
* [toStringAsync](_java_nio_file_pathabstract_.pathabstract.md#tostringasync)
* [toStringPromise](_java_nio_file_pathabstract_.pathabstract.md#tostringpromise)
* [toStringSync](_java_nio_file_pathabstract_.pathabstract.md#tostringsync)
* [_buildArraySync](_java_nio_file_pathabstract_.pathabstract.md#static-_buildarraysync)
* [_buildAsync](_java_nio_file_pathabstract_.pathabstract.md#static-protected-_buildasync)
* [_buildJavaArray](_java_nio_file_pathabstract_.pathabstract.md#static-_buildjavaarray)
* [_buildPromise](_java_nio_file_pathabstract_.pathabstract.md#static-protected-_buildpromise)
* [_buildSync](_java_nio_file_pathabstract_.pathabstract.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_java_nio_file_pathabstract_.pathabstract.md#static-protected-_buildsyncorthrow)
* [_getNative](_java_nio_file_pathabstract_.pathabstract.md#static-_getnative)
* [_javaClassName](_java_nio_file_pathabstract_.pathabstract.md#static-_javaclassname)
* [class](_java_nio_file_pathabstract_.pathabstract.md#static-class)

## Constructors

###  constructor

\+ **new PathAbstract**(): *[PathAbstract](_java_nio_file_pathabstract_.pathabstract.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[constructor](_java_lang_object_.object_.md#constructor)*

*Defined in [java/lang/Object.ts:6](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L6)*

**Returns:** *[PathAbstract](_java_nio_file_pathabstract_.pathabstract.md)*

## Properties

###  _java

• **_java**: *any*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md).[_java](../interfaces/_java_nio_file_path_.path.md#_java)*

*Overrides [JavaBase](_java_javabase_.javabase.md).[_java](_java_javabase_.javabase.md#_java)*

*Defined in [java/nio/file/PathAbstract.ts:11](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/nio/file/PathAbstract.ts#L11)*

## Methods

###  __@iterator

▸ **__@iterator**(): *`Iterator<Path>`*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Defined in [java/nio/file/PathAbstract.ts:8](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/nio/file/PathAbstract.ts#L8)*

**Returns:** *`Iterator<Path>`*

___

###  _javaClassName

▸ **_javaClassName**(): *string*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[_javaClassName](_java_lang_object_.object_.md#_javaclassname)*

*Overrides [JavaBase](_java_javabase_.javabase.md).[_javaClassName](_java_javabase_.javabase.md#abstract-_javaclassname)*

*Defined in [java/lang/Object.ts:12](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L12)*

**Returns:** *string*

___

###  compareTo

▸ **compareTo**(`t`: [Path](../interfaces/_java_nio_file_path_.path.md)): *number*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Defined in [java/nio/file/PathAbstract.ts:5](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/nio/file/PathAbstract.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | [Path](../interfaces/_java_nio_file_path_.path.md) |

**Returns:** *number*

___

###  equals

▸ **equals**(`value`: [JavaBase](_java_javabase_.javabase.md)): *boolean*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[equals](_java_lang_object_.object_.md#equals)*

*Defined in [java/lang/Object.ts:32](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JavaBase](_java_javabase_.javabase.md) |

**Returns:** *boolean*

___

###  equalsAsync

▸ **equalsAsync**(`value`: [JavaBase](_java_javabase_.javabase.md), `c`: [Callback](../modules/_java_types_.md#callback)‹*boolean*›): *void*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[equalsAsync](_java_lang_object_.object_.md#equalsasync)*

*Defined in [java/lang/Object.ts:35](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JavaBase](_java_javabase_.javabase.md) |
`c` | [Callback](../modules/_java_types_.md#callback)‹*boolean*› |

**Returns:** *void*

___

###  equalsPromise

▸ **equalsPromise**(`value`: [JavaBase](_java_javabase_.javabase.md)): *`Promise<boolean>`*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[equalsPromise](_java_lang_object_.object_.md#equalspromise)*

*Defined in [java/lang/Object.ts:38](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JavaBase](_java_javabase_.javabase.md) |

**Returns:** *`Promise<boolean>`*

___

###  equalsSync

▸ **equalsSync**(`value`: [JavaBase](_java_javabase_.javabase.md)): *boolean*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[equalsSync](_java_lang_object_.object_.md#equalssync)*

*Defined in [java/lang/Object.ts:29](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JavaBase](_java_javabase_.javabase.md) |

**Returns:** *boolean*

___

###  getClass

▸ **getClass**(): *[Class](_java_lang_class_.class.md)‹*any*›*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[getClass](_java_lang_object_.object_.md#getclass)*

*Defined in [java/lang/Object.ts:46](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L46)*

**Returns:** *[Class](_java_lang_class_.class.md)‹*any*›*

___

###  hashCode

▸ **hashCode**(): *number*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[hashCode](_java_lang_object_.object_.md#hashcode)*

*Defined in [java/lang/Object.ts:42](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L42)*

**Returns:** *number*

___

###  toString

▸ **toString**(): *string*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[toString](_java_lang_object_.object_.md#tostring)*

*Defined in [java/lang/Object.ts:19](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L19)*

**Returns:** *string*

___

###  toStringAsync

▸ **toStringAsync**(`c`: [Callback](../modules/_java_types_.md#callback)‹*string*›): *void*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[toStringAsync](_java_lang_object_.object_.md#tostringasync)*

*Defined in [java/lang/Object.ts:22](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Callback](../modules/_java_types_.md#callback)‹*string*› |

**Returns:** *void*

___

###  toStringPromise

▸ **toStringPromise**(): *`Promise<string>`*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[toStringPromise](_java_lang_object_.object_.md#tostringpromise)*

*Defined in [java/lang/Object.ts:25](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L25)*

**Returns:** *`Promise<string>`*

___

###  toStringSync

▸ **toStringSync**(): *string*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[toStringSync](_java_lang_object_.object_.md#tostringsync)*

*Defined in [java/lang/Object.ts:16](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L16)*

**Returns:** *string*

___

### `Static` _buildArraySync

▸ **_buildArraySync**<**T**>(`javaArray`: any, `createInstance`: [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*›): *`T`[]*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [JavaBase](_java_javabase_.javabase.md).[_buildArraySync](_java_javabase_.javabase.md#static-_buildarraysync)*

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

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [JavaBase](_java_javabase_.javabase.md).[_buildAsync](_java_javabase_.javabase.md#static-protected-_buildasync)*

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

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [JavaBase](_java_javabase_.javabase.md).[_buildJavaArray](_java_javabase_.javabase.md#static-_buildjavaarray)*

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

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [JavaBase](_java_javabase_.javabase.md).[_buildPromise](_java_javabase_.javabase.md#static-protected-_buildpromise)*

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

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [JavaBase](_java_javabase_.javabase.md).[_buildSync](_java_javabase_.javabase.md#static-protected-_buildsync)*

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

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [JavaBase](_java_javabase_.javabase.md).[_buildSyncOrThrow](_java_javabase_.javabase.md#static-protected-_buildsyncorthrow)*

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

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [JavaBase](_java_javabase_.javabase.md).[_getNative](_java_javabase_.javabase.md#static-_getnative)*

*Defined in [java/JavaBase.ts:76](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | any |

**Returns:** *any*

___

### `Static` _javaClassName

▸ **_javaClassName**(): *string*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [JavaBase](_java_javabase_.javabase.md).[_javaClassName](_java_javabase_.javabase.md#static-_javaclassname)*

*Defined in [java/JavaBase.ts:10](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L10)*

**`internal`** 

**Returns:** *string*

___

### `Static` class

▸ **class**(`className`: string): *[Class](_java_lang_class_.class.md)‹*any*›*

*Implementation of [Path](../interfaces/_java_nio_file_path_.path.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[class](_java_lang_object_.object_.md#static-class)*

*Defined in [java/lang/Object.ts:53](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L53)*

this is similar to SomeClass.class but user must pass classname because of limitations/ bad design

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |

**Returns:** *[Class](_java_lang_class_.class.md)‹*any*›*