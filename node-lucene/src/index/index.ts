import IndexWriterConfigT from './IndexWriterConfig'
import IndexWriterT from './IndexWriter'
import IndexReaderT from './IndexReader'
import CompositeReaderT from './CompositeReader'
import DirectoryReaderT from './DirectoryReader'

export namespace index {
  export type DirectoryReader = DirectoryReaderT
  export type CompositeReader = CompositeReaderT
  export type IndexReader = IndexReaderT
  export type IndexWriter = IndexWriterT
  export type IndexWriterConfig = IndexWriterConfigT
}
export const index = {
  IndexWriterConfig: IndexWriterConfigT,
  IndexWriter: IndexWriterT,
  DirectoryReader: DirectoryReaderT,
}