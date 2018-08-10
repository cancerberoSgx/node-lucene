import IndexWriterConfigT from './IndexWriterConfig'
import IndexWriterT from './IndexWriter'
import IndexReaderT from './IndexReader'
import CompositeReaderT from './CompositeReader'

export namespace index {
  export type CompositeReader = CompositeReaderT
  export type IndexReader = IndexReaderT
  export type IndexWriter = IndexWriterT
  export type IndexWriterConfig = IndexWriterConfigT
}
export const index = {
  IndexWriterConfig: IndexWriterConfigT,
  IndexWriter: IndexWriterT
}