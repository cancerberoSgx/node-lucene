
export interface Config {
  /** paths or globs to jars */
  jars?: string[]
  classes?: string[]
  // /** generate all classes of given ClassPath */
  // allClasses?: boolean
  /** callback called with resulting ast when finish */
  fn?: (ast: JavaAst) => void
  // /** if true wi take javap output for stdin */
  // stdin?: boolean
  /** write ast json to file. If not provided will print json to stdout */
  output?: string
}




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

java ast from javap-json: 

  static class BaseNode {
    String name;
    OutType type;
  }

  static class OutClass extends BaseNode {
    boolean isInterface;
    List<OutMethod> methods;
    List<OutField> fields;
    List<OutMethod> constructors;
    OutSuperClass superClass;
    List<OutImplementedInterface> interfaces;
    List<String> modifiers;
    List<OutTypeParameter> typeParameters;
    String genericString;
  }


  static class OutType {
    String name;
    String text;
  }

  static class OutTypeParameter {
    List<OutType> bounds;
    String name;
  }

  static class OutSuperClass extends BaseNode {
    List<OutTypeParameter> typeParameters;
  }

  static class OutField extends BaseNode {
    List<String> modifiers;
  }

  static class OutMethod extends BaseNode {
    List<String> modifiers;
    List<OutParam> parameters;
    List<OutTypeParameter> typeParameters;
  }

  static class OutParam extends BaseNode {
    List<String> modifiers;
  }

*/
