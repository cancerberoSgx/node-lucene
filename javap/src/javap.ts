import { Config, JavaAst } from './types';
import { resolve } from 'path';

// import { JavaAst, ClassDeclaration } from './types';


export function javap(config: Config): JavaAst {
  const fullMethodSignature = 'javapJson([Ljava/lang/String;[Ljava/lang/String;)Ljava/lang/String;'
const java = getJava()
// debugger
console.log((config.jars||[]).map(p=>resolve(p)));
const jars = (config.jars||[]).map(p=>resolve(p))
jars.forEach(j=>{
  if(!cp.includes(j)){
    java.classpath.push(j)

  }
})
  const jjars = java.newArray("java.lang.String", jars);
  const jclasses = java.newArray("java.lang.String", config.classes||[]);
  const json = java.callStaticMethodSync('JavapJsonOutput', fullMethodSignature, jjars, jclasses)
  return JSON.parse(json)
}


let java: any
const cp: string[] = []
function getJava(): any {
  if (!java) {
    java = require("java");
    java.classpath.push("./node_modules/javap-json/dist/javap-json.jar");
  }
  return java
}
