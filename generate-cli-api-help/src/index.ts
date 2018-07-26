import Project, { InterfaceDeclaration, JSDoc } from 'ts-simple-ast'
import { readFileSync } from 'fs';

/**
 * Usage options:
 */
export interface Options {
  /** Path to the file containing the options / config interface from which to extract usage instructions */
  fileWithInterface: string
  /** Name of the interface defining options / config from which to extract usage instructions */
  interfaceName: string
  /** optional name for generated usage function */
  functionName?: string
  /** output format - as JavaScript template string or as Markdown. Default: markdown */
  format?: 'markdown' | 'javascriptString'
}

export function printHelp(options: Options): string {
  options.format = options.format || 'markdown'
  const quote = options.format === 'markdown' ? '`' : '\\`'
  const node = getNode(options)
  let s = `\`${printJsDoc(node.getJsDocs())}
 * ${node.getProperties().map(p => quote + p.getName() + quote + ': (' + quote + p.getTypeNode().getText() + quote + ') - ' + (p.hasQuestionToken() ? 'optional' : 'mandatory') + ' - ' + printJsDoc(p.getJsDocs())).join('\n * ')}
\``
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