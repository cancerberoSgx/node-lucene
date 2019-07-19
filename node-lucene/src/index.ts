export * from './util'
export * from './store'
export * from './analysis'
export * from './queryparser'
export * from './search'
export * from './document'
export * from './index/index'

import { getLuceneJava, initializeLucene } from './util/getLuceneJava'

export const getJava = getLuceneJava
export const initialize = initializeLucene
