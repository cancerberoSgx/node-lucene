export * from './java'
export * from './types'
export * from './JavaBase'
export * from './IJavaBase'
import ObjectT from './lang/Object'
import LinkedListT from './util/LinkedList'

export namespace lang {
  export type Object = ObjectT
}

export namespace util {
  export type LinkedList<T> = LinkedListT<T>
}

export const lang = {
  Object: ObjectT
}

export const util = {
  LinkedList: LinkedListT
}