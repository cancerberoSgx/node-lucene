
import { Callback, Long, JavaBase, getJava, IJavaBase, lang, getJavaObjectOrThrow } from 'node-java-rt';
import RAMDirectory from '../store/RAMDirectory';
import IndexWriterConfig from './IndexWriterConfig';
import LeafReader from './LeafReader';
import BaseCompositeReader from './BaseCompositeReader';

export default abstract class DirectoryReader extends BaseCompositeReader<LeafReader> {

  // constructor() {
  //   super()
  //   this._java = getJava().newInstanceSync(DirectoryReader._javaClassName())
  // }

  // static _javaClassName(): string {
  //   return 'org.apache.lucene.index.DirectoryReader'
  // }
}
