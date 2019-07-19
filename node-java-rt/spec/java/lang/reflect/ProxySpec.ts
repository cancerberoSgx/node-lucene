import * as java from '../../../../src'
// import ClassLoader from '../../../../src/java/lang/ClassLoader';
import Class from '../../../../src/java/lang/Class'
import { getJava, JavaBase } from '../../../../src'
// import Method from '../../../../src/java/lang/reflect/Method';
import InvocationHandler from '../../../../src/java/lang/reflect/InvocationHandler'
// import Method from '../../../../src/java/lang/reflect/Method';
// import Map from '../../../../src/java/util/Map';

describe('Proxy', () => {
  describe('newProxyInstance', () => {
    // example java call
    // Map proxyInstance = (Map) Proxy.newProxyInstance(
    //   ProxyTest1.class.getClassLoader(),
    //   new Class[] { Map.class },
    //   new InvocationHandler(){
    //     @Override
    //     public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    //       System.out.println("Invoked method: {} " + method.getName());
    //     return 42;
    //     }
    //   };
    //   new ProxyTest1()
    // );
    // proxyInstance.put("hello", "world");

    it('should return valid proxy', done => {
      const loader = java.lang.ClassLoader.getSystemClassLoader()
      const proxyInstance = java.lang.reflect.Proxy.newProxyInstance(
        loader,
        [loader.loadClass('java.util.Map')],
        {
          invoke(proxy: any, method: java.lang.reflect.Method, ...args: any[]) {
            return 42
          }
        },
        new java.lang.Object()
      )
      const value = JavaBase._getNative(proxyInstance).putSync('hello', 'world') // TODO: HashMap or other wrapper needed
      expect(value).toBe(42)
      done()
    })

    it('should be callable manually using node-java', done => {
      const loader = java.lang.ClassLoader.getSystemClassLoader()
      const interfaces = [loader.loadClass('java.util.Map')]
      const interfaceArray = getJava().newArray('java.lang.Class', interfaces.map(i => JavaBase._getNative(i)))
      const invocationHandler = getJava().newProxy('java.lang.reflect.InvocationHandler', {
        invoke(proxy: any, method: java.lang.reflect.Method, ...args: any[]): any {
          if (method.getNameSync() === 'get' && args.length && args[0].length && args[0][0] === 'hello') {
            return 666
          }
          return 5
        }
      })
      const proxy = getJava().callStaticMethodSync(
        'java.lang.reflect.Proxy',
        'newProxyInstance',
        loader._java,
        interfaceArray,
        invocationHandler
      )
      expect(proxy.putSync('hello', 'world')).toBe(5)
      expect(proxy.getSync('hello2')).toBe(5)
      expect(proxy.getSync('hello')).toBe(666)
      done()
    })
  })
})
