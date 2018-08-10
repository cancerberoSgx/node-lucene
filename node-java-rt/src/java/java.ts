import { Java, JavaOptions } from './types';

let java: Java

const defaultJavaOptions: JavaOptions = {
  asyncOptions: {
    asyncSuffix: 'Async',
    syncSuffix: 'Sync',
    promiseSuffix: 'Promise',
    promisify: require('util').promisify
  },
  classpath: [],
  options: []
}

export function getJava(javaOptions: JavaOptions = defaultJavaOptions): Java {
  if (!java) {
    java = require("java")
    // Object.assign(java, javaOptions) // TODO: throw native v8 exception ! - report to node-java ? 
    java.asyncOptions = javaOptions.asyncOptions
    javaOptions.classpath.forEach(cp => java.classpath.push(cp))
    // javaOptions.classpath = java.classpath
    java.options = javaOptions.options
  }
  return java
}

export function getJavaObjectOrThrow(obj: any) {
  if (obj._java) {
    return obj._java
  }
  else {
    throw new Error(`Object ${obj} expected to have property _java`)
  }
}
