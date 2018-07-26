const shell = require('shelljs')
shell.config.silent = true
describe('cli', () => {

  it('should build', () => {
    let p = shell.exec('npm run build')
    expect(p.code).toBe(0)
  })

  it('should work passing no jasts for standard classes', () => {
    p = shell.exec(`node bin/javap-json.js --classes java.lang.Object`)
    expect(p.code).toBe(0)
    let ast = JSON.parse(p.stdout)
    const Object = ast.find(c => c.name === 'java.lang.Object')
    const equals = Object.methods.find(m => m.name === 'equals')
    expect(equals.descriptor === '(Ljava/lang/Object;)Z')
  })

  it('should work passing a jar and two classes', () => {
    p = shell.exec(`node bin/javap-json.js --classes com.google.gson.Gson,JavapJsonOutput --jars java-lib/gson-2.8.5.jar,dist/javap-json.jar`)
    expect(p.code).toBe(0)
    let ast = JSON.parse(p.stdout)

    const toJson = ast.find(c => c.name === 'com.google.gson.Gson').methods.find(m => m.name === 'toJson' && m.descriptor === '(Ljava/lang/Object;Ljava/lang/reflect/Type;Lcom/google/gson/stream/JsonWriter;)V')
    const getParameters = ast.find(c => c.name === 'JavapJsonOutput').methods.find(m => m.name === 'getParameters')
    expect(toJson.parameters[1].type.text).toBe('java.lang.reflect.Type');
    expect(getParameters.parameters[0].type.text).toBe('java.lang.reflect.Parameter[]');
    expect(getParameters.type.text).toContain('java.util.List<')
  })
})