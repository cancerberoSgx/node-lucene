import { javap } from './javap';
import { Config } from './types';
import minimist from 'minimist'
import { writeFileSync } from 'fs';
import { mkdir } from 'shelljs';
import { dirname } from 'path';

export async function main() {
  const config = getConfig()
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
}
function getConfig(): Config{
  const args = minimist(process.argv.slice(2)) as any
  return Object.assign({}, args, { 
    classes: (args.classes||'').split(','),
    jars: (args.jars||'').split(','),
  })
}
