export * from './java'
export * from './types'
import ObjectT from './lang/Object'
import LinkedListT from './util/LinkedList'
// export namespace java {
export namespace lang {
  export type Object = ObjectT
}
export namespace util {
  export type LinkedList<T> = LinkedListT<T>
}
// }
// export const java = {
export const lang = {
  Object: ObjectT
}
export const util = {
  LinkedList: LinkedListT
}
// }