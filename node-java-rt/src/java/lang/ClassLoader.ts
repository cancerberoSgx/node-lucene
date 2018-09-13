import Object from './Object';
import { getJava } from '../java';

export default /* abstract */ class ClassLoader extends Object {

  static getSystemClassLoader(): ClassLoader {
    // console.log(getJava().callStaticMethod);

    const obj = getJava().callStaticMethodSync('java.lang.ClassLoader', 'getSystemClassLoader')
    // console.log({ obj });

    return ClassLoader._buildSyncOrThrow(obj, new ClassLoader())
  }
}