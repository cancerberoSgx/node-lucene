import minimist from 'minimist';
import { Config } from './types';
import { main } from './main';

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
