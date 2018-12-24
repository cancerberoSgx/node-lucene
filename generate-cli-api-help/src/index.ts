import Project, { InterfaceDeclaration, JSDoc } from 'ts-simple-ast'
import { readFileSync } from 'fs';

/**
 * Usage options. This interface describes both Node.js API and CLI options. Example: {input: 'src/index.ts'} "generate-cli-api-help --input src/index.ts"
 */
export interface Options {
  /** Path to the file containing the options / config interface from which to extract usage instructions */
  input: string
  /** Name of the interface defining options / config from which to extract usage instructions */
  interfaceName: string
  /** optional name for generated usage function */
  functionName?: string
  /** output format - as JavaScript template string or as Markdown. Default: markdown */
  format?: 'markdown' | 'javascriptString' | 'javascriptStringNoVar'
}

export function printHelp(options: Options): string {
  options.format = options.format || 'markdown'
  const isMd = options.format === 'markdown'
  const quote = isMd ? '`' : '\\`'
  const prefix =  options.format ==='javascriptString' ? 'const helpText = `': ``
  const postfix = options.format ==='javascriptString'  ? '`': ``
  const node = getNode(options)
  let s = `${prefix}${printJsDoc(node.getJsDocs())}
 * ${ node.getProperties().map(
      p => quote + p.getName() + quote + ': (' + quote + p.getTypeNode().getText() + quote + ') - ' +
        (p.hasQuestionToken() ? 'optional' : 'mandatory') + ' - ' + printJsDoc(p.getJsDocs())).join('\n * ')}
${postfix}`
  return s
}

function printJsDoc(jsdocs: JSDoc[]): string {
  return jsdocs.map(j => j.getInnerText().replace(/`/gim, '\\`')).join('\n')
}

function getNode(options: Options): InterfaceDeclaration {
  const project = new Project({ useVirtualFileSystem: true })
  const sourceFile = project.createSourceFile('sample.ts', readFileSync(options.input).toString())
  try {
    return sourceFile.getInterfaceOrThrow(options.interfaceName)
  } catch (error) {
    console.error('Error while getting interface from input files, are you sure interface exists?')
    throw error
  }
}