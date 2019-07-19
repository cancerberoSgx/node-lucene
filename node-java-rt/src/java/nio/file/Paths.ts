import { lang } from '../..';
import { getJava } from '../../java';
import Path from './Path';
import PathAbstract from './PathAbstract';

export default class Paths extends lang.Object {

  constructor() {
    super()
    this._java = getJava().newInstanceSync(this._javaClassName())
  }

  _javaClassName(): string {
    return 'java.nio.file.Paths'
  }

  static getSync(...files: string[]): Path {
    return Paths._buildSyncOrThrow(getJava().callStaticMethodSync.apply(getJava(),
      ['java.nio.file.Paths', 'get', ...files]), new PathAbstract())
  }
  static get(...files: string[]): Path {
    return Paths._buildSyncOrThrow(getJava().callStaticMethodSync.apply(getJava(),
      ['java.nio.file.Paths', 'get', ...files]), new PathAbstract())
  }
  //TODO: getPromise
}