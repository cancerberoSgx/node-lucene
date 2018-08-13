import AnalyzerT from './Analyzer'
import StandardAnalyzerT from './standard/StandardAnalyzer'
import WordDelimiterGraphFilterT from './miscellaneous/WordDelimiterGraphFilter'

export namespace analysis {
  export type Analyzer = AnalyzerT
  export namespace standard {
    export type StandardAnalyzer = StandardAnalyzerT
  }
  export namespace miscellaneous {
    export type WordDelimiterGraphFilter = WordDelimiterGraphFilterT

  }
}

export const analysis = {
  standard: {
    StandardAnalyzer: StandardAnalyzerT
  },
  miscellaneous: {
    WordDelimiterGraphFilter: WordDelimiterGraphFilterT
  }
}

