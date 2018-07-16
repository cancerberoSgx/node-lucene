import { parse } from './parser';
import { CliConfig } from './types';
const getStdin: ()=>Promise<string> = require('get-stdin');

export function main(config: CliConfig){
  getStdin().then(str => {
    console.log(parse(str))
    config.fn && config.fn(str)
  })
}