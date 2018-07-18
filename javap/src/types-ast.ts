//TODO: we could autogenerate this file using this technology parsing from javap-json.jar

export type Modifier = ('public' | 'protected' | 'private' | 'package' | 'static' | 'final')
export type JavaAst = ClassDeclaration[] 
export interface Method extends BaseNode {
  parameters: Param[]
}
export interface Field extends BaseNode {
}
export interface Param extends BaseNode {
}
export interface SuperClass extends BaseNode {
}
export interface ClassDeclaration extends BaseNode {
  superClass: SuperClass[]
  interfaces: SuperClass[]
  constructors: Method[]
  fields: Field[]
  methods: Method[]
  isInterface: boolean
  genericString: string
}
export interface BaseNode {
  parameters: Param[]
  modifiers: Modifier[]
  descriptor: string
  name: string
  type: Type
}
export interface TypeParameter {
  bounds: Type[]
  name: string
}
export interface Type extends BaseNode {
  text: string
}

/*


// Types of the generaeted "AST"

class BaseNode {
  String name;
  OutType type;
  List<OutTypeParameter> typeParameters;
  List<String> modifiers;
  String descriptor;
}

class OutClass extends BaseNode {
  boolean isInterface;
  List<OutMethod> methods;
  List<OutField> fields;
  List<OutMethod> constructors;
  OutSuperClass superClass;
  List<OutSuperClass> interfaces;
  String genericString;
}

class OutType {
  String name;
  String text;
}

class OutTypeParameter {
  List<OutType> bounds;
  String name;
}

class OutSuperClass extends BaseNode {
}

class OutField extends BaseNode {
}

class OutMethod extends BaseNode {
  List<OutParam> parameters;
}

class OutParam extends BaseNode {
}


*/
