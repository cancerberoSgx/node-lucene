import Method from './Method'

export default interface InvocationHandler {
  // TODO: generic
  invoke(proxy: any, method: Method, ...args: any[]): any
}
