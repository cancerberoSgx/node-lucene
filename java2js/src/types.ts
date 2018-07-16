export interface Project {
  files: SourceFile[]
}

export interface SourceFile{
  name: string
  content: string
}

export interface Node {
  name: string
  describe: string
}

export interface Class extends Node {
  // extends: 
}