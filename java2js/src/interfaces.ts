// generate ts interfaces from java ast
import { JavaAst, ClassDeclaration, Method, Param, Field, TypeParameter as JavaTypeParameter } from 'javap'
import { InterfaceDeclarationStructure, ConstructSignatureDeclarationStructure, ParameterDeclarationStructure, PropertyDeclarationStructure, TypeParameter, TypeParameterDeclarationStructure, MethodSignatureStructure, SourceFileStructure } from 'ts-simple-ast'
import { getScope, getType, getClassName } from './names';

export function buildSourceFile(ast: JavaAst): SourceFileStructure {
  return {
    imports: [],
    exports: [],
    classes: [],
    interfaces: ast.map(buildInterface)
  }
}

function buildInterface(c: ClassDeclaration): InterfaceDeclarationStructure {
  return {
    typeParameters: c.typeParameters.map(buildTypeParameter),
    name: getClassName(c.name),
    extends: (c.superClass ? [getClassName(c.name)] : []).concat(c.interfaces.map(c => getClassName(c.name))),
    constructSignatures: c.constructors.map(buildConstructor),
    properties: c.fields.map(buildProperty),
    methods: c.methods.map(buildMethod)
  }
}

function buildMethod(m: Method): MethodSignatureStructure {
  return {
    name: getClassName(m.name),
    docs: [m.descriptor],
    parameters: m.parameters.map(buildParameter),
    returnType: getType(m.type),
    typeParameters: m.typeParameters.map(buildTypeParameter),
    // scope: getScope(c.modifiers)
  }
}

function buildConstructor(c: Method): ConstructSignatureDeclarationStructure {
  return {
    docs: [c.descriptor],
    parameters: c.parameters.map(buildParameter),
    // scope: getScope(field.modifiers),
  }
}

function buildTypeParameter(p: JavaTypeParameter): TypeParameterDeclarationStructure {
  return p
}

function buildParameter(p: Param): ParameterDeclarationStructure {
  return {
    name: p.name,
    type: getType(p.type)
  }
}

function buildProperty(field: Field): PropertyDeclarationStructure {
  return {
    name: field.name,
    scope: getScope(field.modifiers),
    isAbstract: field.modifiers.includes('abstract'),
    type: getType(field.type)
  }
}