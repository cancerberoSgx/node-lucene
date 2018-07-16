
export type JavaAst = { [className: string]: ClassDeclaration } // TODO
export type MethodLikeSignature = any //TODO
export type FieldSignature = any//TODO
export type Scope = 'public' | 'protected' | 'private' | 'package'

export interface ClassDeclaration {
  name: string
  type: string
  scope: Scope
  modifiers: string
  extends: string[]
  implements: string[]
  constructors: MethodLikeSignature[]
  fields: FieldSignature[]
  methods: MethodLikeSignature[]
} // TODO

export interface Config {
  classpath: string[]
  /** class names or name globs to generate ast from */
  classes?: string[]
  allClasses? : boolean
  fn?: (ast: JavaAst) => void

}