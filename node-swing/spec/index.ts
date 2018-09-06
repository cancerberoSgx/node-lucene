import { join } from 'path'

const Jasmine = require('jasmine')
import { sync as glob } from 'glob'
import minimist from 'minimist'
import { initialize, getJava } from '../src/util/getLuceneJava';

const jasmineRunner = new Jasmine()
const args = minimist(process.argv.slice(2)) as any
let specs: string[]

if (args.specs) {
  specs = (args.specs as string).split(',').map(spec => join(__dirname, spec))
}
else {
  specs = glob(join(__dirname, '**/*Spec.*s'))
    .filter(f => !f.endsWith('.d.ts'))
    .map(f => f.substring(0, f.length - 3))
}

jasmineRunner.specFiles = specs

initialize() // Heads up ! this call is important !  Make sure it's called before any other node-java related call. This is a mandatory call before using any node-lucene API so node-java is initialized first using lucene .jar in classpath and not without them like happens when getJava() is called directly from node-java-rt

// getLuceneJava().ensureJvm(() => jasmineRunner.execute())
jasmineRunner.execute()

