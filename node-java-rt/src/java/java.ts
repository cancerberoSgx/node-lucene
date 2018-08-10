import { Java } from './types';

let java: Java

export function getJava(): Java {
  if (!java) {
    java = require("java")

    java.asyncOptions = {
      asyncSuffix: 'Async',
      syncSuffix: 'Sync',
      promiseSuffix: 'Promise',
      promisify: require('util').promisify
    }

    java.classpath.push("./lucene-lib/lucene-core-7.4.0.jar")
    java.classpath.push("./lucene-lib/lucene-analyzers-common-7.4.0.jar")
    java.classpath.push("./lucene-lib/lucene-queryparser-7.4.0.jar")
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
