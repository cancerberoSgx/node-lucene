import { Config, JavaAst } from './types';
import { resolve, join } from 'path';
import { BaseNode } from './types-ast';

/**
 * Main public function that perform the job
 */
export function javap(config: Config): JavaAst {
  const result = JSON.parse(javapNoParse(config), config.removeEmptyArrayProps ? removeEmptyArrayPropReviver : undefined) as JavaAst
  // console.log(result);

  if (config.memberFilter) {
    const p = config.memberFilter
    const predicate: (s: BaseNode) => boolean = typeof p === 'string' ? n => n.name.includes(p) : p
    result.forEach(c => {
      c.methods = c.methods.filter(predicate)
      c.fields = (c.fields||[]).filter(predicate)
    })
  }
  return result
}
/**
 * Main public function that perform the job
 */
export function javapNoParse(config: Config): string {
  const fullMethodSignature = 'javapJson([Ljava/lang/String;[Ljava/lang/String;)Ljava/lang/String;'
  const java = getJava()
  const jars = (config.jars || []).map(p => resolve(p))
  addJars(jars)
  const jjars = java.newArray('java.lang.String', jars);
  const jclasses = java.newArray('java.lang.String', config.classes);
  return java.callStaticMethodSync('JavapJsonOutput', fullMethodSignature, jjars, jclasses)
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