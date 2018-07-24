import minimist from 'minimist';
import { main } from './javap';
import { Config } from './types';

export async function mainCli() {
  const config = getConfig()
  main(config);
}

function getConfig(): Config {
  const args = minimist(process.argv.slice(2)) as any
  return Object.assign({}, args, {
    classes: (args.classes || '').split(','),
    jars: (args.jars || '').split(','),
  })
}
