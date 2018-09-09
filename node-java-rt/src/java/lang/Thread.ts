import Object from './Object';
import { getJava } from '../java';
import Runnable from './Runnable';

export default class Thread extends Object implements Runnable {
  /**
   * helper to create a native Java Thread instance that runs given function
   * @param run 
   */
  static newJavaThread(run: () => void): any {
    // Map proxyInstance = (Map) Proxy.newProxyInstance(
    //   ProxyTest1.class.getClassLoader(), 
    //   new Class[] { Map.class }, 
    //   new ProxyTest1()
    // );
  }
}