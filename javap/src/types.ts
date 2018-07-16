
export interface Config {
  /** paths or globs to jars */ 
  classPath?: string[]
  classes?: string[]
  /** generate all classes of given ClassPath */
  allClasses?: boolean
  /** callback called with resulting ast when finish */
  fn?: (ast: JavaAst) => void
  /** if true wi take javap output for stdin */
  stdin?: boolean
  /** write ast json to file. If not provided will print json to stdout */
  output?: string
}



export type JavaAst = { [className: string]: ClassDeclaration } // TODO
export interface Member {
  name: string
  typeParameters?: string,
  scope: Scope
  type: string
  modifiers: string
}
export interface Method extends Member {
  
}

export interface Field extends Member {

}
// export type FieldSignature = any//TODO
export type Scope = string//'public' | 'protected' | 'private' | 'package'

export interface ClassDeclaration extends Member {
  name: string
  type: 'class'|'interface',
  extends: string[]
  implements: string[]
  constructors: Method[]
  fields: Field[]
  methods: Method[]
} // TODO




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

  static class OutImplementedInterface extends BaseNode {
    List<OutTypeParameter> typeParameters;
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
