import AttributeSource from '../util/AttributeSource';

export default class TokenStream extends AttributeSource {

  incrementToken(): boolean {
    return this._java.incrementTokenSync()
  }
  reflectAsString(prependAttClass: boolean): string {
    return this._java.reflectAsStringSync(prependAttClass)
  }
}