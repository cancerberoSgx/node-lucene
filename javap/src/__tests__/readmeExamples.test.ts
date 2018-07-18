import { javap } from '../javap';

describe('example readmes', () => {

it('readme example 1 should work', () => {
// will get the AST of java.util.List interface and print all its method return types: 
const config = { classes: ['java.util.List'] }
const ast = javap(config)
const listClass = ast.find(c => c.name === 'java.util.List')
console.log(`Methods : ${listClass.methods.map(m => m.name).join(', ')}`)
})

it('readme example 2 should work', () => {
// this time we will get the descriptor of method org.apache.lucene.store.RAMDirectory.fileNameExists
// we will need to provide the library's .jar file:
const config = {
  jars: ['../node-lucene/lucene-lib/lucene-core-7.4.0.jar'],
  classes: ['org.apache.lucene.store.RAMDirectory']
}
const ast = javap(config)
const RAMDirectory = ast.find(c => c.name == 'org.apache.lucene.store.RAMDirectory')
const fileNameExists = RAMDirectory.methods.find(m => m.name == 'fileNameExists')
console.log(`org.apache.lucene.store.RAMDirectory.fileNameExists method descriptor is ${fileNameExists.descriptor}`)
})


})