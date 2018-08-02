import { SourceFileStructure } from 'ts-simple-ast';
import { JavaAst, Method, Config } from 'javap/dist';

export interface File {
  fileName: string
  getContent(): string
}

export interface Transformer {
  transform(options: TransformerOptions): TransformerResult
}

export interface TransformerResult {
  files: File[]
  ast: JavaAst
}

/** input could be provided by giving classes+jars or by providing ast */
export interface TransformerOptions {

  /** optionally, if user doesn't pass `ast` it must give `classes` and `jars` as a javapOptions */
  javapOptions?: Config

  /** optional input AST - output of calling javap() */
  ast?: JavaAst

  // outputDir?: string

  // /** TODO: custom param names for given method like. Default is arg0, arg1, etc */
  // paramNames?: (node: Method) => string[]
}
