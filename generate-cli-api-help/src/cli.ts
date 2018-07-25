import minimist from 'minimist';
import { Options, printHelp } from '.';

export async function mainCli() {
  const config = getConfig()
  if (!config.fileWithInterface && !config.interfaceName) {
    console.log('Incorrect call you must give --fileWithInterface and --interfaceName');
    process.exit(1)
  }
  console.log(printHelp(config))
}

function getConfig(): Options {
  const args = minimist(process.argv.slice(2)) as any
  return Object.assign({}, args, {
  })
}
