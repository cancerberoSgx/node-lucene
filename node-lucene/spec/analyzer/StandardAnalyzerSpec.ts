import * as lucene from '../../src'
import StandardAnalyzer from '../../src/analysis/standard/StandardAnalyzer'
import { StringDecoder } from 'string_decoder'

describe('StandardAnalyzer', () => {
  describe('getMaxTokenLength', () => {
    it('getMaxTokenLengthSync new instance should greater than 1', done => {
      const analyzer = new lucene.analysis.standard.StandardAnalyzer()
      expect(analyzer.getMaxTokenLengthSync()).toBeGreaterThan(0)
      expect(analyzer.getMaxTokenLengthSync().valueOf()).toBeGreaterThan(0)
      done()
    })
    it('getMaxTokenLengthAsync new instance should return greater than 1', done => {
      new lucene.analysis.standard.StandardAnalyzer().getMaxTokenLengthAsync((error, value) => {
        expect(error).not.toBeDefined()
        expect(value).toBeGreaterThan(0)
        done()
      })
    })
    it('getMaxTokenLengthPromise new instance should return greater than 1 ', async done => {
      const value = await new lucene.analysis.standard.StandardAnalyzer().getMaxTokenLengthPromise()
      expect(value).toBeGreaterThan(0)
      done()
    })
  })

  describe('Example1', () => {
    /*
        Version matchVersion = Version.LUCENE_XY; // Substitute desired Lucene version for XY
       Analyzer analyzer = new StandardAnalyzer(matchVersion); // or any other analyzer
       TokenStream ts = analyzer.tokenStream("myfield", new StringReader("some text goes here"));
       // The Analyzer class will construct the Tokenizer, TokenFilter(s), and CharFilter(s),
       //   and pass the resulting Reader to the Tokenizer.
       OffsetAttribute offsetAtt = ts.addAttribute(OffsetAttribute.class);
       
       try {
         ts.reset(); // Resets this stream to the beginning. (Required)
         while (ts.incrementToken()) {
           // Use AttributeSource.reflectAsString(boolean)
           // for token stream debugging.
           System.out.println("token: " + ts.reflectAsString(true));
   
           System.out.println("token start offset: " + offsetAtt.startOffset());
           System.out.println("  token end offset: " + offsetAtt.endOffset());
         }
         ts.end();   // Perform end-of-stream operations, e.g. set the final offset.
       } finally {
         ts.close(); // Release resources associated with this stream.
       }
       */

    it('docs/core/org/apache/lucene/analysis/package-summary.html', () => {
      const analyzer = new StandardAnalyzer()
      const ts = analyzer.tokenStream('myfield', 'some text goes here')
      const tokens: string[] = []
      try {
        ts.reset()
        while (ts.incrementToken()) {
          tokens.push(ts.reflectAsString(false))
        }
      } finally {
        ts.close()
      }
      expect(tokens.length).toBe(4)
      expect(tokens.find(t => t.includes('term=some,'))).toBeDefined()
    })
  })
})
