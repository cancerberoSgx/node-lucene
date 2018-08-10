import AnalyzerT from './Analyzer'
import StandardAnalyzerT from './standard/StandardAnalyzer'

export namespace analysis {
  export type Analyzer = AnalyzerT
  export namespace standard {
    export type StandardAnalyzer = StandardAnalyzerT

  }
}

export const analysis = {
  standard: {
    StandardAnalyzer: StandardAnalyzerT
  }
}

