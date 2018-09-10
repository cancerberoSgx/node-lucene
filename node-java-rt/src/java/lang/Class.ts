import Object from './Object'
import Method from './reflect/Method';

// console.log('oo', Object);

export default class Class<T> extends Object
/*
TODO: 
 implements java.io.Serializable,
GenericDeclaration,
Type,
AnnotatedElement
*/ {

  getMethods(): Method[] {
    const javaObject = this._java.getMethodsSync()
    return toJsArray<Method>(javaObject, javaObject => Class._buildSyncOrThrow(javaObject, new Method()))
  }

}


function toJsArray<T>(javaArray: any, transform?: (javaObject: any) => any): T[] {
  const arr: T[] = []
  const length = javaArray.length
  for (let i = 0; i < length; i++) {
    const javaObject = javaArray[i];
    arr.push(transform ? transform(javaObject) : javaObject)
  }
  return arr
}