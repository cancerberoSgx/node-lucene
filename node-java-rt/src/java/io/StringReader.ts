import { getJava } from '../java'
import Reader from './Reader'

export default class StringReader extends Reader {
  constructor(val: string = '') {
    super()
    this._java = getJava().newInstanceSync('java.io.StringReader', val)
  }
}
