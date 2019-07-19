import { lang } from '..'

export default interface Closeable extends lang.AutoCloseable {
  close(): void
}
