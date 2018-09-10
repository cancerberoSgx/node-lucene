import Object from '../Object';
import ClassLoader from '../ClassLoader';
import Class from '../Class';
import InvocationHandler from './InvocationHandler';
import { getJava } from '../../java';
// import Thread from './Thread';
// import Runnable from './Runnable';

export default class Proxy extends Object /* TODO: implements Serializable */ {


  // public static Object newProxyInstance(ClassLoader loader,
  //   Class<?>[] interfaces,
  //   InvocationHandler h)

  // example call

  // Map proxyInstance = (Map) Proxy.newProxyInstance(
  //   ProxyTest1.class.getClassLoader(), 
  //   new Class[] { Map.class }, 
  //   new ProxyTest1()
  // );
  // proxyInstance.put("hello", "world");

  static newProxyInstance(loader: ClassLoader, interfaces: Class<any>[], h: InvocationHandler): any {
    const interfaceArray = Proxy._buildJavaArray(interfaces, 'java.lang.Class')
    // const interfaceArray = getJava().newArray('java.lang.Class', interfaces.map(i => i._java))
    // getJava().newProxy()
    // getJava().callStaticMethodSync('java.lang.reflect.Proxy', 'newProxyInstance', loader._java, interfaceArray, buildProxy(h))
  }
}