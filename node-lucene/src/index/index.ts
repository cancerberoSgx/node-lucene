import IndexWriterConfigT from './IndexWriterConfig'
import IndexWriterT from './IndexWriter'

export namespace index {
  export type IndexWriterConfig = IndexWriterConfigT
  export type IndexWriter = IndexWriterT
}
export const index = {
  IndexWriterConfig: IndexWriterConfigT,
  IndexWriter: IndexWriterT
}