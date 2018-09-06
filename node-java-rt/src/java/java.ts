import { Java, JavaOptions } from './types';

let java: Java

let defaultJavaOptions: JavaOptions = {
  asyncOptions: {
    asyncSuffix: 'Async',
    syncSuffix: 'Sync',
    promiseSuffix: 'Promise',
    promisify: require('util').promisify
  },
  classpath: [],
  options: []
}

export function setJavaOptions(options: JavaOptions) {
  defaultJavaOptions = options //TODO: Object.assign preserve defaults recursively
}

export function getJava(): Java {
  if (!java) {
    java = require("java")
    // Object.assign(java, javaOptions) // TODO: throw native v8 exception ! - report to node-java ? 
    java.asyncOptions = defaultJavaOptions.asyncOptions
    defaultJavaOptions.classpath.forEach(cp => java.classpath.push(cp))
    java.options = defaultJavaOptions.options
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
