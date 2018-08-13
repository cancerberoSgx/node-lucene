import AnalyzerT from './Analyzer'
import StandardAnalyzerT from './standard/StandardAnalyzer'
import WordDelimiterGraphFilterT from './miscellaneous/WordDelimiterGraphFilter'
import TokenFilterT from './TokenFilter'


export namespace analysis {
  export type Analyzer = AnalyzerT
  export type TokenFilter = TokenFilterT
  export namespace standard {
    export type StandardAnalyzer = StandardAnalyzerT
  }
  export namespace miscellaneous {
    export type WordDelimiterGraphFilter = WordDelimiterGraphFilterT

  }
}

export const analysis = {
  WordDelimiterGraphFilter: WordDelimiterGraphFilterT,
  TokenFilter: TokenFilterT,
  standard: {
    StandardAnalyzer: StandardAnalyzerT
  },
  miscellaneous: {
    WordDelimiterGraphFilter: WordDelimiterGraphFilterT
  }
}

