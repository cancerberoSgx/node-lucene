import { JavaAst, BaseNode } from './types-ast';

export interface Config {

  /** paths or globs to jars. In the command line must be comma-separated if more than one. */
  jars?: string[]

  /** Classes to print. In the command line must be comma-separated if more than one. If omitted the behavior will be as if allClasses===true*/
  classes?: string[]

  /** generate all classes of given ClassPath */
  allClasses?: boolean

  /** callback called with resulting ast when finish */
  fn?: (ast: JavaAst) => void

  /** write ast json to file. If not provided will print json to stdout */
  output?: string

  /** if given will print only those members which name contain given string  */
  memberFilter?: string | ((s: BaseNode) => boolean)

  /** if true will remove all those properties which value are empty array or false */
  removeEmptyArrayProps?: boolean

  /** if true JSON output will be indented if not minified */
  pretty?: boolean

  /** list given jars content files optionally filtering using listJarFilter glob pattern */
  listJar?: boolean

  /** glob pattern to filter file when --listJar is used */
  listJarFilter?: string

  help?: string
}


export * from './types-ast'