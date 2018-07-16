import java.lang.reflect.*;
// import java.awt.*;
import java.io.*;
import java.net.*;
import java.util.*;
import com.google.gson.*;

// import org.apache.commons.lang3.builder.RecursiveToStringStyle;
// import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
// import org.apache.commons.lang3.builder.ToStringStyle;

public class JavapJsonOutput {

  public static void addFile(String s) throws IOException {
    addURL(new File(s).toURI().toURL());
  }

  private static final Class<?>[] parameters = new Class[] { URL.class };

  public static void addURL(URL u) throws IOException {
    URLClassLoader sysloader = (URLClassLoader) ClassLoader.getSystemClassLoader();
    Class<?> sysclass = URLClassLoader.class;
    try {
      Method method = sysclass.getDeclaredMethod("addURL", parameters);
      method.setAccessible(true);
      method.invoke(sysloader, new Object[] { u });
    } catch (Throwable t) {
      t.printStackTrace();
      throw new IOException("Error, could not add URL to system classloader");
    }
  }

  // public void printStart(String s) {
  // System.out.println("Compiled from " + s);
  // try {
  // Class c = Class.forName(s);
  // int m = c.getModifiers();
  // printModifier(m);
  // System.out.print(" class " + s + " ");
  // } catch (Exception e) {
  // }
  // }

  public List<String> getModifiers(int m) {
    List<String> list = new ArrayList<String>();
    // ArrayList<String> result = {};
    if (Modifier.isPublic(m)) {
      // System.out.print("public ");
      list.add("public");
      // result.
    }
    if (Modifier.isStatic(m)) {
      // System.out.print("static ");
      list.add("static");
    }
    if (Modifier.isAbstract(m)) {
      // System.out.print("abstract ");
      list.add("abstract");
    }
    if (Modifier.isFinal(m)) {
      // System.out.print("final ");
      list.add("final");
    }
    // if(Modifier.isNative(m)){
    // list.add("native");
    // }
    if (Modifier.isPrivate(m)) {
      list.add("private");
    }
    if (Modifier.isProtected(m)) {
      list.add("protected");
    }
    // TODO: there are other modifiers but not necesary for my project java2js
    // return "";
    //// System.out.print("final ");
    return list;
  }

  public OutSuperClass getSuperClass() {
    // try {
    // Class subclass = Class.forName(s);
    Class superclass = this.c.getSuperclass();
    if(superclass==null){
      return null;
    }
    OutSuperClass s = new OutSuperClass();
      s.name = superclass.getName();
      s.typeParameters = this.getTypeParameters(superclass.getTypeParameters());
    // System.out.print("extends " + superclass.getName() + " ");
    // return superclass.getName();
    // } catch (Exception e) {
    // }
    // return "";
    return s;
  }

  public List<OutImplementedInterface> getInterfaces() {
    List<OutImplementedInterface> list = new ArrayList<OutImplementedInterface>();
    // try {
    // Class c = Class.forName(s);
    Class inter[] = this.c.getInterfaces();
    // System.out.print("implements ");
    for (int i = 0; i < inter.length; i++)   {
      OutImplementedInterface interf = new OutImplementedInterface();
      list.add(interf);
      interf.name = inter[i].getName();
      interf.typeParameters = this.getTypeParameters(inter[i].getTypeParameters());
      
      // System.out.print(inter[i].getName());
      // System.out.print(", ");
    }
    // System.out.println(" ");
    // System.out.println(" { ");
    // } catch (Exception e) {
    // }
    return list;
  }

  public List<OutField> getFields() {
    List<OutField> list = new ArrayList<OutField>();
    // try {
    // Class c = Class.forName(s);
    Field f[] = this.c.getFields();
    for (int i = 0; i < f.length; i++) {
      OutField field = new OutField();
      list.add(field);
      // int m = f[i].getModifiers();
      field.modifiers = getModifiers(f[i].getModifiers());
      // System.out.print(" ");
      // Class type = f[i].getType();
      // System.out.print(type.getName());
      field.type = getType(f[i].getType());//.getName();
      field.name = f[i].getName();
      // field.typeParameters = this.getTypeParameters(f[i].getTypeParameters());
      // System.out.println(" " + f[i].getName());
    }
    // } catch (Exception e) {
    // }
    return list;
  }

  public List<OutMethod> getConstructors() {
    // try {
    // Class c = Class.forName(s);
    List<OutMethod> list = new ArrayList<OutMethod>();
    Constructor cs[] = this.c.getDeclaredConstructors();
    for (int i = 0; i < cs.length; i++) {
      OutMethod om = new OutMethod();
      list.add(om);
      om.modifiers = getModifiers(cs[i].getModifiers());
      om.parameters = getParameters(cs[i].getParameters());
      om.typeParameters = this.getTypeParameters(cs[i].getTypeParameters());
    }
    // } catch (Exception e) {
    // }
    return list;
  }

  public List<OutParam> getParameters(Parameter[] params) {
    List<OutParam> outParams = new ArrayList<OutParam>();
    for (int k = 0; k < params.length; k++) {
      OutParam op = new OutParam();
      outParams.add(op);
      op.type = getType(params[k].getType());//.getName();
      op.name = params[k].getName();
      op.modifiers = getModifiers(params[k].getModifiers());

      // System.out.print(type[k].getName() + ",");
    }
    return outParams;
  }

  public List<OutMethod> getMethods() {
    List<OutMethod> list = new ArrayList<OutMethod>();
    // try {
    // Class c = Class.forName(s);
    Method m[] = this.c.getDeclaredMethods();
    for (int i = 0; i < m.length; i++) {
      OutMethod om = new OutMethod();
      list.add(om);
      // int m1 = m[i].getModifiers();
      om.modifiers = getModifiers(m[i].getModifiers());
      om.type = getType(m[i].getReturnType());// m[i].getReturnType().getName();
      om.name = m[i].getName();
      om.typeParameters = this.getTypeParameters(m[i].getTypeParameters());
      // System.out.print(m[i].getReturnType().getName());
      // System.out.print(" " + m[i].getName());
      // System.out.print("(");
      // Class type[] = m[i].getParameterTypes();
      // Parameter[] params = m[i].getParameters();

      om.parameters = getParameters(m[i].getParameters());
      // System.out.print(")");
      // System.out.println(" ");
    }
    // } catch (Exception e) {
    // }
    return list;

  }

  public OutType getType(Class<?> c) {
    OutType t = new OutType();
    t.name = c.getName();
    t.genericString = c.toGenericString();
    t.typeParameters = this.getTypeParameters(c.getTypeParameters());
    return t;
  }
  public List<String> getTypeParameters(TypeVariable[] t) {
    List<String> list = new ArrayList<String>();
    for (int i = 0; i < t.length; i++) {
      // t[i].ty
      list.add(t[i].toString());
    }
    return list;
  }

  Class<?> c;

  public OutClass buildClass(String className) throws Exception {
    OutClass outClass = new OutClass();
    // OutClass c= printStart(className);
    // System.out.println("Compiled from " + className);
    // try {
    this.c = Class.forName(className);
    // int m = this.c.getModifiers();
    // List<String> mods = printModifier(m);
    outClass.modifiers = getModifiers(this.c.getModifiers());
    outClass.name = className;
    outClass.typeParameters = this.getTypeParameters(this.c.getTypeParameters());
    // System.out.print(" class " + className + " ");
    outClass.isInterface = this.c.isInterface();
    outClass.superClass = getSuperClass();
    outClass.interfaces = getInterfaces();
    outClass.fields = getFields();
    outClass.constructors = getConstructors();
    outClass.methods = getMethods();
    outClass.genericString = this.c.toGenericString();
    // this.c.doc
    // System.out.print("} ");
    // } catch (Exception e) {
    // }
    return outClass;
  }

  public static void main(String s[]) {
    try {

      if (s.length < 2) {
        System.out.println(
            "Incorrect call you must pass comma separated class names as first argument and optionally pass .jar comma-separated files paths as second argument, Example: \njava -cp java-src JavapJsonOutput java.lang.String,java.util.List libs/foo.jar,libs/bar.jar");
      }
      if (s.length > 1) {
        String[] jars = s[1].split(",");
        for (int i = 0; i < jars.length; i++) {
          String jar = jars[i];
          addFile(jar);
        }
      }
      List<OutClass> outClasses = new ArrayList<OutClass>();
      String[] classes = s[0].split(",");
      for (int i = 0; i < classes.length; i++) {
        String className = classes[i];
        OutClass c = new JavapJsonOutput().buildClass(className);
        outClasses.add(c);
      }

      Gson gson = new Gson();
      System.out.println(gson.toJson(outClasses));
    } catch (Exception e) {
      e.printStackTrace();
      System.exit(1);
      // } catch (ClassNotFoundException e) {
      // e.printStackTrace();
    }
  }

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
    List<String> typeParameters;
    String genericString;
  }

  static class OutImplementedInterface extends BaseNode {
    List<String> typeParameters;

  } 
  static class OutType {
    String name;
    List<String> typeParameters;
    String genericString;

  }
  static class OutSuperClass extends BaseNode {

    List<String> typeParameters;
  }
  
  static class OutField extends BaseNode {
    List<String> modifiers;
  }

  static class OutMethod extends BaseNode {
    List<String> modifiers;
    List<OutParam> parameters;
    List<String> typeParameters;
  }

  static class OutParam extends BaseNode {
    List<String> modifiers;
  }

  // static class MyBuilder extends ReflectionToStringBuilder {
  // // public <T> MyBuilder(
  // // final T object, final ToStringStyle style, final StringBuffer buffer,
  // // final Class<? super T> reflectUpToClass, final boolean outputTransients,
  // final boolean outputSt atics,
  // // final boolean excludeNullValues) {
  // // super(object, style, buffer, reflectUpToClass, outputTransients,
  // outputStatics, excludeNullValues);
  // // }

  // public MyBuilder(final Object object) {
  // super(object);
  // }

  // // @Override
  // public String toString2(Class<?> clazz, final ToStringStyle style) {

  // //this.style = style;

  // // this.setStyle(style);
  // // this.setObject(clazz)
  // // if (this.getObject() == null) {
  // // return this.getStyle().getNullText();
  // // }
  // // Class<?> clazz = this.getObject();//this.getObject().getClass();
  // this.appendFieldsIn(clazz);
  // while (clazz.getSuperclass() != null && clazz != this.getUpToClass()) {
  // clazz = clazz.getSuperclass();
  // this.appendFieldsIn(clazz);
  // }

  // // Method superSuperToString = LinkedList.class.getMethod("toString");
  // // return ((String) superSuperToString.invoke(this));
  // // ReflectionToStringBuilder
  // // ToStringBuilder.
  // return super.toString()+"seba";

  // }
  // }

}
// Class c = Class.forName(className);
// System.out.println("\nJSON_STYLE .....");
// System.out.println(new MyBuilder(c).toString2(c, ToStringStyle.JSON_STYLE));
// System.out.println("\nRecursiveToStringStyle .....");
// System.out.println(MyBuilder.toString2(c, new RecursiveToStringStyle() ));
// Gson gson = new Gson();
// Class c = Class.forName("java.util.List");
// System.out.println(gson.toJson(c));