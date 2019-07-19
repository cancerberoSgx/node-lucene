> **[node-lucene](../README.md)**

[Globals](../README.md) / ["util/Accountable"](../modules/_util_accountable_.md) / [Accountable](_util_accountable_.accountable.md) /

# Interface: Accountable

## Hierarchy

* **Accountable**

## Implemented by

* [RAMDirectory](../classes/_store_ramdirectory_.ramdirectory.md)

## Index

### Methods

* [ramBytesUsedAsync](_util_accountable_.accountable.md#rambytesusedasync)
* [ramBytesUsedPromise](_util_accountable_.accountable.md#rambytesusedpromise)
* [ramBytesUsedSync](_util_accountable_.accountable.md#rambytesusedsync)

## Methods

###  ramBytesUsedAsync

▸ **ramBytesUsedAsync**(`callback`: `Callback<Long>`): *void*

*Defined in [util/Accountable.ts:6](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/util/Accountable.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | `Callback<Long>` |

**Returns:** *void*

___

###  ramBytesUsedPromise

▸ **ramBytesUsedPromise**(): *`Promise<Long>`*

*Defined in [util/Accountable.ts:8](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/util/Accountable.ts#L8)*

**Returns:** *`Promise<Long>`*

___

###  ramBytesUsedSync

▸ **ramBytesUsedSync**(): *`Long`*

*Defined in [util/Accountable.ts:4](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/util/Accountable.ts#L4)*

**Returns:** *`Long`*