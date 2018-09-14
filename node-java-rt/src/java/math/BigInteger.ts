import * as java from '../..';
import { getJava } from '../java';
import Object_ from '../lang/Object';

export default class BigInteger extends Object_ {
  constructor(val: string = '0') {
    super()
    this._java = getJava().newInstanceSync('java.math.BigInteger', val)
  }
  multiply(i: BigInteger): BigInteger {
    return BigInteger._buildSyncOrThrow(this._java.multiplySync(i._java), new BigInteger())
  }
}