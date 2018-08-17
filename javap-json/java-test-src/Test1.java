public class Test1 {

  // Example 1: would like to declare a class implementing some interface 
  // 100% from JavaScript. In other words, is it possible to perform the following
  // but in 100% JavaScript ? 

  // library part:

  public static void libraryApi1(Runnable runnable){
    runnable.run();
  }

  // ser part: 

  private static void example1() {
    libraryApi1(new Runnable(){
      @Override
      public void run() {
        System.out.println("Test 1");
      }
    });
  }


  // Example 2: is same but more elaborated. Some libraries provide a 
  // working Base class and for customizing its default behavior one needs 
  // to create a subclass and override some of its methods. Is it possible 
  // to do this 100% from JavaScript ? Example: 

  // library part:

  private static interface LibraryInterface2 {
    String customizeMe();
    void runMe();
  }
  private static class LibraryBase2 implements LibraryInterface2 {
    public String customizeMe() {
      return "hello world";
    }
    public void runMe() {
      System.out.println(this.customizeMe());
    }
  }
  static void libraryApi2(LibraryInterface2 c){
    c.runMe();
  }

  // user part:

  static class MyCustom2 extends LibraryBase2{
    public String customizeMe() {
      return "Hola Mundo";
    }
  }
  public static void example2() {
    libraryApi2(new MyCustom2());
  }


  public static void main(String[] args) {
    example1();
    example2();
  }
}