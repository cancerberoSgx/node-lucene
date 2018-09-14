import Object from './Object';
import { getJava } from '../java';
import Class from './Class';

export default /* abstract */ class ClassLoader extends Object {

  static getSystemClassLoader(): ClassLoader {
    const obj = getJava().callStaticMethodSync('java.lang.ClassLoader', 'getSystemClassLoader')
    return ClassLoader._buildSyncOrThrow(obj, new ClassLoader())
  }


  loadClass(className: string): Class<any> {
    const Class_ = require('./Class').default // TODO: workaround - if not ts error: "TypeError: Class extends value undefined is not a constructor or null" because of circular dependency import issue 
    return ClassLoader._buildSyncOrThrow(this._java.loadClassSync(className), new Class_())
  }
}