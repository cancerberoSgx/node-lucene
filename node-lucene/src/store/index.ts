import RAMDirectoryT from './RAMDirectory'
import FSDirectoryT from './FSDirectory'
import BaseDirectoryT from './BaseDirectory'
import DirectoryT from './Directory'

export namespace store {
  export type Directory = DirectoryT
  export type BaseDirectory = BaseDirectoryT
  export type FSDirectory = FSDirectoryT
  export type RAMDirectory = RAMDirectoryT
}

export const store = {
  BaseDirectory: BaseDirectoryT,
  FSDirectory: FSDirectoryT,
  RAMDirectory: RAMDirectoryT
}
