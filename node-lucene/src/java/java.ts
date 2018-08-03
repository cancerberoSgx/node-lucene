let java: Java

export function getJava(): Java {
  if (!java) {
    java = require("java")
    java.classpath.push("./lucene-lib/lucene-core-7.4.0.jar")
    java.classpath.push("./lucene-lib/lucene-analyzers-common-7.4.0.jar")
    java.classpath.push("./lucene-lib/lucene-queryparser-7.4.0.jar")
  }
  return java
}

export interface Java {
  classpath: string[]
  newInstanceSync(javaClass: string): any
  newInstanceSync<T>(javaClass: string): T
}