import { javap } from '../javap';

describe('example readmes', () => {

  it('readme example 1 should work', () => {
    // will get the AST of java.util.List interface and print all its method return types: 
    const config = { classes: ['java.util.List'] }
    const ast = javap(config)
    const listClass = ast.find(c => c.name === 'java.util.List')
    // console.log(`Methods : ${listClass.methods.map(m => m.name).join(', ')}`)
    expect(listClass.methods.map(m => m.name)).toContain('replaceAll')
  })

  it('readme example 2 should work', () => {
    // this time we will get the descriptor of method org.apache.lucene.store.RAMDirectory.fileNameExists
    // we will need to provide the library's .jar file:
    const config = {
      classPath: ['../node-lucene/lucene-lib/lucene-core-7.4.0.jar'],
      classes: ['org.apache.lucene.store.RAMDirectory']
    }
    const ast = javap(config)
    const RAMDirectory = ast.find(c => c.name == 'org.apache.lucene.store.RAMDirectory')
    const fileNameExists = RAMDirectory.methods.find(m => m.name == 'fileNameExists')
    expect(fileNameExists.descriptor).toBe('(Ljava/lang/String;)Z')
    // console.log(`org.apache.lucene.store.RAMDirectory.fileNameExists method descriptor is ${fileNameExists.descriptor}`)
  })


})