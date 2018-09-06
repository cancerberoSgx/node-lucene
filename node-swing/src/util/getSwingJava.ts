import { getJava as getJavaRt, Java, JavaOptions, setJavaOptions } from 'node-java-rt'

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

let java: Java

export function getJava(): Java {
  if (!java) {
    setJavaOptions(defaultJavaOptions)
    java = getJavaRt()
  }
  return java
}

// /**
//  * This is a mandatory call before using any node-lucene API so node-java is initialized first using lucene
//  * .jar in classpath and not without them like happens when getJava() is called directly from node-java-rt
//  */
// export function initialize() {
//   getJava()
// }
