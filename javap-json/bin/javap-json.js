#!/usr/bin/env node

const shell = require('shelljs')
const path = require('path')
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))
shell.config.silent = true

if (!args.classes) {
  console.log('Incorrect call you must provide --classes argument. Example: \njavap-json --output outFile.json --classes org.apache.lucene.store.RAMDirectory,org.apache.lucene.store.LockFactory --jars ../node-lucene/lucene-lib/lucene-core-7.4.0.jar,../node-lucene/lucene-lib/lucene-queryparser-7.4.0.jar');
  process.exit(1)
}

const classes = args.classes
const jars = args.jars || ''

const p = shell.exec(`java -jar ${path.join(__dirname, '..', 'dist', 'javap-json.jar')} ${classes} ${jars}`)

if (p.code != 0) {
  console.error(p.stderr)
  process.exit(p.code)
}
if (args.output) {
  shell.ShellString(p.stdout).to(args.output)
  console.log('JSON written in '+args.output)
}
else {
  console.log(p.stdout)
}
process.exit(p.code)