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
      System.out.print("public ");
      list.add("public");
      // result.
    }
    if (Modifier.isStatic(m)) {
      System.out.print("static ");
      list.add("static");
    }
    if (Modifier.isAbstract(m)) {
      System.out.print("abstract ");
      list.add("abstract");
    }
    if (Modifier.isFinal(m)) {
      System.out.print("final ");
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
    // System.out.print("final ");
    return list;
  }

  public String getSuperClass(String s) {
    try {
      // Class subclass = Class.forName(s);
      Class superclass = this.c.getSuperclass();
      System.out.print("extends " + superclass.getName() + " ");
      return superclass.getName();
    } catch (Exception e) {
    }
    return "";
  }

  public List<String> getInterfaces(String s) {
    List<String> list = new ArrayList<String>();
    try {
      // Class c = Class.forName(s);
      Class inter[] = this.c.getInterfaces();
      System.out.print("implements ");
      for (int i = 0; i < inter.length; i++) {
        list.add(inter[i].getName());
        System.out.print(inter[i].getName());
        System.out.print(", ");
      }
      System.out.println(" ");
      System.out.println(" { ");
    } catch (Exception e) {
    }
    return list;
  }

  public List<OutField> getFields(String s) {
    List<OutField> list = new ArrayList<OutField>();
    try {
      // Class c = Class.forName(s);
      Field f[] = this.c.getFields();
      for (int i = 0; i < f.length; i++) {
        OutField field = new OutField();
        list.add(field);
        // int m = f[i].getModifiers();
        field.modifiers = getModifiers(f[i].getModifiers());
        System.out.print(" ");
        Class type = f[i].getType();
        System.out.print(type.getName());
        field.type = type.getName();
        field.name = f[i].getName();
        System.out.println(" " + f[i].getName());
      }
    } catch (Exception e) {
    }
    return list;
  }

  public void getConstructors(String s) {
    try {
      // Class c = Class.forName(s);
      Constructor cs[] = this.c.getConstructors();
      for (int i = 0; i < cs.length; i++) {
        int m = cs[i].getModifiers();
        getModifiers(m);
        System.out.print(this.c.getName() + "(");
        Class type[] = cs[i].getParameterTypes();
        for (int k = 0; k < type.length; k++) {
          System.out.print(type[k].getName() + ",");
        }
        System.out.print(")");
        System.out.println(" ");
      }
    } catch (Exception e) {
    }
  }

  public void getMethods(String s) {
    try {
      // Class c = Class.forName(s);
      Method m[] = this.c.getMethods();
      for (int i = 0; i < m.length; i++) {
        int m1 = m[i].getModifiers();
        getModifiers(m1);
        System.out.print(m[i].getReturnType().getName());
        System.out.print(" " + m[i].getName());
        System.out.print("(");
        Class type[] = m[i].getParameterTypes();
        for (int k = 0; k < type.length; k++) {
          System.out.print(type[k].getName() + ",");
        }
        System.out.print(")");
        System.out.println(" ");
      }
    } catch (Exception e) {
    }

  }

  Class<?> c;

  public OutClass buildClass(String className) throws Exception {
    OutClass outClass = new OutClass();
    // OutClass c= printStart(className);
    System.out.println("Compiled from  " + className);
    // try {
    this.c = Class.forName(className);
    // int m = this.c.getModifiers();
    // List<String> mods = printModifier(m);
    outClass.modifiers = getModifiers(this.c.getModifiers());
    outClass.name = className;
    System.out.print(" class " + className + "  ");

    outClass.superClass = getSuperClass(className);
    outClass.interfaces = getInterfaces(className);
    outClass.fields = getFields(className);
    outClass.constructors = getConstructors(className);
    outClass.methods = getMethods(className);
    System.out.print("} ");
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

  static class OutClass {
    String name;
    String type;
    List<OutMethod> methods;
    List<OutField> fields;
    List<OutMethod> constructors;
    List<String> modifiers;
    String superClass;
    List<String> interfaces;
  }

  static class OutField {
    String name;
    String type;
    List<String> modifiers;
  }

  static class OutMethod {
    String name;
    String type;
    List<String> modifiers;
    List<OutParam> parameters;
  }

  static class OutParam {
    String name;
    String type;
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