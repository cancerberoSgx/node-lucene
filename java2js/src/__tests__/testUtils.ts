import { listDefaultLibs, javap } from 'javap';
// import { exec } from 'shelljs';
// import { ok } from 'assert';

export const rtJar = listDefaultLibs().find(j => j.endsWith('rt.jar')) || '/usr/lib/jvm/java-8-jdk/jre/lib/rt.jar'
export const luceneCoreJar = '../node-lucene/lucene-lib/lucene-core-7.4.0.jar'

export function testJavap() {
  const result = javap({
    jars: [rtJar],
    classesFilterByName: 'java.*' // heads up - I'm filtering here if not I'm getting a resource missing error probably 
    // I need to include another .jar but not important right now
  })
  return result
}

// export function compileAndParseTest1() {
  // const folder = `src/__tests__/assets/test1/`
  // const p = exec(`javac ${folder}`)
  // ok(p.code === 0)
  // const ast = javap({
  //   jars: [folder],
  //   classesFilterByName: '__tests__.assets.test1.*'
  // })
// }