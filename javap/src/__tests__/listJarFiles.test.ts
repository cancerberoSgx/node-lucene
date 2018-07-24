import { getFileNamesFromJar, getAllClassNamesFromJar } from '../listJarFiles';

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
    // const jar1 = '/home/sg/programs/graalvm-1.0.0-rc1/jre/lib/rt.jar'
    const all = getAllClassNamesFromJar(jar1)
    expect(all).toContain('com.google.gson.Gson')
    // console.log(all);

    // expect(getFileNamesFromJar(jar1, 'Out*.class')).toContain('OutTypeParameter.class')
  })

})