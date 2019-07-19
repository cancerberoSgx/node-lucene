import { util } from '..'

export default interface Iterable<T> {
  /**
   * ()Ljava/util/Iterator;
   */
  iterator(): util.Iterator<T>
  // /**
  //  * ()Ljava/util/Spliterator;
  //  */
  // spliterator(): util.Spliterator;
  // /**
  //  * (Ljava/util/function/Consumer;)V
  //  */
  // forEach(arg0: util.function.Consumer): void;
}
