import Project, { InterfaceDeclaration, JSDoc } from 'ts-simple-ast'
import { readFileSync } from 'fs';

/**
 * Usage options
 */
export interface Options {
  /** Path to the file containing the options / config interface from which to extract usage instructions */
  fileWithInterface: string
  /** Name of the interface defining options / config from which to extract usage instructions */
  interfaceName: string
  /** optional name for generated usage function */
  functionName?: string
}

export function printHelp(options: Options): string {
  const node = getNode(options)
  let s = `${printJsDoc(node.getJsDocs())}:

 * ${node.getProperties().map(p => p.getName() + ': ' + printJsDoc(p.getJsDocs())).join('\n * ')}`
  return s
}

function printJsDoc(jsdocs: JSDoc[]): string {
  return jsdocs.map(j => j.getInnerText().replace(/`/gim, '\\`')).join('\n')
}

function getNode(options: Options): InterfaceDeclaration {
  const project = new Project({ useVirtualFileSystem: true })
  const sourceFile = project.createSourceFile('sample.ts', readFileSync(options.fileWithInterface).toString())
  return sourceFile.getInterfaceOrThrow(options.interfaceName)
}