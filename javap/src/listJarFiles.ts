import { ok } from 'assert';
import minimatch from 'minimatch';
import { exec, config } from 'shelljs';

config.silent = true

/** 
 * calls jar tf a.jar parse output and returns all .class files found optionally filtering result 
 * with given pattern 
 */
export function getFileNamesFromJar(jarPath: string, pattern?: string | ((f: string) => boolean)): string[] {
  const p = exec(`jar ft ${jarPath}`)
  ok(p.code === 0)
  const lines = p.stdout.split('\n')
  const predicate = typeof pattern === 'string' ? (f: string) => minimatch(f, pattern) : pattern
  return predicate ? lines.filter(predicate) : lines
}

export function getAllClassNamesFromJar(jarPath: string): string[] {
  return getFileNamesFromJar(jarPath, '**/*.class').map(f => f.replace(/\//gmi, '.').replace(/\.class$/gim, ''))
}