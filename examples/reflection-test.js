var java = require("java");
java.classpath.push("./lucene-lib/lucene-core-7.4.0.jar");
java.classpath.push("./lucene-lib/lucene-analyzers-common-7.4.0.jar");
java.classpath.push("./lucene-lib/lucene-queryparser-7.4.0.jar");


var idx = java.newInstanceSync("org.apache.lucene.store.RAMDirectory");