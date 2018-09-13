import Object from './Object';
import { getJava } from '../java';

export default /* abstract */ class ClassLoader extends Object {

  static getSystemClassLoader(): ClassLoader {
    const obj = getJava().callStaticMethodSync('java.lang.ClassLoader', 'getSystemClassLoader')
    return ClassLoader._buildSyncOrThrow(obj, new ClassLoader())
  }
}