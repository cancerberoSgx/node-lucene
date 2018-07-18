import { JavaAst } from './types-ast';

export interface Config {
  /** paths or globs to jars */
  jars?: string[]
  classes: string[]
  // /** generate all classes of given ClassPath */
  // allClasses?: boolean
  /** callback called with resulting ast when finish */
  fn?: (ast: JavaAst) => void
  // /** if true wi take javap output for stdin */
  // stdin?: boolean
  /** write ast json to file. If not provided will print json to stdout */
  output?: string
}


export * from './types-ast'