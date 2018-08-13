import { getLuceneJava } from '../util/getLuceneJava';
import Field from './Field';
import FieldStore from './FieldStore';

export default class TextField extends Field {

  constructor(fieldName: string, fieldValue: string, fieldStore: FieldStore) {
    super()
    this._java = getLuceneJava().newInstanceSync(TextField._javaClassName(), fieldName, fieldValue, fieldStore._java)
  }

  static _javaClassName(): string {
    return 'org.apache.lucene.document.TextField'
  }

}