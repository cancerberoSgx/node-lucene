import { Method } from 'javap';

export interface Config {
  /** TODO: custom param names for given method like. Default is arg0, arg1, etc */
  paramNames?: (node: Method) => string[]
}
// project types (for generating output TS project - not input AST)

export interface Project {
  files: SourceFile[]
}

export interface SourceFile {
  name: string
  content: string
}

// export interface Node {
//   name?: string
// }

// export interface Class extends Node {
//   extends: string
//   implements: string[]
// }


