// these are kind of experiments to dynamically compile, parse and execute java code as strings and see how mch we can manipulate and extends node-java capabilities - for example, can we programmatically override an existing java method from JavaScript ? 

import { join } from 'path';
import { writeFileSync } from 'fs';
import { exec, ExecOutputReturnValue, tempdir, mkdir, cd, pwd } from 'shelljs';

export interface CompileCodeResult extends ExecOutputReturnValue {
  files: string[]
}

export interface CompileCodeOptions {
  /** paths or globs to `.jar` files or to folders with `.class` files to add to classPath. In the command line must be comma-separated if more than one. */
  classPath?: string[]
  /** code without the package declaration */
  code: string
  /** package declaration, by default will be "foo.bar" */
  packageName?: string
  className: string
}

export function compileCode(options: CompileCodeOptions): CompileCodeResult {
  const baseFolder = join(tempdir(), '_java_compileCode_' + Date.now())
  options.packageName = options.packageName || 'foo.bar'
  const code = `package ${options.packageName};\n${options.code}`
  const targetFolder = join.apply(null, options.packageName.split('.'))
  const folder = join(baseFolder, targetFolder)
  mkdir('-p', folder)
  const fileName = `${options.className}.java`
  const file = join(folder, fileName)
  const relativeFile = join(targetFolder, fileName)
  // console.log('writeFileSync', file)
  writeFileSync(file, code)
  const cwd = pwd()
  cd(baseFolder)
  const p = exec('javac ' + relativeFile)
  cd(cwd)
  return { files: [file], ...p }
}

// export interface ExecCodeOptions extends JavaOptions {
//   // files?: File[]
//   inputCode?: string
//   execFn: () => void
// }

// // given java string it will write it down to fs, compile it and execute javap()
// export function execCode(options: JavaOptions) {
// }
