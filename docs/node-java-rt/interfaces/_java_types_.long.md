> **[node-java-rt](../README.md)**

[Globals](../README.md) / ["java/types"](../modules/_java_types_.md) / [Long](_java_types_.long.md) /

# Interface: Long

JavaScript only supports 32-bit integers. Because of this java longs must be treated specially. When getting a
long result the value may be truncated. If you need the original value there is a property off of the result
called "longValue" which contains the un-truncated value as a string. If you are calling a method that takes a
long you must create it using [java.newInstance](#javaNewInstance).

```javascript
var javaLong = java.newInstanceSync("java.lang.Long", 5);
console.log('Possibly truncated long value: ' + javaLong);
console.log('Original long value (as a string): ' + javaLong.longValue);
java.callStaticMethodSync("Test", "staticMethodThatTakesALong", javaLong);
```

## Hierarchy

* `Number`

  * **Long**

## Index

### Properties

* [Number](_java_types_.long.md#number)
* [longValue](_java_types_.long.md#optional-longvalue)

### Methods

* [toExponential](_java_types_.long.md#toexponential)
* [toFixed](_java_types_.long.md#tofixed)
* [toLocaleString](_java_types_.long.md#tolocalestring)
* [toPrecision](_java_types_.long.md#toprecision)
* [toString](_java_types_.long.md#tostring)
* [valueOf](_java_types_.long.md#valueof)

## Properties

###  Number

• **Number**: *`NumberConstructor`*

Defined in /Users/sebastiangurin/git/node-lucene/node-java-rt/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:592

An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers.

___

### `Optional` longValue

• **longValue**? : *undefined | string*

*Defined in [java/types.ts:219](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-java-rt/src/java/types.ts#L219)*

## Methods

###  toExponential

▸ **toExponential**(`fractionDigits?`: undefined | number): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-java-rt/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:549

Returns a string containing a number represented in exponential notation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fractionDigits?` | undefined \| number | Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.  |

**Returns:** *string*

___

###  toFixed

▸ **toFixed**(`fractionDigits?`: undefined | number): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-java-rt/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:543

Returns a string representing a number in fixed-point notation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fractionDigits?` | undefined \| number | Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.  |

**Returns:** *string*

___

###  toLocaleString

▸ **toLocaleString**(`locales?`: string | string[], `options?`: `Intl.NumberFormatOptions`): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-java-rt/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:4220

Converts a number to a string by using the current or specified locale.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`locales?` | string \| string[] | A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. |
`options?` | `Intl.NumberFormatOptions` | An object that contains one or more properties that specify comparison options.  |

**Returns:** *string*

___

###  toPrecision

▸ **toPrecision**(`precision?`: undefined | number): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-java-rt/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:555

Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`precision?` | undefined \| number | Number of significant digits. Must be in the range 1 - 21, inclusive.  |

**Returns:** *string*

___

###  toString

▸ **toString**(`radix?`: undefined | number): *string*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-java-rt/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:537

Returns a string representation of an object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`radix?` | undefined \| number | Specifies a radix for converting numeric values to strings. This value is only used for numbers.  |

**Returns:** *string*

___

###  valueOf

▸ **valueOf**(): *number*

*Inherited from void*

Defined in /Users/sebastiangurin/git/node-lucene/node-java-rt/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:558

Returns the primitive value of the specified object.

**Returns:** *number*