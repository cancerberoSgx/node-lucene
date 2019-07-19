// import { lang } from '..'

export default interface Enumeration<E> {
  /**
   * ()Z
   */
  hasMoreElements(): boolean
  /**
   * ()Ljava/lang/Object;
   */
  nextElement(): E
}
