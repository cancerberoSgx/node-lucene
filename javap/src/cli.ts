import { parse } from './parser';
import { Config } from './types';
const getStdin: ()=>Promise<string> = require('get-stdin');

export function main(config: Config){
  getStdin().then(str => {    
    const ast = parse(str)
    console.log(JSON.stringify(ast))
    config.fn && config.fn(ast)
  })
}