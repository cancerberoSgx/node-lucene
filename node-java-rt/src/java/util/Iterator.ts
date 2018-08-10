// import { lang } from '..';

export default interface Iterator<E> {
  /**
   * ()V
   */
  remove(): void
  /**
   * ()Z
   */
  hasNext(): boolean
  /**
   * ()Ljava/lang/Object;
   */
  next(): E
  /**
   * (Ljava/util/function/Consumer;)V
   */
  forEachRemaining(arg0: any /*java.util.function.Consumer*/): void
}
