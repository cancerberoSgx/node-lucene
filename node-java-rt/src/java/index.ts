export * from './java'
export * from './types'
export * from './JavaBase'
export * from './IJavaBase'



import ObjectT from './lang/Object'
import IterableT from './lang/Iterable'
import AutoCloseableT from './lang/AutoCloseable'

export namespace lang {
  export type Object = ObjectT
  export type Iterable<E> = IterableT<E>
  export type AutoCloseable = AutoCloseableT
}

export const lang = {
  Object: ObjectT,
}



import LinkedListT from './util/LinkedList'
import IteratorT from './util/Iterator'
import EnumerationT from './util/Enumeration'

export namespace util {
  export type LinkedList<T> = LinkedListT<T>
  export type Iterator<T> = IteratorT<T>
  export type Enumeration<T> = EnumerationT<T>
}

export const util = {
  LinkedList: LinkedListT
}





import CloseableT from './io/Closeable'

export namespace io {
  export type Closeable = CloseableT
}

export const io = {
}
