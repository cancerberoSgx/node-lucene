import { parse } from './parser';
import { Config } from './types';
import minimist from 'minimist'
const getStdin: () => Promise<string> = require('get-stdin');

export function main() {
  
  const config = getConfig()
  // console.log({config});
  getInput(config).then(str => {
    const ast = parse(str[0])
    console.log(JSON.stringify(ast))
    config.fn && config.fn(ast)
  })
}
function getConfig(): Config{
  const args = minimist(process.argv.slice(2)) as any
  // console.log(args);
  
  return Object.assign({}, args, {

  })
}

function getInput(config: Config): Promise<string[]> {
  if (config.stdin) {
    return getStdin().then(s=>Promise.resolve([s]))
  } else {
    throw new Error('not implemented')
  }
}