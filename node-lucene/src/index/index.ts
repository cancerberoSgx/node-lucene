import IndexWriterConfigT from './IndexWriterConfig'
import IndexWriterConfig$OpenModeT from './IndexWriterConfig$OpenMode'
import IndexWriterT from './IndexWriter'
import TermT from './Term'
import IndexReaderT from './IndexReader'
import CompositeReaderT from './CompositeReader'
import DirectoryReaderT from './DirectoryReader'

export namespace index {
  export type DirectoryReader = DirectoryReaderT
  export type CompositeReader = CompositeReaderT
  export type IndexReader = IndexReaderT
  export type Term = TermT
  export type IndexWriter = IndexWriterT
  export type IndexWriterConfig$OpenMode = IndexWriterConfig$OpenModeT
  export type IndexWriterConfig = IndexWriterConfigT
}
export const index = {
  IndexWriterConfig: IndexWriterConfigT,
  IndexWriterConfig$OpenMode: IndexWriterConfig$OpenModeT,
  IndexWriter: IndexWriterT,
  DirectoryReader: DirectoryReaderT,
}