import { writeFileSync } from 'fs';
import { dirname } from 'path';
import { mkdir } from 'shelljs';
import { Config } from './types';
import { javap } from './javap';

/** main public function accepting user config and responsible of writing files after calling javap and resolving actions like --listJar and help */
export function main(config: Config) {
  if (config.help) {

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
