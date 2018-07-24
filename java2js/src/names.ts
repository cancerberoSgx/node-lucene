
import { Type, Modifier } from 'javap';
import { Scope } from 'ts-simple-ast';


// classes names transformations

/**
 * org.apache.lucene.store.RAMDirectory => org/apache/lucene/store/RAMDirectory/ts (depends on config)
 */
export function getSourceFileName(name: string): string {
  return name
}

/**
 * org.apache.lucene.store.RAMDirectory => RAMDirectory (depends on config)
 */
export function getClassName(name: string): string {
  return name
}

/**
 * converts given type name to TS project name suitable to be printed
 * java.lang.String => string
 * foo.bar.Class2 => Class2 (depends on config)
 * 
 * TODO: java.util.Date => Date ? - node-java supports that?
 */
export function getType(type: string | Type): string {
  return typeof type === 'string' ? type : (type.name || type.text)
}

/**
 * get TS Scope from Java Modifier[]
 */
export function getScope(modifiers: Modifier[]): Scope {
  return (Object.keys(Scope).find(m => modifiers.includes(m as Modifier)) || Scope.Public) as Scope
}
