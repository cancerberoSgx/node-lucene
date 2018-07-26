import { listDefaultLibs, javap } from 'javap';

// export const javapJsonJar = 'node_modules/javap-json/dist/javap-json.jar'
export const rtJar = listDefaultLibs().find(j => j.endsWith('rt.jar')) || '/usr/lib/jvm/java-8-jdk/jre/lib/rt.jar'
// export const rtResourcesJar = '/usr/lib/jvm/java-8-jdk/jre/lib/resources.jar'

export function testJavap() {

  const config = {
    jars: [rtJar],
    classesFilter: 'java.*' // heads up - I'm filtering here if not I'm getting a resource missing error probably I need to include another .jar but not important right now
  }
  // console.log('CONNNN testJavap ', config);
  const result = javap(config)
  return result
}