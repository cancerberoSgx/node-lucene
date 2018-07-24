// generate ts interfaces from java ast
import { JavaAst, ClassDeclaration, Method, Param, Field, TypeParameter as JavaTypeParameter, Type, Modifier, javap } from 'javap'
import { InterfaceDeclarationStructure, ConstructSignatureDeclarationStructure, ParameterDeclarationStructure, PropertyDeclarationStructure, TypeParameterDeclarationStructure, MethodSignatureStructure, SourceFileStructure, Scope } from 'ts-simple-ast'
import { Transformer, TransformerOptions, TransformerResult } from '../types';

/**
 * this first try will generate a single big file with all interfaces inside replacing foo.bar.Class with fooBarClass names
 */
export class TransformerImpl implements Transformer {

  transform(options: TransformerOptions): TransformerResult {
    const ast = this.resolveAst(options)
    return {
      files: this.buildSourceFiles(ast).map(sourceFile => ({ fileName: 'all.ts', sourceFile }))
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

  protected buildSourceFiles(ast: JavaAst): SourceFileStructure[] {
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
      extends: (node.superClass ? [this.getClassName(node.name)] : []).concat(node.interfaces.map(c => this.getClassName(c.name))),
      constructSignatures: node.constructors.map(this.buildConstructor.bind(this)),
      properties: node.fields.map(this.buildProperty.bind(this)),
      methods: node.methods.map(this.buildMethod.bind(this))
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

  protected buildProperty(field: Field): PropertyDeclarationStructure {
    return {
      name: field.name,
      scope: this.getScope(field.modifiers),
      isAbstract: field.modifiers.includes('abstract'),
      type: this.getType(field.type)
    }
  }


  /**
   * org.apache.lucene.store.RAMDirectory => org/apache/lucene/store/RAMDirectory/ts (depends on config)
   */
  protected getSourceFileName(name: string): string {
    return name
  }

  /**
   * org.apache.lucene.store.RAMDirectory => RAMDirectory (depends on config)
   */
  protected getClassName(name: string): string {
    return name
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
    return this.typeMap[asString] || asString
  }

  protected typeMap: { [key: string]: string } = {
    'java.lang.String': 'string'
  }
  /**
   * get TS Scope from Java Modifier[]
   */
  protected getScope(modifiers: Modifier[]): Scope {
    return (Object.keys(Scope).find(m => modifiers.includes(m as Modifier)) || Scope.Public) as Scope
  }

}
