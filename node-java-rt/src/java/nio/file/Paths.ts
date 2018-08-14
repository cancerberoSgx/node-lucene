import { lang } from '../..';
import { getJava } from '../../java';
import Path from './Path';
import PathAbstract from './PathAbstract';

export default class Paths extends lang.Object {

  constructor() {
    super()
    this._java = getJava().newInstanceSync(Paths._javaClassName())
  }

  static _javaClassName(): string {
    return 'java.nio.file.Paths'
  }

  static getSync(...files: string[]): Path {
    return Paths._buildSyncOrThrow(getJava().callStaticMethodSync.apply(getJava(), [Paths._javaClassName(), 'get'].concat(files)), new PathAbstract())
  }
  static get(...files: string[]): Path {
    return Paths._buildSyncOrThrow(getJava().callStaticMethodSync.apply(getJava(), [Paths._javaClassName(), 'get'].concat(files)), new PathAbstract())
  }
  //TODO: getPromise
}