
/*
user use javap directly and pass output to stdin
```
javap -s -classpath lucene-lib/lucene-core-7.4.0.jar org.apache.lucene.store.RAMDirectory > node javap-parser > parsed.json

```
*/

import { parse } from './parser';
const getStdin: ()=>Promise<string> = require('get-stdin');

export interface Config {
  fn?: (s: string)=>void
}
export function main(config: Config){
  getStdin().then(str => {
    console.log(parse(str))
    config.fn && config.fn(str)
  })
}