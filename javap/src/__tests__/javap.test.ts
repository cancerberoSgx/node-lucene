import { javap } from '../javap';
import { JavaAst } from '../types';

describe('javap', () => {
  it('should work passing no jars and core classes', () => {
    const ast: JavaAst = javap({ classes: ['java.util.List'], jars: [] })
    expect(ast.find(c => c.name === 'java.util.List')!.interfaces[0].name).toBe('java.util.Collection')
    expect(ast.find(c => c.name === 'java.util.List')!.methods.
      find(m => m.descriptor === '(ILjava/lang/Object;)Ljava/lang/Object;')!.type.name).toBe("java.lang.Object")
  })

  it('should work passing several jars and classes', () => {
    const config = {
      jars: ['../node-lucene/lucene-lib/lucene-core-7.4.0.jar'],
      classes: ['org.apache.lucene.store.RAMDirectory']
    }
    const ast = javap(config)
    const RAMDirectory = ast.find(c => c.name == 'org.apache.lucene.store.RAMDirectory')
    const fileNameExists = RAMDirectory!.methods.find(m => m.name == 'fileNameExists')
    expect(fileNameExists!.type.name).toBe('boolean')
  })

  it('should work passing several jars and classes', () => {
    const config = {
      jars: ['../node-lucene/lucene-lib/lucene-core-7.4.0.jar'],
      classes: ['org.apache.lucene.store.RAMDirectory']
    }
    const ast = javap(config)
    const RAMDirectory = ast.find(c => c.name == 'org.apache.lucene.store.RAMDirectory')
    const fileNameExists = RAMDirectory!.methods.find(m => m.name == 'fileNameExists')
    expect(fileNameExists!.type.name).toBe('boolean')
  })
})

