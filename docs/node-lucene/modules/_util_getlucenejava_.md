> **[node-lucene](../README.md)**

[Globals](../README.md) / ["util/getLuceneJava"](_util_getlucenejava_.md) /

# External module: "util/getLuceneJava"

## Index

### Functions

* [getLuceneJava](_util_getlucenejava_.md#getlucenejava)
* [initializeLucene](_util_getlucenejava_.md#initializelucene)

## Functions

###  getLuceneJava

▸ **getLuceneJava**(): *`Java`*

*Defined in [util/getLuceneJava.ts:31](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/util/getLuceneJava.ts#L31)*

**Returns:** *`Java`*

___

###  initializeLucene

▸ **initializeLucene**(): *void*

*Defined in [util/getLuceneJava.ts:43](https://github.com/cancerberoSgx/node-lucene/blob/7855316/node-lucene/src/util/getLuceneJava.ts#L43)*

This is a mandatory call before using any node-lucene API so node-java is initialized first using lucene
.jar in class path and not without them like happens when getJava() is called directly from node-java-rt

**Returns:** *void*