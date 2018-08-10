import AnalyzerT from './Analyzer'
import StandardAnalyzerT from './standard/StandardAnalyzer'

export namespace analysis {
  export type Analyzer = AnalyzerT
}

export const analysis = {
  standard: {
    StandardAnalyzer: StandardAnalyzerT
  }
}

