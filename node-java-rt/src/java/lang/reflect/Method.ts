import Executable from './Executable';

export default class Method extends Executable {
  getName(): string {
    return this._java.getNameSync()
  }
}