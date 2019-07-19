import { getLuceneJava } from '../../util/getLuceneJava'
import TokenFilter from '../TokenFilter'

export default class WordDelimiterGraphFilter extends TokenFilter {
  static get CATENATE_ALL(): number {
    return getLuceneJava().getStaticFieldValue(
      'org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter',
      'CATENATE_ALL'
    )
  }
  static get CATENATE_NUMBERS(): number {
    return getLuceneJava().getStaticFieldValue(
      'org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter',
      'CATENATE_NUMBERS'
    )
  }
  static get CATENATE_WORDS(): number {
    return getLuceneJava().getStaticFieldValue(
      'org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter',
      'CATENATE_WORDS'
    )
  }
  static get GENERATE_NUMBER_PARTS(): number {
    return getLuceneJava().getStaticFieldValue(
      'org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter',
      'GENERATE_NUMBER_PARTS'
    )
  }
  static get GENERATE_WORD_PARTS(): number {
    return getLuceneJava().getStaticFieldValue(
      'org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter',
      'GENERATE_WORD_PARTS'
    )
  }
  static get IGNORE_KEYWORDS(): number {
    return getLuceneJava().getStaticFieldValue(
      'org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter',
      'IGNORE_KEYWORDS'
    )
  }
  static get PRESERVE_ORIGINAL(): number {
    return getLuceneJava().getStaticFieldValue(
      'org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter',
      'PRESERVE_ORIGINAL'
    )
  }
  static get SPLIT_ON_CASE_CHANGE(): number {
    return getLuceneJava().getStaticFieldValue(
      'org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter',
      'SPLIT_ON_CASE_CHANGE'
    )
  }
  static get SPLIT_ON_NUMERICS(): number {
    return getLuceneJava().getStaticFieldValue(
      'org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter',
      'SPLIT_ON_NUMERICS'
    )
  }
  static get STEM_ENGLISH_POSSESSIVE(): number {
    return getLuceneJava().getStaticFieldValue(
      'org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter',
      'STEM_ENGLISH_POSSESSIVE'
    )
  }
}

// public void doSplit(final String input, String... output) throws Exception {
//   int flags = GENERATE_WORD_PARTS | GENERATE_NUMBER_PARTS | SPLIT_ON_CASE_CHANGE | SPLIT_ON_NUMERICS | STEM_ENGLISH_POSSESSIVE;
//   WordDelimiterFilter wdf = new WordDelimiterFilter(keywordMockTokenizer(input),
//       WordDelimiterIterator.DEFAULT_WORD_DELIM_TABLE, flags, null);
//   assertTokenStreamContents(wdf, output);
// }
