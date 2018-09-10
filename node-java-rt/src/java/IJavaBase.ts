
export interface IJavaBase {
  _javaClassName(): string

  /** @internal */
  readonly _java: any
}