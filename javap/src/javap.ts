import { Config, JavaAst } from './types';
import { resolve, join } from 'path';

export function javap(config: Config): JavaAst {
  const fullMethodSignature = 'javapJson([Ljava/lang/String;[Ljava/lang/String;)Ljava/lang/String;'
  const java = getJava()
  const jars = (config.jars || []).map(p => resolve(p))
  addJars(jars)
  const jjars = java.newArray('java.lang.String', jars);
  const jclasses = java.newArray('java.lang.String', config.classes);
  const json = java.callStaticMethodSync('JavapJsonOutput', fullMethodSignature, jjars, jclasses)
  return JSON.parse(json)
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