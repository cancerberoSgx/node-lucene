import java.lang.reflect.*;
import java.io.*;
import java.net.*;
import java.util.*;
import com.google.gson.*;


// TODO: better test typeparameters
// TODO: inner classes
// TODO: annotations ? 
public class JavapJsonOutput {



  // Utilities to be able to add .jars dyamically to classpath
  static void addFile(String s) throws IOException {
    addURL(new File(s).toURI().toURL());
  }

  private static final Class<?>[] parameters = new Class[] { URL.class };

  static void addURL(URL u) throws IOException {
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

  // Utility for obtain methods/fields descriptors (useful for node-jz)
  static String getDescriptorForClass(final Class c)
  {
      if(c.isPrimitive())
      {
          if(c==byte.class)
              return "B";
          if(c==char.class)
              return "C";
          if(c==double.class)
              return "D";
          if(c==float.class)
              return "F";
          if(c==int.class)
              return "I";
          if(c==long.class)
              return "J";
          if(c==short.class)
              return "S";
          if(c==boolean.class)
              return "Z";
          if(c==void.class)
              return "V";
          throw new RuntimeException("Unrecognized primitive "+c);
      }
      if(c.isArray()) return c.getName().replace('.', '/');
      return ('L'+c.getName()+';').replace('.', '/');
  }
  
  static String getFieldDescriptor(Field m)
  {
      String s="(";
      // for(final Class c:(m.getParameterTypes()))
          // s+=getDescriptorForClass(c);
      s+=')';
      return s+getDescriptorForClass(m.getType());
  }

  static String getMethodDescriptor(Method m)
  {
      String s="(";
      for(final Class c:(m.getParameterTypes()))
          s+=getDescriptorForClass(c);
      s+=')';
      return s+getDescriptorForClass(m.getReturnType());
  } static String  getConstructorDescriptor(Constructor m)
  {
      String s="(";
      for(final Class c:(m.getParameterTypes()))
          s+=getDescriptorForClass(c);
      s+=')';
      return s;//+getDescriptorForClass(m.getReturnType());
  }
 



  public List<String> getModifiers(int m) {
    List<String> list = new ArrayList<String>();
    if (Modifier.isPublic(m)) {
      list.add("public");
    }
    if (Modifier.isStatic(m)) {
      list.add("static");
    }
    if (Modifier.isAbstract(m)) {
      list.add("abstract");
    }
    if (Modifier.isFinal(m)) {
      list.add("final");
    }
    if (Modifier.isPrivate(m)) {
      list.add("private");
    }
    if (Modifier.isProtected(m)) {
      list.add("protected");
    }
    // TODO: there are other modifiers but not necesary for my project java2js
    return list;
  }

  public OutSuperClass getSuperClass() {
    Class superclass = this.c.getSuperclass();
    if (superclass == null) {
      return null;
    }
    OutSuperClass s = new OutSuperClass();
    s.name = superclass.getName();
    s.typeParameters = this.getTypeParameters(superclass.getTypeParameters());
    return s;
  }

  public List<OutSuperClass> getInterfaces() {
    List<OutSuperClass> list = new ArrayList<OutSuperClass>();
    Class inter[] = this.c.getInterfaces();
    for (int i = 0; i < inter.length; i++) {
      OutSuperClass interf = new OutSuperClass();
      list.add(interf);
      interf.name = inter[i].getName();
      interf.typeParameters = this.getTypeParameters(inter[i].getTypeParameters());
    }
    return list;
  }

  public List<OutField> getFields() {
    List<OutField> list = new ArrayList<OutField>();
    Field f[] = this.c.getFields();
    for (int i = 0; i < f.length; i++) {
      System.out.println();

      OutField field = new OutField();
      field.descriptor = getFieldDescriptor(f[i]);
      list.add(field);
      field.modifiers = getModifiers(f[i].getModifiers());
      field.type = getType(f[i].getType());
      field.name = f[i].getName();
    }
    return list;
  }

  public List<OutMethod> getConstructors() {
    List<OutMethod> list = new ArrayList<OutMethod>();
    Constructor cs[] = this.c.getDeclaredConstructors();
    for (int i = 0; i < cs.length; i++) {
      // System.out.println(getConstructorDescriptor(cs[i]));
      OutMethod om = new OutMethod();
      om.descriptor = getConstructorDescriptor(cs[i]);
      list.add(om);
      om.modifiers = getModifiers(cs[i].getModifiers());
      om.parameters = getParameters(cs[i].getParameters());
      om.typeParameters = this.getTypeParameters(cs[i].getTypeParameters());
    }
    return list;
  }

  public List<OutParam> getParameters(Parameter[] params) {
    List<OutParam> outParams = new ArrayList<OutParam>();
    for (int k = 0; k < params.length; k++) {
      OutParam op = new OutParam();
      outParams.add(op);
      op.type = getType(params[k].getType());
      op.name = params[k].getName();
      op.modifiers = getModifiers(params[k].getModifiers());
    }
    return outParams;
  }

  public List<OutMethod> getMethods() {
    List<OutMethod> list = new ArrayList<OutMethod>();
    Method m[] = this.c.getDeclaredMethods();

    for (int i = 0; i < m.length; i++) {
      OutMethod om = new OutMethod();
      om.descriptor = getMethodDescriptor(m[i]);
      list.add(om);
      System.out.println(getMethodDescriptor(m[i]));
      om.modifiers = getModifiers(m[i].getModifiers());
      om.type = getType(m[i].getGenericReturnType(), m[i].getReturnType());
      om.name = m[i].getName();
      om.typeParameters = this.getTypeParameters(m[i].getTypeParameters());
      om.parameters = getParameters(m[i].getParameters());
    }
    return list;

  }

  public OutType getType(Type c) {
    return this.getType(c, null);
  }

  public OutType getType(Type c, Class<?> classType) {
    OutType t = new OutType();
    t.name = classType == null ? null : classType.getName();
    t.text = c.getTypeName();
    return t;
  }

  public List<OutTypeParameter> getTypeParameters(TypeVariable[] t) {
    List<OutTypeParameter> list = new ArrayList<OutTypeParameter>();
    for (int i = 0; i < t.length; i++) {
      OutTypeParameter tp = new OutTypeParameter();
      list.add(tp);
      tp.name = t[i].getTypeName();
      Type[] bounds = t[i].getBounds();
      tp.bounds = new ArrayList<OutType>();
      if (bounds.length > 0 && (bounds.length > 1 || bounds[0].getTypeName() != "java.lang.Object")) {
        for (int k = 0; k < bounds.length; k++) {
          tp.bounds.add(this.getType(bounds[k]));
        }
      }
    }
    return list;
  }


  // main API
  Class<?> c;

  public OutClass buildClass(String className) throws Exception {
    OutClass outClass = new OutClass();
    this.c = Class.forName(className);
    outClass.modifiers = getModifiers(this.c.getModifiers());
    outClass.name = className;
    outClass.typeParameters = this.getTypeParameters(this.c.getTypeParameters());
    outClass.isInterface = this.c.isInterface();
    outClass.superClass = getSuperClass();
    outClass.interfaces = getInterfaces();
    outClass.fields = getFields();
    outClass.constructors = getConstructors();
    outClass.methods = getMethods();
    outClass.genericString = this.c.toGenericString();
    return outClass;
  }

  public static List<OutClass> javap(String[] jars, String[] classes) throws Exception {
    for (int i = 0; i < jars.length; i++) {
      String jar = jars[i];
      addFile(jar);
    }
    List<OutClass> outClasses = new ArrayList<OutClass>();
    for (int i = 0; i < classes.length; i++) {
      String className = classes[i];
      OutClass c = new JavapJsonOutput().buildClass(className);
      outClasses.add(c);
    }
    return outClasses;
  }

  public static String javapJson(String[] jars, String[] classes) throws Exception {
    List<OutClass> outClasses = javap(jars, classes);
    Gson gson = new Gson();
    return new Gson().toJson(outClasses);
  }


  // main CLI

  public static void main(String args[]) {
    try {

      if (args.length < 2) {
        System.out.println(
            "Incorrect call you must pass comma separated class names as first argument and optionally pass .jar comma-separated files paths as second argument, Example: \njava -cp java-src JavapJsonOutput java.lang.String,java.util.List libs/foo.jar,libs/bar.jar");
      }
      String[] jars = args.length > 1 ? args[1].split(",") : new String[0];
      String[] classes = args[0].split(",");
      System.out.println(javapJson(jars, classes));
    } catch (Exception e) {
      e.printStackTrace();
      System.exit(1);
    }
  }





  // Types of the generaeted "AST"

  static class BaseNode {
    String name;
    OutType type;
    List<OutTypeParameter> typeParameters;
    List<String> modifiers;
    String descriptor;
  }

  static class OutClass extends BaseNode {
    boolean isInterface;
    List<OutMethod> methods;
    List<OutField> fields;
    List<OutMethod> constructors;
    OutSuperClass superClass;
    List<OutSuperClass> interfaces;
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
  }

  static class OutField extends BaseNode {
  }

  static class OutMethod extends BaseNode {
    List<OutParam> parameters;
  }

  static class OutParam extends BaseNode {
  }
  
}
