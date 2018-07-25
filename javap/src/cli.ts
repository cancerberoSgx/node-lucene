import { writeFileSync } from 'fs';
import minimist from 'minimist';
import { dirname } from 'path';
import { mkdir } from 'shelljs';
import { javap } from './javap';
import { Config } from './types';

export async function mainCli() {
  const config = getConfig()
  try {
    main(config);
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
  const ast = javap(config);
  const output = config.pretty ? JSON.stringify(ast, null, 2) : JSON.stringify(ast);
  if (!config.output) {
    console.log(output);
  }
  else {
    mkdir('-p', dirname(config.output));
    writeFileSync(config.output, output);
  }
  config.fn && config.fn(ast);
}

export function help(code: number) {
  console.log(` 
  * jars: paths or globs to jars. In the command line must be comma-separated if more than one.
  * classes: Classes to print. In the command line must be comma-separated if more than one. If omitted the behavior will be as if allClasses===true
  * allClasses: generate all classes of given ClassPath
  * fn: callback called with resulting ast when finish
  * output: write ast json to file. If not provided will print json to stdout
  * memberFilter: if given will print only those members which name contain given string
  * removeEmptyArrayProps: if true will remove all those properties which value are empty array or false
  * pretty: if true JSON output will be indented if not minified
  * listJar: list given jars content files optionally filtering using listJarFilter glob pattern
  * listJarFilter: glob pattern to filter file when --listJar is used
  * help: prints this help and exit
   `);
  process.exit(code)
}
