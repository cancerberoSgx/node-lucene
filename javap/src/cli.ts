import { writeFileSync } from 'fs'
import minimist from 'minimist'
import { dirname } from 'path'
import { mkdir } from 'shelljs'
import { javap } from './javap'
import { Config } from './types'

export async function mainCli() {
  const config = getConfig()
  try {
    main(config)
  } catch (error) {
    console.error(error)
    help(1)
  }
}

export function getConfig(): Config {
  const args = minimist(process.argv.slice(2)) as any
  return Object.assign({}, args, {
    classes: (args.classes || '').split(','),
    jars: (args.jars || '').split(','),
  })
}

/** main CLI function accepting user config and responsible of writing files after calling javap and resolving actions like --listJar and help */
export function main(config: Config) {
  if (config.help) {
    help(0)
  }
  const ast = javap(config)
  const output = config.pretty ? JSON.stringify(ast, null, 2) : JSON.stringify(ast)
  if (!config.output) {
    console.log(output)
  }
  else {
    mkdir('-p', dirname(config.output))
    writeFileSync(config.output, output)
  }
}

export function help(code: number) {
  console.log(`
  * \`jars\`: (\`string[]\`) - optional - paths or globs to jars. In the command line must be comma-separated if more than one.
  * \`classes\`: (\`string[]\`) - optional - Classes to print. In the command line must be comma-separated if more than one. If omitted the behavior will be as if allClasses===true
  * \`classesFilterByName\`: (\`string | ((s: string) => boolean)\`) - optional - filter classes by name. Could be glob-like pattern or function predicate
  * \`allClasses\`: (\`boolean\`) - optional - generate all classes of given ClassPath
  * \`classFilter\`: (\`((c: BaseNode) => boolean)\`) - optional - Filter class / interface nodes. Besides being able to filter them by name using \`classesFilterByName\` this predicate can be also used to filter nodes for example by modifier (public, private, etc)
  * \`output\`: (\`string\`) - optional - write ast json to file. If not provided will print json to stdout
  * \`memberFilter\`: (\`string | ((s: BaseNode) => boolean)\`) - optional - if given will print only those members which name contain given string
  * \`removeEmptyArrayProps\`: (\`boolean\`) - optional - if true will remove all those properties which value are empty array or false
  * \`pretty\`: (\`boolean\`) - optional - if true JSON output will be indented if not minified
  * \`help\`: (\`string\`) - optional - shows usage help
 `);

  process.exit(code)
}
