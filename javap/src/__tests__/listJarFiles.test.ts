import { getFileNamesFromJar } from '../listJarFiles';

describe('parser', () => {
  it('should accept function predicate', () => {
    const jar1 = 'node_modules/javap-json/dist/javap-json.jar'
    const files = getFileNamesFromJar(jar1, f=>f==='JavapJsonOutput.class')
    expect(files.length).toBe(1)
    expect(files[0]).toBe('JavapJsonOutput.class')
  })
  it('should accept glob pattern', () => {
    const jar1 = 'node_modules/javap-json/dist/javap-json.jar'
    expect(getFileNamesFromJar(jar1, 'Out*.class')).toContain('OutTypeParameter.class')
  })
})