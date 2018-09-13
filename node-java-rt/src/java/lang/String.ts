import Object from './Object';
import { getJava } from '../java';

export default class String /* extends Object */ {
  static copyValueOf(charArray: any): any {
    return getJava().callStaticMethodSync('java.lang.String', 'copyValueOf', charArray)
  }
}
