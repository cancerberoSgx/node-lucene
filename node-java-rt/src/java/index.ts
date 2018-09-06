export * from './java'
export * from './types'
export * from './JavaBase'
export * from './IJavaBase'



import ObjectT from './lang/Object'
import IterableT from './lang/Iterable'
import AutoCloseableT from './lang/AutoCloseable'
import EnumT from './lang/Enum'
import RunnableT from './lang/Runnable'

export namespace lang {
  export type Enum<E>/* <E extends EnumT<E>> */ = EnumT<E /* extends EnumT */>/*  */ // TODO: can't do this report to TS
  export type Object = ObjectT
  export type Runnable = RunnableT
  export type Iterable<E> = IterableT<E>
  export type AutoCloseable = AutoCloseableT
}

export const lang = {
  Object: ObjectT,
  Enum: EnumT,
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



import PathsT from './nio/file/Paths'
import PathT from './nio/file/Path'

export namespace nio {
  export namespace file {
    export type Path = PathT
    export type Paths = PathsT
  }
}

export const nio = {
  file: {
    Paths: PathsT
  }
}
