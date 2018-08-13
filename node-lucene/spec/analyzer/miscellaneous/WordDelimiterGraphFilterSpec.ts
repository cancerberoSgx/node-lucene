import * as lucene from '../../../src'

describe('WordDelimiterGraphFilter', () => {
  it('contants', () => {
    expect(lucene.analysis.miscellaneous.WordDelimiterGraphFilter.CATENATE_ALL).toBeGreaterThan(0)
    expect(lucene.analysis.miscellaneous.WordDelimiterGraphFilter.CATENATE_NUMBERS).toBeGreaterThan(0)
    expect(lucene.analysis.miscellaneous.WordDelimiterGraphFilter.CATENATE_WORDS).toBeGreaterThan(0)
    expect(lucene.analysis.miscellaneous.WordDelimiterGraphFilter.GENERATE_NUMBER_PARTS).toBeGreaterThan(0)
    expect(lucene.analysis.miscellaneous.WordDelimiterGraphFilter.GENERATE_WORD_PARTS).toBeGreaterThan(0)
    expect(lucene.analysis.miscellaneous.WordDelimiterGraphFilter.IGNORE_KEYWORDS).toBeGreaterThan(0)
    expect(lucene.analysis.miscellaneous.WordDelimiterGraphFilter.PRESERVE_ORIGINAL).toBeGreaterThan(0)
    expect(lucene.analysis.miscellaneous.WordDelimiterGraphFilter.SPLIT_ON_CASE_CHANGE).toBeGreaterThan(0)
    expect(lucene.analysis.miscellaneous.WordDelimiterGraphFilter.SPLIT_ON_NUMERICS).toBeGreaterThan(0)
    expect(lucene.analysis.miscellaneous.WordDelimiterGraphFilter.STEM_ENGLISH_POSSESSIVE).toBeGreaterThan(0)
  })
})