import { BaseNode } from './types-ast';
export interface Config {

  /** paths or globs to jars. In the command line must be comma-separated if more than one. */
  jars?: string[]

  /** Classes to print. In the command line must be comma-separated if more than one. If omitted the behavior will be as if allClasses===true*/
  classes?: string[]

  /** filter classes by name. Could be glob-like pattern or function predicate */
  classesFilterByName?: string | ((s: string) => boolean)

  /** generate all classes of given ClassPath */
  allClasses?: boolean

  /** Filter class / interface nodes. Besides being able to filter them by name using `classesFilterByName` this predicate can be also used to filter nodes for example by modifier (public, private, etc) */
  classFilter?: ((c: BaseNode) => boolean)

  /** write ast json to file. If not provided will print json to stdout */
  output?: string

  /** if given will print only those members which name contain given string  */
  memberFilter?: string | ((s: BaseNode) => boolean)

  /** if true will remove all those properties which value are empty array or false */
  removeEmptyArrayProps?: boolean

  /** if true JSON output will be indented if not minified */
  pretty?: boolean

  /** shows usage help */
  help?: string

  // /** list given jars content files optionally filtering using listJarFilter glob pattern */
  // listJar?: boolean

  // /** glob pattern to filter files when --listJar is used */
  // listJarFilter?: string

  // /** callback called with resulting ast when finish */
  // fn?: (ast: JavaAst) => void

}


export * from './types-ast'