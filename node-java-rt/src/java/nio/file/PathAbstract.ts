import { lang } from '../../'
import Path from './Path'

export default class PathAbstract extends lang.Object implements Path {
  compareTo(t: Path): number {
    throw new Error('Method not implemented.')
  }
  [Symbol.iterator](): Iterator<Path> {
    throw new Error('Method not implemented.')
  }
  _java: any

  // TODO
}
