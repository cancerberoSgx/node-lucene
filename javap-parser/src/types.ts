
export type JavaAst = {[className: string]: ClassDeclaration} // TODO
export type MethodLikeSignature = any //TODO
export type FieldSignature = any//TODO
export type Scope = 'public'|'protected'|'private'|'package'
export interface ClassDeclaration{
  name: string
  type: string
  scope: Scope
  describe: string
  extends: string[]
  implements: string[]
  constructors: MethodLikeSignature[]
  fields: FieldSignature[]
  methods: MethodLikeSignature[]
} // TODO

export interface CliConfig {
  fn?: (s: string)=>void
}