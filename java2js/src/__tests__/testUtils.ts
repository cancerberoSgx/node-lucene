import { listDefaultLibs, javap } from 'javap';

export const rtJar = listDefaultLibs().find(j => j.endsWith('rt.jar')) || '/usr/lib/jvm/java-8-jdk/jre/lib/rt.jar'
export const luceneCoreJar = '../node-lucene/lucene-lib/lucene-core-7.4.0.jar'

export function testJavap() {
  const result = javap({
    classPath: [rtJar],
    classesFilterByName: 'java.*' // heads up - I'm filtering here if not I'm getting a resource missing error probably 
    // I need to include another .jar but not important right now
  })
  return result
}
