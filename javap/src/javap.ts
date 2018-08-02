import { join, resolve } from 'path'
import { getAllClassNamesFromJar } from './listJarFiles'
import { Config, JavaAst } from './types'
import { BaseNode } from './types-ast'
import minimatch from 'minimatch';

/**
 * Perform the main parsing job calling javap-json and post processing the result
 */
export function javap(config: Config): JavaAst {
  let result = JSON.parse(javapNoParse(config), config.removeEmptyArrayProps ? removeEmptyArrayPropReviver : undefined) as JavaAst
  if (config.classFilter) {
    result = result.filter(config.classFilter)
  }
  if (config.memberFilter) {
    const p = config.memberFilter
    const predicate: (s: BaseNode) => boolean = typeof p === 'string' ? n => n.name.includes(p) : p
    result.forEach(c => {
      c.methods = c.methods.filter(predicate)
      c.fields = (c.fields || []).filter(predicate)
    })
  }
  return result

  function removeEmptyArrayPropReviver(k: string, v: any): any {
    if (!v || Array.isArray(v) && v.length === 0) {
      return undefined
    }
    return v
  }
}

/**
 * Returns just json string without parsing it or filtering it.
 */
export function javapNoParse(config: Config): string {
  const fullMethodSignature = 'javapJson([Ljava/lang/String;[Ljava/lang/String;)Ljava/lang/String;'
  const java = getJava()
  const classPath = (config.classPath || []).concat(config.classPath || []).map(p => resolve(p))
  addclassPath(classPath)
  const classes = resolveClasses(config)
  const jclassPath = java.newArray('java.lang.String', classPath)
  const jclasses = java.newArray('java.lang.String', classes)
  return java.callStaticMethodSync('JavapJsonOutput', fullMethodSignature, jclassPath, jclasses)
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
function addclassPath(classPath: string[]) {
  classPath.forEach(j => {
    if (!cp.includes(j)) {
      java.classpath.push(j)
    }
  })
}

function resolveClasses(config: Config): string[] {
  let classes: string[] = []
  if (config.allClasses || !config.classes) {
    if (!config.classPath || !config.classPath.length) {
      throw new Error('Invalid invocation: you must provide classes or classPath')
    }
    config.classPath.forEach(jar => {
      classes = classes.concat(getAllClassNamesFromJar(jar))
    })
  }
  else {
    classes = config.classes
  }
  classes = classes
    .filter((v, i, a) => a.indexOf(v) === i) // deduplicate
    .filter(i => i.trim()) // remove empties
  if (config.classesFilterByName) {
    //@ts-ignore
    const predicate: NodePredicate = typeof config.classesFilterByName === 'string' ? n => minimatch(n, config.classesFilterByName) : config.classesFilterByName
    classes = classes.filter(predicate)
  }
  return classes
}
