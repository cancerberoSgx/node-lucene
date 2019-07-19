import Object from '../Object'
// import ClassLoader from '../ClassLoader';
// import Class from '../Class';
// import InvocationHandler from './InvocationHandler';
import { getJava } from '../../java'
// import Thread from './Thread';
// import Runnable from './Runnable';
import * as java from '../../..'
import { InstanceCreator, JavaBase } from '../../JavaBase'

export default class Proxy extends Object /* TODO: implements Serializable */ {
  /**
   * 
   * 
Java Example Call: 
invoke
```
Map proxyInstance = (Map) Proxy.newProxyInstance(
  ProxyTest1.class.getClassLoader(), 
  new Class[] { Map.class }, 
  new InvocationHandler(){
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {  
      System.out.println("Invoked method: {} " + method.getName());
    return 42;
    }
  };
  new ProxyTest1()
);
proxyInstance.put("hello", "world");
```

   * @param loader 
   * @param interfaces 
   * @param h 
   */
  static newProxyInstance<T extends JavaBase>(
    loader: java.lang.ClassLoader,
    interfaces: java.lang.Class<any>[],
    h: java.lang.reflect.InvocationHandler,
    instance: T | InstanceCreator<T>
  ): T {
    const interfaceArray = getJava().newArray('java.lang.Class', interfaces.map(i => i._java))
    const invocationHandler = getJava().newProxy('java.lang.reflect.InvocationHandler', h)
    const obj = getJava().callStaticMethodSync(
      'java.lang.reflect.Proxy',
      'newProxyInstance',
      loader._java,
      interfaceArray,
      invocationHandler
    )
    // if (!instance) {
    //   return obj
    // }
    // instance = typeof instance==='function' ? instance() : instance
    return Proxy._buildSyncOrThrow(obj, instance)
  }
}
