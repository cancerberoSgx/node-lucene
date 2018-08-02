// generate ts interfaces from java ast
import { JavaAst, ClassDeclaration, Method, Param, Field, TypeParameter as JavaTypeParameter, Type, Modifier, javap } from 'javap'
import Project, { InterfaceDeclarationStructure, ConstructSignatureDeclarationStructure, ParameterDeclarationStructure, PropertyDeclarationStructure, TypeParameterDeclarationStructure, MethodSignatureStructure, SourceFileStructure, Scope, SourceFile } from 'ts-simple-ast'
import { Transformer, TransformerOptions, TransformerResult, File } from '../types'
import { fromNow } from 'hrtime-now'

/**
 * this first try will generate a single big file with all interfaces and classes found - 
 * all as TypeScript interfaces inside replacing foo.bar.Class with fooBarClass names. 
 * 
 * Implemented with ts-simple-ast.
 */
export class TransformerImpl implements Transformer {

  transform(options: TransformerOptions): TransformerResult {
    const ast = this.resolveAst(options)
    const fileStructures = this.buildSourceFileStructures(ast)
    return {
      files: fileStructures.map(sourceFileStructure =>
        new FileImpl('all.ts', sourceFileStructure)),
      ast
    }
  }

  protected resolveAst(options: TransformerOptions): JavaAst {
    if (options.ast) {
      return options.ast
    }
    else if (options.javapOptions) {
      return javap(options.javapOptions)
    }
    else {
      throw new Error('Invalid call: Must pass ast or javapOptions property')
    }
  }

  protected buildSourceFileStructures(ast: JavaAst): SourceFileStructure[] {
    return [{
      imports: [],
      exports: [],
      classes: [],
      interfaces: ast.map(this.buildInterface.bind(this))
    }]
  }

  protected buildInterface(node: ClassDeclaration): InterfaceDeclarationStructure {
    return {
      typeParameters: node.typeParameters.map(this.buildTypeParameter.bind(this)),
      name: this.getClassName(node.name),
      extends: (node.superClass ? [this.getClassName(node.name)] : [])
        .concat(node.interfaces.map(c => this.getClassName(c.name))).filter(name => name !== node.name),
      constructSignatures: node.constructors.map(this.buildConstructor.bind(this)),
      properties: node.fields.map(this.buildProperty.bind(this)),
      methods: node.methods.map(this.buildMethod.bind(this))
    }
  }

  protected buildProperty(field: Field): PropertyDeclarationStructure {
    return {
      name: field.name,
      scope: this.getScope(field.modifiers),
      isAbstract: field.modifiers.includes('abstract'),
      type: this.getType(field.type)
    }
  }

  protected buildMethod(m: Method): MethodSignatureStructure {
    return {
      name: this.getClassName(m.name),
      docs: [m.descriptor],
      parameters: m.parameters.map(this.buildParameter.bind(this)),
      returnType: this.getType(m.type),
      typeParameters: m.typeParameters.map(this.buildTypeParameter.bind(this)),
      // scope: getScope(c.modifiers)
    }
  }

  protected buildConstructor(c: Method): ConstructSignatureDeclarationStructure {
    return {
      docs: [c.descriptor],
      parameters: c.parameters.map(this.buildParameter.bind(this)),
      // scope: getScope(field.modifiers),
    }
  }

  protected buildTypeParameter(p: JavaTypeParameter): TypeParameterDeclarationStructure {
    return p
  }

  protected buildParameter(p: Param): ParameterDeclarationStructure {
    return {
      name: p.name,
      type: this.getType(p.type)
    }
  }

  /**
   * TODO
   * 
   * Given java class name return the name of the file in which it should be generated. example: org.apache.lucene.store.RAMDirectory => org/apache/lucene/store/RAMDirectory.ts (depends on config)
   */
  protected getSourceFileName(name: string): string {
    return name
  }

  /**
   * Dependencing on the output format configuration it returns the final class name for given java class name. For example, could be:
   * 
   *  * org.apache.lucene.store.RAMDirectory => org_apache_lucene_store_RAMDirectory 
   *  * org.apache.lucene.store.RAMDirectory => RAMDirectory 
   */
  protected getClassName(name: string): string {
    return name.replace(/\./gmi, '_')
  }

  /**
   * converts given type name to TS project name suitable to be printed
   * java.lang.String => string
   * foo.bar.Class2 => Class2 (depends on config)
   * 
   * TODO: java.util.Date => Date ? - node-java supports that?
   */
  protected getType(type: string | Type): string {
    const asString = typeof type === 'string' ? type : (type.name || type.text)
    return this.typeMap[asString] || 'any /*' + asString + '*/'
  }

  protected typeMap: { [key: string]: string } = {
    'java.lang.String': 'string',
    'int': 'number',
    'double': 'number',
    'float': 'number',
    'long': 'number'
  }

  /**
   * get TS Scope from Java Modifier[]
   */
  protected getScope(modifiers: Modifier[]): Scope {
    return (Object.keys(Scope).find(m => modifiers.includes(m as Modifier)) || Scope.Public) as Scope
  }

}

/**
 * @internal
 */
export class FileImpl implements File {
  private project: Project | undefined = undefined
  private sourceFile: SourceFile | undefined = undefined
  private content: string | undefined = undefined
  constructor(public fileName: string, public sourceFileStructure: SourceFileStructure) {
  }
  getContent(): string {
    if (!this.content) {
      this.project = new Project({ useVirtualFileSystem: true })
      this.sourceFile = this.project.createSourceFile(this.fileName, '')
      this.sourceFileStructure.interfaces!.forEach((node, index) =>
        fromNow(() =>
          // this.sourceFile!.addInterface(node)
          this.sourceFile!.insertInterface(index, node)
          , time => console.log(node.name, index, time))
      );
      console.log('All Nodes inserted in SourceFile');

      fromNow(() => this.sourceFile!.fill(this.sourceFileStructure), t => console.log('Source File fill() took ' + t))

      this.content = fromNow(() => this.sourceFile!.getText(), t => console.log('Source File getText() took ' + t))
    }
    return this.content
  }
}
// class TransformerResultImpl implements TransformerResult {
//   constructor(public files: FileImpl[]) {
//   }
// }