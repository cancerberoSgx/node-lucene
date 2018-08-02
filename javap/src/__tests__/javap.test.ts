import { ok } from 'assert';
import { exec } from 'shelljs';
import { javap } from '../javap';
import { JavaAst } from '../types';
import { javapJsonJar, rtJar } from './testUtils';
import { dirname } from 'path';

describe('javap', () => {
  it('should work passing no classPath and core classes', () => {
    const ast: JavaAst = javap({ classes: ['java.util.List'], classPath: [] })
    expect(ast.find(c => c.name === 'java.util.List')!.interfaces[0].name).toBe('java.util.Collection')
    expect(ast.find(c => c.name === 'java.util.List')!.methods.
      find(m => m.descriptor === '(ILjava/lang/Object;)Ljava/lang/Object;')!.type.name).toBe("java.lang.Object")
  })

  it('should work passing several classPath and classes', () => {
    const config = {
      classPath: ['../node-lucene/lucene-lib/lucene-core-7.4.0.jar'], //TODO: use a local .jar 
      classes: ['org.apache.lucene.store.RAMDirectory']
    }
    const ast = javap(config)
    const RAMDirectory = ast.find(c => c.name == 'org.apache.lucene.store.RAMDirectory')
    const fileNameExists = RAMDirectory!.methods.find(m => m.name == 'fileNameExists')
    expect(fileNameExists!.type.name).toBe('boolean')
  })

  it('should generate for all classes in given classPath if no --classes given', () => {
    const config = {
      classPath: [javapJsonJar]
    }
    const ast = javap(config)
    expect(ast.find(c => c.name === 'com.google.gson.Gson').name).toBe('com.google.gson.Gson')
    expect(ast.filter(c => c.name === 'com.google.gson.Gson$1').length).toBe(0) // no Foo$1 classes because those are repeated - identical to the ones without the $1
    expect(ast.length).toBeGreaterThan(100)
  })

  it('should let me filter class by name using glob-like pattern and by modifiers classes and members', () => {
    let ast = javap({ classPath: [javapJsonJar] })
    expect(ast.find(c => !c.name.startsWith('com.google.gson.'))).toBeDefined()
    ast = javap({
      classPath: [javapJsonJar],
      classesFilterByName: 'com.google.gson.*'
    })
    const size = ast.length
    expect(ast.find(c => !c.name.startsWith('com.google.gson.'))).not.toBeDefined()
    ast = javap({
      classPath: [javapJsonJar],
      classesFilterByName: 'com.google.gson.*',
      classFilter: c => c.modifiers.includes('public')
    })
    expect(ast.length).toBeLessThan(size)
    let memberSize = 0
    ast.forEach(c => memberSize += (c.methods.length + c.fields.length))
    ast = javap({
      classPath: [javapJsonJar],
      classesFilterByName: 'com.google.gson.*',
      classFilter: c => c.modifiers.includes('public'),
      memberFilter: node => node.modifiers.includes('public')
    })
    let memberSize2 = 0
    ast.forEach(c => memberSize2 += (c.methods.length + c.fields.length))
    expect(memberSize).toBeGreaterThan(memberSize2)
  })

  it('should generate for all classes in rt.jar (standard lang and util classes)', () => {
    const config = {
      classPath: [rtJar],
      classesFilterByName: 'java.*' // heads up - I'm filtering here if not I'm getting a resource missing error probably I need to include another .jar but not important right now
    }
    const ast = javap(config)
    const classes = ['java.lang.String', 'java.util.HashMap', 'java.lang.reflect.Method']
    classes.forEach(className => expect(ast.find(c => c.name === className)).toBeTruthy())
  })

  it('should be able to give --classPath folder', () => {
    const folder = `src/__tests__/assets/javaproject1`
    const p = exec(`javac ${folder}/package1/*.java`)
    ok(p.code === 0)
    const ast = javap({
      classPath: [folder],
      classes: ['package1.Class1', 'package1.Interface1']
    })
    expect(ast.length).toBe(2)
    expect(ast.find(n => n.name === 'package1.Class1').superClass.name).toBe('java.lang.Object')
  })

})


