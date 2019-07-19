> **[node-java-rt](../README.md)**

[Globals](../README.md) / ["java/lang/Runtime"](../modules/_java_lang_runtime_.md) / [Runtime](_java_lang_runtime_.runtime.md) /

# Class: Runtime

## Hierarchy

  * [Object_](_java_lang_object_.object_.md)

  * **Runtime**

## Implements

* [IJavaBase](../interfaces/_java_ijavabase_.ijavabase.md)

## Index

### Constructors

* [constructor](_java_lang_runtime_.runtime.md#constructor)

### Properties

* [_java](_java_lang_runtime_.runtime.md#_java)

### Methods

* [_javaClassName](_java_lang_runtime_.runtime.md#_javaclassname)
* [addShutdownHook](_java_lang_runtime_.runtime.md#addshutdownhook)
* [availableProcessors](_java_lang_runtime_.runtime.md#availableprocessors)
* [equals](_java_lang_runtime_.runtime.md#equals)
* [equalsAsync](_java_lang_runtime_.runtime.md#equalsasync)
* [equalsPromise](_java_lang_runtime_.runtime.md#equalspromise)
* [equalsSync](_java_lang_runtime_.runtime.md#equalssync)
* [getClass](_java_lang_runtime_.runtime.md#getclass)
* [hashCode](_java_lang_runtime_.runtime.md#hashcode)
* [toString](_java_lang_runtime_.runtime.md#tostring)
* [toStringAsync](_java_lang_runtime_.runtime.md#tostringasync)
* [toStringPromise](_java_lang_runtime_.runtime.md#tostringpromise)
* [toStringSync](_java_lang_runtime_.runtime.md#tostringsync)
* [_buildArraySync](_java_lang_runtime_.runtime.md#static-_buildarraysync)
* [_buildAsync](_java_lang_runtime_.runtime.md#static-protected-_buildasync)
* [_buildJavaArray](_java_lang_runtime_.runtime.md#static-_buildjavaarray)
* [_buildPromise](_java_lang_runtime_.runtime.md#static-protected-_buildpromise)
* [_buildSync](_java_lang_runtime_.runtime.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_java_lang_runtime_.runtime.md#static-protected-_buildsyncorthrow)
* [_getNative](_java_lang_runtime_.runtime.md#static-_getnative)
* [_javaClassName](_java_lang_runtime_.runtime.md#static-_javaclassname)
* [class](_java_lang_runtime_.runtime.md#static-class)
* [getRuntime](_java_lang_runtime_.runtime.md#static-getruntime)

## Constructors

###  constructor

\+ **new Runtime**(): *[Runtime](_java_lang_runtime_.runtime.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[constructor](_java_lang_object_.object_.md#constructor)*

*Defined in [java/lang/Object.ts:6](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L6)*

**Returns:** *[Runtime](_java_lang_runtime_.runtime.md)*

## Properties

###  _java

• **_java**: *any*

*Implementation of [IJavaBase](../interfaces/_java_ijavabase_.ijavabase.md).[_java](../interfaces/_java_ijavabase_.ijavabase.md#_java)*

*Inherited from [JavaBase](_java_javabase_.javabase.md).[_java](_java_javabase_.javabase.md#_java)*

*Defined in [java/JavaBase.ts:18](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L18)*

Reference to the Java Object associated with this instance

**`internal`** 

## Methods

###  _javaClassName

▸ **_javaClassName**(): *string*

*Implementation of [IJavaBase](../interfaces/_java_ijavabase_.ijavabase.md)*

*Inherited from [Object_](_java_lang_object_.object_.md).[_javaClassName](_java_lang_object_.object_.md#_javaclassname)*

*Overrides [JavaBase](_java_javabase_.javabase.md).[_javaClassName](_java_javabase_.javabase.md#abstract-_javaclassname)*

*Defined in [java/lang/Object.ts:12](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L12)*

**Returns:** *string*

___

###  addShutdownHook

▸ **addShutdownHook**(`hook`: function): *void*

*Defined in [java/lang/Runtime.ts:26](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Runtime.ts#L26)*

**Parameters:**

▪ **hook**: *function*

▸ (): *void*

**Returns:** *void*

___

###  availableProcessors

▸ **availableProcessors**(): *number*

*Defined in [java/lang/Runtime.ts:13](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Runtime.ts#L13)*

**Returns:** *number*

___

###  equals

▸ **equals**(`value`: [JavaBase](_java_javabase_.javabase.md)): *boolean*

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

*Inherited from [Object_](_java_lang_object_.object_.md).[getClass](_java_lang_object_.object_.md#getclass)*

*Defined in [java/lang/Object.ts:46](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L46)*

**Returns:** *[Class](_java_lang_class_.class.md)‹*any*›*

___

###  hashCode

▸ **hashCode**(): *number*

*Inherited from [Object_](_java_lang_object_.object_.md).[hashCode](_java_lang_object_.object_.md#hashcode)*

*Defined in [java/lang/Object.ts:42](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L42)*

**Returns:** *number*

___

###  toString

▸ **toString**(): *string*

*Inherited from [Object_](_java_lang_object_.object_.md).[toString](_java_lang_object_.object_.md#tostring)*

*Defined in [java/lang/Object.ts:19](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L19)*

**Returns:** *string*

___

###  toStringAsync

▸ **toStringAsync**(`c`: [Callback](../modules/_java_types_.md#callback)‹*string*›): *void*

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

*Inherited from [Object_](_java_lang_object_.object_.md).[toStringPromise](_java_lang_object_.object_.md#tostringpromise)*

*Defined in [java/lang/Object.ts:25](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L25)*

**Returns:** *`Promise<string>`*

___

###  toStringSync

▸ **toStringSync**(): *string*

*Inherited from [Object_](_java_lang_object_.object_.md).[toStringSync](_java_lang_object_.object_.md#tostringsync)*

*Defined in [java/lang/Object.ts:16](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L16)*

**Returns:** *string*

___

### `Static` _buildArraySync

▸ **_buildArraySync**<**T**>(`javaArray`: any, `createInstance`: [InstanceCreator](../modules/_java_javabase_.md#instancecreator)‹*`T`*›): *`T`[]*

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

*Inherited from [JavaBase](_java_javabase_.javabase.md).[_javaClassName](_java_javabase_.javabase.md#static-_javaclassname)*

*Defined in [java/JavaBase.ts:10](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/JavaBase.ts#L10)*

**`internal`** 

**Returns:** *string*

___

### `Static` class

▸ **class**(`className`: string): *[Class](_java_lang_class_.class.md)‹*any*›*

*Inherited from [Object_](_java_lang_object_.object_.md).[class](_java_lang_object_.object_.md#static-class)*

*Defined in [java/lang/Object.ts:53](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L53)*

this is similar to SomeClass.class but user must pass classname because of limitations/ bad design

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |

**Returns:** *[Class](_java_lang_class_.class.md)‹*any*›*

___

### `Static` getRuntime

▸ **getRuntime**(): *[Runtime](_java_lang_runtime_.runtime.md)*

*Defined in [java/lang/Runtime.ts:7](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Runtime.ts#L7)*

**Returns:** *[Runtime](_java_lang_runtime_.runtime.md)*