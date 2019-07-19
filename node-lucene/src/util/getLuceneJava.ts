import { getJava, Java, JavaOptions, setJavaOptions } from 'node-java-rt';
import { existsSync } from 'fs';


const luceneVersion = '7.7.2'
function getClassPath() {
  const jars = ['lucene-core', 'lucene-analyzers-common', 'lucene-queryparser']
  const prefixes = ['./lucene-lib/', 'node_modules/node-lucene/lucene-lib/']
  let prefix = prefixes.find(p => existsSync(`${p}lucene-core-${luceneVersion}.jar`))//'./lucene-lib/'
  if (prefix) {
    return jars.map(j => `${prefix}${j}-${luceneVersion}.jar`)
  }
  else {
    throw new Error('lucene jar files not found. Looked at ' + prefixes.map(p => `${p}lucene-core-${luceneVersion}.jar`).join(', '))
  }
}

const defaultJavaOptions: JavaOptions = {
  asyncOptions: {
    asyncSuffix: 'Async',
    syncSuffix: 'Sync',
    promiseSuffix: 'Promise',
    promisify: require('util').promisify
  },
  classpath: getClassPath(),
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
 * .jar in class path and not without them like happens when getJava() is called directly from node-java-rt
 */
export function initializeLucene() {
  getLuceneJava()
}
