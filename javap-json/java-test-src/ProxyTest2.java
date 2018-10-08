import java.lang.*;
import java.lang.reflect.*;
import java.util.*;

public class ProxyTest2 {
  public static void main(String[] args) {
    Map proxyInstance = (Map) Proxy.newProxyInstance(
      ProxyTest1.class.getClassLoader(), 
      new Class[] { Map.class }, 
      new InvocationHandler(){
        @Override
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {  
          System.out.println("Invoked method: {} " + method.getName());
        return 42;
        }
      },  
      new ProxyTest1()
    );
    proxyInstance.put("hello", "world");
    // ClassLoader.getSystemClassLoader().
    // Class.forName(name, initialize, loader)
    // new Object().getClass().get
  }
}

// import java.lang.reflect.Method;

// public class ProxyTest1 {

// public static void main(String[] args) {
// Proxy.newProxyInstance(SomeInterface.getClassLoader(),
// new Class[]{Runnable.class} , new ProxyListener());
// }

// static public class ProxyListener implements
// java.lang.reflect.InvocationHandler {
// public ProxyListener() {
// }
// public Object invoke(Object proxy, Method m, Object[] args) throws Throwable
// {
// Object result = null;
// System.out.println(m.getName());
// // try {
// // // Prints the method being invoked
// // System.out.print("begin method "+ m.getName() + "(");
// // for(int i=0; i if(i>0) System.out.print(",");
// // System.out.print(" " +
// // args[i].toString());
// // }
// // System.out.println(" )");
// // // if the method name equals some method's name then call your method
// // if (m.getName().equals("someMethod")) {
// // result = myMethod(args[0]);
// // }
// // } catch (Exception e) {
// // throw new RuntimeException("unexpected invocation exception: " +
// // e.getMessage());
// // } finally {
// // System.out.println("end method " + m.getName());
// // }
// return result;
// }
// // Object myMethod(Object o) {
// // .........
// // }
// }
// }