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
  format?: 'markdown' | 'javascriptString'
}
