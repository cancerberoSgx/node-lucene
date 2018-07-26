import { getFileNamesFromJar, getAllClassNamesFromJar } from '../listJarFiles';
import { listDefaultLibs } from '../listDefaultLibs';
// import { rtJar } from './testUtils';
// import { rtJar, rtResourcesJar } from './testUtils';

describe('parser', () => {
  const jar1 = 'node_modules/javap-json/dist/javap-json.jar'

  it('should accept function predicate', () => {
    const files = getFileNamesFromJar(jar1, f => f === 'JavapJsonOutput.class')
    expect(files.length).toBe(1)
    expect(files[0]).toBe('JavapJsonOutput.class')
  })

  it('should accept glob pattern', () => {
    expect(getFileNamesFromJar(jar1, 'Out*.class')).toContain('OutTypeParameter.class')
  })

  it('should list all classes in jar', () => {
    const all = getAllClassNamesFromJar(jar1)
    expect(all).toContain('com.google.gson.Gson')
    expect(all).not.toContain('com.google.gson.Gson$3')
  })

  it('should listDefaultLibs', () => {
    const jars = listDefaultLibs()
    expect(jars.length).not.toBe(0)
    expect(jars[0]).toContain('rt.jar')
  })

})