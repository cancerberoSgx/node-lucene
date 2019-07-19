> **[node-java-rt](../README.md)**

[Globals](../README.md) / ["java/lang/Object"](../modules/_java_lang_object_.md) / [Object_](_java_lang_object_.object_.md) /

# Class: Object_

## Hierarchy

* [JavaBase](_java_javabase_.javabase.md)

  * **Object_**

  * [AccessibleObject](_java_lang_reflect_accessibleobject_.accessibleobject.md)

  * [Class](_java_lang_class_.class.md)

  * [Thread](_java_lang_thread_.thread.md)

  * [Runtime](_java_lang_runtime_.runtime.md)

  * [ClassLoader](_java_lang_classloader_.classloader.md)

  * [Double](_java_lang_double_.double.md)

  * [Proxy](_java_lang_reflect_proxy_.proxy.md)

  * [LinkedList](_java_util_linkedlist_.linkedlist.md)

  * [EventObject](_java_util_eventobject_.eventobject.md)

  * [Path](../interfaces/_java_nio_file_path_.path.md)

  * [PathAbstract](_java_nio_file_pathabstract_.pathabstract.md)

  * [Paths](_java_nio_file_paths_.paths.md)

  * [BigInteger](_java_math_biginteger_.biginteger.md)

## Implements

* [IJavaBase](../interfaces/_java_ijavabase_.ijavabase.md)

## Index

### Constructors

* [constructor](_java_lang_object_.object_.md#constructor)

### Properties

* [_java](_java_lang_object_.object_.md#_java)

### Methods

* [_javaClassName](_java_lang_object_.object_.md#_javaclassname)
* [equals](_java_lang_object_.object_.md#equals)
* [equalsAsync](_java_lang_object_.object_.md#equalsasync)
* [equalsPromise](_java_lang_object_.object_.md#equalspromise)
* [equalsSync](_java_lang_object_.object_.md#equalssync)
* [getClass](_java_lang_object_.object_.md#getclass)
* [hashCode](_java_lang_object_.object_.md#hashcode)
* [toString](_java_lang_object_.object_.md#tostring)
* [toStringAsync](_java_lang_object_.object_.md#tostringasync)
* [toStringPromise](_java_lang_object_.object_.md#tostringpromise)
* [toStringSync](_java_lang_object_.object_.md#tostringsync)
* [_buildArraySync](_java_lang_object_.object_.md#static-_buildarraysync)
* [_buildAsync](_java_lang_object_.object_.md#static-protected-_buildasync)
* [_buildJavaArray](_java_lang_object_.object_.md#static-_buildjavaarray)
* [_buildPromise](_java_lang_object_.object_.md#static-protected-_buildpromise)
* [_buildSync](_java_lang_object_.object_.md#static-protected-_buildsync)
* [_buildSyncOrThrow](_java_lang_object_.object_.md#static-protected-_buildsyncorthrow)
* [_getNative](_java_lang_object_.object_.md#static-_getnative)
* [_javaClassName](_java_lang_object_.object_.md#static-_javaclassname)
* [class](_java_lang_object_.object_.md#static-class)

## Constructors

###  constructor

\+ **new Object_**(): *[Object_](_java_lang_object_.object_.md)*

*Defined in [java/lang/Object.ts:6](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L6)*

**Returns:** *[Object_](_java_lang_object_.object_.md)*

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

*Overrides [JavaBase](_java_javabase_.javabase.md).[_javaClassName](_java_javabase_.javabase.md#abstract-_javaclassname)*

*Defined in [java/lang/Object.ts:12](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L12)*

**Returns:** *string*

___

###  equals

▸ **equals**(`value`: [JavaBase](_java_javabase_.javabase.md)): *boolean*

*Defined in [java/lang/Object.ts:32](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JavaBase](_java_javabase_.javabase.md) |

**Returns:** *boolean*

___

###  equalsAsync

▸ **equalsAsync**(`value`: [JavaBase](_java_javabase_.javabase.md), `c`: [Callback](../modules/_java_types_.md#callback)‹*boolean*›): *void*

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

*Defined in [java/lang/Object.ts:38](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JavaBase](_java_javabase_.javabase.md) |

**Returns:** *`Promise<boolean>`*

___

###  equalsSync

▸ **equalsSync**(`value`: [JavaBase](_java_javabase_.javabase.md)): *boolean*

*Defined in [java/lang/Object.ts:29](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [JavaBase](_java_javabase_.javabase.md) |

**Returns:** *boolean*

___

###  getClass

▸ **getClass**(): *[Class](_java_lang_class_.class.md)‹*any*›*

*Defined in [java/lang/Object.ts:46](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L46)*

**Returns:** *[Class](_java_lang_class_.class.md)‹*any*›*

___

###  hashCode

▸ **hashCode**(): *number*

*Defined in [java/lang/Object.ts:42](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L42)*

**Returns:** *number*

___

###  toString

▸ **toString**(): *string*

*Defined in [java/lang/Object.ts:19](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L19)*

**Returns:** *string*

___

###  toStringAsync

▸ **toStringAsync**(`c`: [Callback](../modules/_java_types_.md#callback)‹*string*›): *void*

*Defined in [java/lang/Object.ts:22](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`c` | [Callback](../modules/_java_types_.md#callback)‹*string*› |

**Returns:** *void*

___

###  toStringPromise

▸ **toStringPromise**(): *`Promise<string>`*

*Defined in [java/lang/Object.ts:25](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L25)*

**Returns:** *`Promise<string>`*

___

###  toStringSync

▸ **toStringSync**(): *string*

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

*Defined in [java/lang/Object.ts:53](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/lang/Object.ts#L53)*

this is similar to SomeClass.class but user must pass classname because of limitations/ bad design

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |

**Returns:** *[Class](_java_lang_class_.class.md)‹*any*›*