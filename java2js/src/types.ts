import { SourceFileStructure } from 'ts-simple-ast';
import { JavaAst, Method, Config } from 'javap/dist';

export interface File {
  fileName: string
  sourceFile: SourceFileStructure
}

export interface Transformer {
  transform(options: TransformerOptions): TransformerResult
}

export interface TransformerResult {
  files: File[]
}

/** input could be provided by giving classes+jars or by providing ast */
export interface TransformerOptions {

  /** optionally, if user doesn't pass `ast` it must give `classes` and `jars` in this options */
  javapOptions?: Config

  /** optional input AST - output of calling javap() */
  ast?: JavaAst

  // outputDir?: string

  // /** TODO: custom param names for given method like. Default is arg0, arg1, etc */
  // paramNames?: (node: Method) => string[]
}


// // project types (for generating output TS project - not input AST)

// export interface Project {
//   files: SourceFile[]
// }


// // export interface Node {
// //   name?: string
// // }

// // export interface Class extends Node {
// //   extends: string
// //   implements: string[]
// // }


