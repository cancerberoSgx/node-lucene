import minimist from 'minimist';
import { Options, printHelp } from '.';

export async function mainCli() {
  const config = getConfig()
  if (!config.input || !config.interfaceName) {
    console.log('Incorrect call\n' + printOwnHelp());
    process.exit(1)
  }
  console.log(printHelp(config))
}

function getConfig(): Options {
  const args = minimist(process.argv.slice(2)) as any
  const config = Object.assign({}, args, {
  })
  // console.log({ config });
  return config
}

function printOwnHelp(): string {
  return printHelp({
    input: 'src/index.ts',
    interfaceName: 'Options'
  })
}