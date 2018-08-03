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
  // newInstanceSync(javaClass: string): any
  newInstanceSync<T>(javaClass: string): T
}


export type Callback<T> = (error: Error, value: T) => void

/**

JavaScript only supports 32-bit integers. Because of this java longs must be treated specially.
When getting a long result the value may be truncated. If you need the original value there is
a property off of the result called "longValue" which contains the un-truncated value as a string.
If you are calling a method that takes a long you must create it using [java.newInstance](#javaNewInstance).

```javascript
var javaLong = java.newInstanceSync("java.lang.Long", 5);
console.log('Possibly truncated long value: ' + javaLong);
console.log('Original long value (as a string): ' + javaLong.longValue);
java.callStaticMethodSync("Test", "staticMethodThatTakesALong", javaLong);
```
*/
export interface Long extends Number {
  longValue?: string
}