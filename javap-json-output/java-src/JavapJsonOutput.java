import java.lang.reflect.*;
import java.awt.*;
import java.io.*;
import java.net.*;

import org.apache.commons.lang3.builder.RecursiveToStringStyle;
import org.apache.commons.lang3.builder.ReflectionToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;


public class JavapJsonOutput {


  public static void printStart(String s) {
    System.out.println("Compiled from  " + s);
    try {
      Class c = Class.forName(s);
      int m = c.getModifiers();
      printModifier(m);
      System.out.print(" class " + s + "  ");
    } catch (Exception e) {
    }
  }

  public static String printModifier(int m) {
    // ArrayList<String> result = {};
    if (Modifier.isPublic(m)) {
      System.out.print("public ");
      return "public";
      // result.
    }
    if (Modifier.isStatic(m)) {
      System.out.print("static ");
      return "static";
    }
    if (Modifier.isAbstract(m)) {
      System.out.print("abstract ");
      return "abstract";
    }
    if (Modifier.isFinal(m)) {
      System.out.print("final ");
      return "final";
    }
    return "";
    // System.out.print("final ");
  }

  public static void printSuperClass(String s) {
    try {
      Class subclass = Class.forName(s);
      Class superclass = subclass.getSuperclass();
      System.out.print("extends " + superclass.getName() + " ");
    } catch (Exception e) {
    }
  }

  public static void printInterface(String s) {
    try {
      Class c = Class.forName(s);
      Class inter[] = c.getInterfaces();
      System.out.print("implements ");
      for (int i = 0; i < inter.length; i++) {
        System.out.print(inter[i].getName());
        System.out.print(", ");
      }
      System.out.println(" ");
      System.out.println(" { ");
    } catch (Exception e) {
    }
  }

  public static void printField(String s) {
    try {
      Class c = Class.forName(s);
      Field f[] = c.getFields();
      for (int i = 0; i < f.length; i++) {
        int m = f[i].getModifiers();
        printModifier(m);
        System.out.print(" ");
        Class type = f[i].getType();
        System.out.print(type.getName());
        System.out.println(" " + f[i].getName());
      }
    } catch (Exception e) {
    }
  }
  

  public static void printConstructor(String s) {
    try {
      Class c = Class.forName(s);
      Constructor cs[] = c.getConstructors();
      for (int i = 0; i < cs.length; i++) {
        int m = cs[i].getModifiers();
        printModifier(m);
        System.out.print(c.getName() + "(");
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

  public static void printMethods(String s) {
    try {
      Class c = Class.forName(s);
      Method m[] = c.getMethods();
      for (int i = 0; i < m.length; i++) {
        int m1 = m[i].getModifiers();
        printModifier(m1);
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
      String[] classes = s[0].split(",");
      for (int i = 0; i < classes.length; i++) {
        String className = classes[i];
        printStart(className);
        printSuperClass(className);
        printInterface(className);
        printField(className);
        printConstructor(className);
        printMethods(className);
      }


      System.out.print("} ");
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

}