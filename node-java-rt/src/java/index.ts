export * from './java'
export * from './types'
export * from './JavaBase'
export * from './IJavaBase'


// java.lang

import ObjectT from './lang/Object'
import IterableT from './lang/Iterable'
import AutoCloseableT from './lang/AutoCloseable'
import EnumT from './lang/Enum'
import RunnableT from './lang/Runnable'
import RuntimeT from './lang/Runtime'
import ClassLoaderT from './lang/ClassLoader'
import ClassT from './lang/Class'

export namespace lang {
  export type Class<T> = ClassT<T>
  export type ClassLoader = ClassLoaderT
  export type Runtime = RuntimeT
  export type Enum<E>/* <E extends EnumT<E>> */ = EnumT<E /* extends EnumT */>/*  */ // TODO: can't do this!. investigate & report to TS
  export type Object = ObjectT
  export type Runnable = RunnableT
  export type Iterable<E> = IterableT<E>
  export type AutoCloseable = AutoCloseableT

  export namespace reflect {

  }
}

export const lang = {
  Object: ObjectT,
  ClassLoader: ClassLoaderT,
  Class: ClassT,
  Enum: EnumT,
  Runtime: RuntimeT,

  reflect: {

  }
}



// java.util


import LinkedListT from './util/LinkedList'
import EventObjectT from './util/EventObject'
import IteratorT from './util/Iterator'
import EnumerationT from './util/Enumeration'
import EventListenerT from './util/EventListener'

export namespace util {
  export type EventObject = EventObjectT
  export type LinkedList<T> = LinkedListT<T>
  export type Iterator<T> = IteratorT<T>
  export type Enumeration<T> = EnumerationT<T>
  export type EventListener = EventListenerT
}

export const util = {
  LinkedList: LinkedListT,
  EventObject: EventObjectT
}





// java.io

import CloseableT from './io/Closeable'

export namespace io {
  export type Closeable = CloseableT
}

export const io = {
}




// java.nio


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


