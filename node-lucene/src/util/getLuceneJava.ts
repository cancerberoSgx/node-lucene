import { getJava, Java, JavaOptions, setJavaOptions } from 'node-java-rt';

const defaultJavaOptions: JavaOptions = {
  asyncOptions: {
    asyncSuffix: 'Async',
    syncSuffix: 'Sync',
    promiseSuffix: 'Promise',
    promisify: require('util').promisify
  },
  classpath: [
    './lucene-lib/lucene-core-7.4.0.jar',
    './lucene-lib/lucene-analyzers-common-7.4.0.jar',
    './lucene-lib/lucene-queryparser-7.4.0.jar',
  ],
  options: []
}

let java: Java

export function getLuceneJava(): Java {
  if (!java) {
    setJavaOptions(defaultJavaOptions)
    java = getJava()
  }
  return java
}

/**
 * This is a mandatory call before using any node-lucene API so node-java is initialized first using lucene
 * .jar in classpath and not without them like happens when getJava() is called directly from node-java-rt
 */
export function initializeLucene() {
  getLuceneJava()
}