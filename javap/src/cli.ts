import { javap } from './javap';
import { Config } from './types';
import minimist from 'minimist'
import { writeFileSync } from 'fs';
import { mkdir } from 'shelljs';
import { dirname } from 'path';
const getStdin: () => Promise<string> = require('get-stdin');

export async function main() {
  
  const config = getConfig()
  // console.log({config});
  // const inputs = await getInput(config)
  // .then(inputs => {
  // const astFragments = inputs.map(fragment=>javapJson(fragment  ))
  // const ast = Object.assign.apply(null, astFragments) // TODO: what if there are two keys ? is that possible  ? verify and print warning

  const ast = javap(config)
  const output = JSON.stringify(ast) // TODO: Support pretty output
  if(!config.output){
    console.log(output)
  }
  else {
    mkdir('-p', dirname(config.output))
    writeFileSync(config.output, output)
  }
  config.fn && config.fn(ast)
  // inputs.map(input=>parse(input, config))
  //   const ast = parse(inputs[0])
  //   console.log(JSON.stringify(ast))
  //   config.fn && config.fn(ast)
  // })
}
function getConfig(): Config{
  const args = minimist(process.argv.slice(2)) as any
  // console.log(args);
  return Object.assign({}, args, { 
    classes: (args.classes||'').split(','),
    jars: (args.jars||'').split(',')
  })
}

// function getInput(config: Config): Promise<string[]> {
//   if (config.stdin) {
//     return getStdin().then(s=>Promise.resolve([s]))
//   } else {
//     throw new Error('not implemented')
//   }
// }