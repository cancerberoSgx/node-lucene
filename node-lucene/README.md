nodejs API and bindings to apache lucene

# why?

 * lucene is THE best index / search engine
 * I want to call lucene API directly from my nodejs program without forking or making requests as fast as possible
 * I don't want to start a server like solr or elasticsearch 

# TODO

 * use https://github.com/joeferner/node-java-maven to manage lucene jars and run in npm prepare script
 * do reflection in java to get method / class signatures and generate TS interfaces and implementations automatically
