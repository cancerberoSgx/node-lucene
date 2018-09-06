import { Component } from '../../java/awt/Component';

export class Container extends Component {
  constructor() {
    super()
  }
  add(comp: Component): Component {
    return Container._buildSync(this._java.addSync(comp._java), new Component())
  }
}