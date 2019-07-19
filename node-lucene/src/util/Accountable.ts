import { Callback, Long, JavaBase, lang } from 'node-java-rt'

export default interface Accountable /*  extends lang.Object  */ {
  ramBytesUsedSync(): Long

  ramBytesUsedAsync(callback: Callback<Long>): void

  ramBytesUsedPromise(): Promise<Long>
}
