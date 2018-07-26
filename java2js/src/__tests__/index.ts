import { join } from 'path';

const Jasmine = require('jasmine')
import { sync as glob } from 'glob'
import minimist from 'minimist'

const jasmineRunner = new Jasmine();
const args = minimist(process.argv.slice(2)) as any
let specs: string[];

if (args.specs) {
  specs = (args.specs as string).split(',').map(spec => join(__dirname, spec))
}
else {
  specs = glob(join(__dirname, '**/*.test.*s'))
    .filter(f => !f.endsWith('.d.ts'))
    .map(f => f.substring(0, f.length - 3))
}

jasmineRunner.specFiles = specs
jasmineRunner.execute()


