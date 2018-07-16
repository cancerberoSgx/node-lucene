import { exec } from 'shelljs';
import { ok } from 'assert';
import minimatch from 'minimatch'

/**calls jar tf a.jar parse output and returns all .class files found optionally filtering result with given pattern */
export function getFileNamesFromJar(jarPath: string, pattern?: string) {
  const p = exec(`jar ft ${jarPath}`)
  ok(p.code === 0)
  const lines = p.stdout.split('\n')
  return pattern ? lines.filter(f => minimatch(f, pattern)) : lines
}
