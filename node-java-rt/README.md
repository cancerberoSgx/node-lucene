 * (partial) support for java.lang based on node-java
 * (partial) support for java.util based on node-java. 
 * Basic abstraction on top of node-java
 * typings for node-java
 * Projects like node-lucene are based on this.


# TODO

 * support node 12 - currently because `java` don't support node 12 we neither. node 11 is supported. 
 * report TS issue - cannot name a class 'Object' and invoke its static method from constructor. See java.lang.Object.ts which i had to name Object_ because of this
 * TS issue : // TODO: how to force users to use generic in new call expression ? "Type parameters cannot appear on a constructor declaration." - see LinkedList.ts 
 * consider deprecating *Async methods since promises are available OOTB in node LTS, can be pollyfilled in older Node versions and callbacks are "obsolete" today in favor of promises. Supporting *Async is double work and testing it is harder (testing promises is just copy&paste *Sync and add async/await while testing *Async implies callbacks and require('async') - test code is totally different - too much work and no real gain). 
 * async constructors ? today calling `var o = new java.lang.Object()` is sync - should we support async analogy for example, `var o = await java.lang.Object.newAsync()`
 * node-java issue: see java.ts : 
    var java = require("java")
    // Object.assign(java, javaOptions) // TODO: throw native v8 exception ! - report to node-java ? 
 * experiment with java threads and node.js

 * https://dzone.com/articles/dynamic-subtyping-java
 