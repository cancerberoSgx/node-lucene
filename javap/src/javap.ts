import { writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { mkdir } from 'shelljs';
import { getAllClassNamesFromJar } from './listJarFiles';
import { Config, JavaAst } from './types';
import { BaseNode } from './types-ast';

/**
 * Perform the main parsing job calling javap-json and post processing the result 
 */
export function javap(config: Config): JavaAst {
  const result = JSON.parse(javapNoParse(config), config.removeEmptyArrayProps ? removeEmptyArrayPropReviver : undefined) as JavaAst
  if (config.memberFilter) {
    const p = config.memberFilter
    const predicate: (s: BaseNode) => boolean = typeof p === 'string' ? n => n.name.includes(p) : p
    result.forEach(c => {
      c.methods = c.methods.filter(predicate)
      c.fields = (c.fields || []).filter(predicate)
    })
  }
  return result
}

/**
 * Returns just json string without parsing it or filtering it.
 */
export function javapNoParse(config: Config): string {
  const fullMethodSignature = 'javapJson([Ljava/lang/String;[Ljava/lang/String;)Ljava/lang/String;'
  const java = getJava()
  const jars = (config.jars || []).map(p => resolve(p))
  addJars(jars)
  const classes = resolveClasses(config)
  const jjars = java.newArray('java.lang.String', jars);
  const jclasses = java.newArray('java.lang.String', classes);
  return java.callStaticMethodSync('JavapJsonOutput', fullMethodSignature, jjars, jclasses)
}

/** main public function accepting user config and responsible of writing files after calling javap */
export function main(config: Config) {
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


let java: any
function getJava(): any {
  if (!java) {
    java = require('java')
    java.options.push('-Xrs')
    java.classpath.push(join(__dirname, '..', "node_modules/javap-json/dist/javap-json.jar"))
  }
  return java
}

const cp: string[] = []
function addJars(jars: string[]) {
  jars.forEach(j => {
    if (!cp.includes(j)) {
      java.classpath.push(j)
    }
  })
}

function removeEmptyArrayPropReviver(k: string, v: any): any {
  if (!v || Array.isArray(v) && v.length === 0) {
    return undefined
  }
  return v
}

function resolveClasses(config: Config): string[] {
  let classes: string[] = []
  if (config.allClasses || !config.classes) {
    if (!config.jars || !config.jars.length) {
      throw new Error('Invalid invocation: you must provide classes or jars')
    }
    config.jars.forEach(jar => {
      classes = classes.concat(getAllClassNamesFromJar(jar))
    })
    classes = classes
      .filter((v, i, a) => a.indexOf(v) === i) // deduplicate
      .filter(i => !!i.trim()) // remove empties
    debugger
  }
  else {
    classes = config.classes
  }
  return classes
}