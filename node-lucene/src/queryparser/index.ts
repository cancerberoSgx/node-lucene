import QueryParserT from './classic/QueryParser'
export const queryparser = {
  classic: {
    QueryParser: QueryParserT
  }
}

export namespace queryparser {
  export namespace classic {
    export type QueryParser = QueryParserT
  }
}