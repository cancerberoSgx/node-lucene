import { lang } from 'node-java-rt';
import { getLuceneJava } from '../../util/getLuceneJava';

export default class WordDelimiterGraphFilter extends lang.Object {
  static get CATENATE_ALL(): number {
    return getLuceneJava().getStaticFieldValue('org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter', 'CATENATE_ALL')
  }
  static get CATENATE_NUMBERS(): number {
    return getLuceneJava().getStaticFieldValue('org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter', 'CATENATE_NUMBERS')
  }
  static get CATENATE_WORDS(): number {
    return getLuceneJava().getStaticFieldValue('org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter', 'CATENATE_WORDS')
  }
  static get GENERATE_NUMBER_PARTS(): number {
    return getLuceneJava().getStaticFieldValue('org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter', 'GENERATE_NUMBER_PARTS')
  }
  static get GENERATE_WORD_PARTS(): number {
    return getLuceneJava().getStaticFieldValue('org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter', 'GENERATE_WORD_PARTS')
  }
  static get IGNORE_KEYWORDS(): number {
    return getLuceneJava().getStaticFieldValue('org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter', 'IGNORE_KEYWORDS')
  }
  static get PRESERVE_ORIGINAL(): number {
    return getLuceneJava().getStaticFieldValue('org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter', 'PRESERVE_ORIGINAL')
  }
  static get SPLIT_ON_CASE_CHANGE(): number {
    return getLuceneJava().getStaticFieldValue('org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter', 'SPLIT_ON_CASE_CHANGE')
  }
  static get SPLIT_ON_NUMERICS(): number {
    return getLuceneJava().getStaticFieldValue('org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter', 'SPLIT_ON_NUMERICS')
  }
  static get STEM_ENGLISH_POSSESSIVE(): number {
    return getLuceneJava().getStaticFieldValue('org.apache.lucene.analysis.miscellaneous.WordDelimiterGraphFilter', 'STEM_ENGLISH_POSSESSIVE')
  }
}