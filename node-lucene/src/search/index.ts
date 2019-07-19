import QueryT from './Query'
import IndexSearcherT from './IndexSearcher'
import ScoreDocT from './ScoreDoc'
import TopDocsT from './TopDocs'

export namespace search {
  export type Query = QueryT
  export type ScoreDoc = ScoreDocT
  export type IndexSearcher = IndexSearcherT
  export type TopDocs = TopDocsT
}

export const search = {
  Query: QueryT,
  IndexSearcher: IndexSearcherT
}
