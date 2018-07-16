
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
  /** paths or globs to jars */ 
  classpath: string[]
  classes?: string[]
  /** generate all classes of given ClassPath */
  allClasses?: boolean
  /** callback called with resulting ast when finish */
  fn?: (ast: JavaAst) => void
  /** if true wi take javap output for stdin */
  stdin?: boolean
}