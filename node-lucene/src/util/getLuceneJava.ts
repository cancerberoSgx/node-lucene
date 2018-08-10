import { getJava, Java, JavaOptions } from 'node-java-rt';

let java: Java

export function getLuceneJava(): Java {
  if (!java) {
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
    java = getJava(defaultJavaOptions)
  }
  return java
}