import B from './b';
import Base from '../base';

export default class A extends Base {
  say() {
    console.log('say');
  }
  getB(): B { return new B() }
}

