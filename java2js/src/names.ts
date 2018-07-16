// classes names transformations
/**
 * org.apache.lucene.store.RAMDirectory => org/apache/lucene/store/RAMDirectory/ts (depends on config)
 */
export function getSourceFileName(name: string): string {
return null
}
/**
 * converts given type name to TS project name suitable to be printed
 * java.lang.String => string
 * foo.bar.Class2 => Class2 (depends on config)
 * 
 * TODO: java.util.Date => Date ? - node-java supports that?
 */
export function getTypeName(name: string): string {
return null
}
/**
 * org.apache.lucene.store.RAMDirectory => RAMDirectory (depends on config)
 */
export function getClassName(name: string): string {
return null
}
