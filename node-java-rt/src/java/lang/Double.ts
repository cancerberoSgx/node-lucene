import Object from './Object'
import Method from './reflect/Method';
import { JavaBase, InstanceCreator } from '../JavaBase';
import { getJava } from '../java';

export default class Double extends Object
/* TODO:  implements Comparable<Double> */ {
  constructor(val: string = '0') {
    super()
    this._java = getJava().newInstanceSync('java.lang.Double', val)
  }
  static sum(a: Double, b: Double): number {
    return getJava().callStaticMethodSync('java.lang.Double', 'sum', a._java, b._java)
  }
}
