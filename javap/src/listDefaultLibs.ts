import { ok } from 'assert'
import { exec, config } from 'shelljs'

config.silent = true

/** 
 * executes `java -verbose:class`, parse output line by line to extract the .jar from each and list them. Lines have the format `[Loaded java.util.concurrent.ConcurrentHashMap$ForwardingNode from /usr/lib/jvm/java-8-jdk/jre/lib/rt.jar]`
 * 
 * IMPORTANT: this was tested only in java version "1.8.0_172" (oracle java) - linux - Should only used mainly for testing purposes to locate rt.jar and the lib folder. 
 */
export function listDefaultLibs(): string[] {

  // config.silent = false
  const p = exec(`java -verbose:class -version`)
  ok(p.code === 0)
  const lines = p.stdout.split('\n')
  const jars: string[] = []
  // debugger
  lines.forEach(line => {
    const result = /from (.+\.jar)\]$/.exec(line);
    // debugger
    if (result && result.length > 1 && !jars.includes(result[1])) {
      jars.push(result[1])
    }
  })
  return jars
}


