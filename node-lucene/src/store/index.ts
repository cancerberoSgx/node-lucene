import RAMDirectoryT from './RAMDirectory'
import FSDirectoryT from './FSDirectory'

export namespace store {
  export type FSDirectory = FSDirectoryT
  export type RAMDirectory = RAMDirectoryT
}
export const store = {
  FSDirectory: FSDirectoryT,
  RAMDirectory: RAMDirectoryT
}