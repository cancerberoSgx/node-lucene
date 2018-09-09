
export interface JavaOptions {

  /**
   * Create async methods that return promises by setting the asyncOptions property of the java object. Allow changing the suffix assigned for sync and async method variants, and to further configure this module to optionally omit generation of any of these variants. 
   * 
   * 
#### NOTES:
* If you want the defacto standard behavior, simply don't set java.asyncOptions.
* If you do provide asyncOptions, be aware that this module will not generate method variants of a given flavor if you don't provide a string value for the corresponding suffix (`asyncSuffix`, `syncSuffix`, `promiseSuffix`). In the example above, the application is configured to omit the method variants using node-style async callback functions.
* If you provide `asyncOptions.promiseSuffix` then you must also set `asyncOptions.promisify` to a function that *promisifies* a node-style async function. I.e. the provided function must take as input a function whose last argument is a node callback function, and it must return an equivalent promise-returning function. Several Promises/A+ libraries provide such functions, but it may be necessary to provide a wrapper function. See `testHelpers.js` for an example.
* If you provide `asyncOptions.promisify` then you must provide a *non-empty* string for `asyncOptions.promiseSuffix`.
* Either (but not both) `asyncSuffix` or `syncSuffix` can be the empty string. If you want the defacto standard behavior for no suffix on async methods, you must provide an empty string for `asyncSuffix`.
* We've tested promises with five Promises/A+ implementations. See `testHelpers.js` for more information.
* NOTE: Due to specifics of initialization order, the methods  `java.newInstancePromise`, `java.callMethodPromise`, and `java.callStaticMethodPromise` are not available until the JVM has been created. You may need to call some other java method such as `java.import()` to finalize java initialization, or even better, the function `java.ensureJvm()`.


   */
  asyncOptions: AsyncOptions

  /**
   * Array of paths or jars to pass to the creation of the JVM.
   *
   * All items must be added to the classpath before calling any other node-java methods.
   *
   * Example: 
   *
   * ```javascript
   * java.classpath.push('commons.io.jar');
   * java.classpath.push('src');
   * ```
   */
  classpath: string[]

  /**
   * Array of options to pass to the creation of the JVM.
   *
   * All items must be added to the options before calling any other node-java methods.
   *
   * Example:
   *
   * ```javascript
   * java.options.push('-Djava.awt.headless=true');
   * java.options.push('-Xmx1024m');
   * ```
   */
  options: string[]
}

export interface Java extends JavaOptions {

  /**
   * Loads the class given by className such that it acts and feels like a javascript object.
   *
   * @param className - The name of the class to create. For nested classes separate using a '$' (eg.
   * com.nearinfinty.MyClass$NestedClass)
   *
   * Example: 
   *
   * ```javascript
   * var Test = java.import('Test');
   * Test.someStaticMethodSync(5);
   * console.log(Test.someStaticField);
   * var value1 = Test.NestedEnum.Value1;
   * var test = new Test();
   * list.instanceMethodSync('item1');
   * ```
   *
   * @param className 
   */
  import<T>(className: string): T

  /**
   * TODO
   * Creates an instance of the specified class. If you are using the sync method an exception will be throw if an error occurs,
otherwise it will be the first argument in the callback.
   */
  newInstanceSync<T>(javaClass: string): T


  /**
   * TODO Creates an instance of the specified class. If you are using the sync method an exception will be
   * throw if an error occurs, otherwise it will be the first argument in the callback.
   */
  newInstanceSync<T>(javaClass: string, ...args: any[]): T

  /**
   * If the JVM has not yet been created, execute the full JVM initialization process, then call callback
   * function when initialization is complete. If the JVM has been created, just call the callback. Note that
   * the full initialization process includes: 1) executing all registered client *before* hooks, 2) creating
   * the JVM, then 3) executing all registered client *after* hooks.
   */
  ensureJvm(callback: () => void): void
  /**
   * Returns true if the JVM has been created. The JVM can only be created once.
   */
  isJvmCreated(): boolean

  /**
   * Gets a static field value from the specified class.
   * @param className The name of the class to get the value from. For nested classes separate using a '$' (eg. com.nearinfinty.MyClass$NestedClass)
   * @param fieldName The name of the field to get the value from.
   * 
   * Example: 
   * 
   * ```js
   * const data = java.getStaticFieldValue("com.nearinfinty.MyClass", "data");
   * ```
   */
  getStaticFieldValue<T>(className: string, fieldName: string): T

  /**
   * Calls a static method on the specified class. If you are using the sync method an exception will be throw if an error occures, otherwise it will be the first argument in the callback.  
   * @param className The name of the class to call the method on. For nested classes separate using a '$' (eg. com.nearinfinty.MyClass$NestedClass)
   * @param methodName The name of the method to call. The method name can include the full signature (see [Getting the full method signature](#getFullMethodSignature)).
   * Example: 
   * 
   * ```js
   *   const result = java.callStaticMethodSync("com.nearinfinty.MyClass", "doSomething", 42, "test")
   * ``` 
   */
  callStaticMethodSync<T>(className: string, fieldName: string, ...args: any[]): T
  /**
   * Calls a static method on the specified class. If you are using the sync method an exception will be throw if an error occures, otherwise it will be the first argument in the callback.  
   * @param className The name of the class to call the method on. For nested classes separate using a '$' (eg. com.nearinfinty.MyClass$NestedClass)
   * @param methodName The name of the method to call. The method name can include the full signature (see [Getting the full method signature](#getFullMethodSignature)).
   * Example: 
   * 
   * ```js
   *   const result = java.callStaticMethodSync("com.nearinfinty.MyClass", "doSomething", 42, "test")
   * ``` 
   */
  callStaticMethod<T>(className: string, fieldName: string, ...args: any[]): void
  /**
   * Calls a static method on the specified class. If you are using the sync method an exception will be throw if an error occures, otherwise it will be the first argument in the callback.  
   * @param className The name of the class to call the method on. For nested classes separate using a '$' (eg. com.nearinfinty.MyClass$NestedClass)
   * @param methodName The name of the method to call. The method name can include the full signature (see [Getting the full method signature](#getFullMethodSignature)).
   * Example: 
   * 
   * ```js
   *   const result = java.callStaticMethodSync("com.nearinfinty.MyClass", "doSomething", 42, "test")
   * ``` 
   */
  callStaticMethodPromise<T>(className: string, fieldName: string, ...args: any[]): Promise<T>

  // /**
  //  * Calls a static method on the specified class. If you are using the sync method an exception will be throw if an error occures, otherwise it will be the first argument in the callback.  
  //  * @param className The name of the class to call the method on. For nested classes separate using a '$' (eg. com.nearinfinty.MyClass$NestedClass)
  //  * @param methodName The name of the method to call. The method name can include the full signature (see [Getting the full method signature](#getFullMethodSignature)).
  //  * Example: 
  //  * 
  //  * ```js
  //  *   const result = java.callStaticMethod("com.nearinfinty.MyClass", "doSomething", 42, "test")
  //  * ``` 
  //  */
  // callStaticMethod<T>(className: string, fieldName: string, ...args: any[]/* , callback: (error: any, result: any) => void */): T


  /**
   * Creates a new java Proxy for the given interface. Functions passed in will run on the v8 main thread and not a new thread.
   * 
   * The returned object has a method unref() which you can use to free the object for garbage collection.
   * 
   * @param interfaceName - The name of the interface to proxy. Separate nested classes using '$' (eg. com.nearinfinty.MyClass$NestedClass).
   * @param functions A hash of functions matching the function in the interface. 
   */
  newProxy<T>(interfaceName: string, functions: any): any

  newArray(className: string, array: any[]): any
}


export type Callback<T> = (error: Error, value: T) => void

/**
JavaScript only supports 32-bit integers. Because of this java longs must be treated specially. When getting a
long result the value may be truncated. If you need the original value there is a property off of the result
called "longValue" which contains the un-truncated value as a string. If you are calling a method that takes a
long you must create it using [java.newInstance](#javaNewInstance).

```javascript
var javaLong = java.newInstanceSync("java.lang.Long", 5);
console.log('Possibly truncated long value: ' + javaLong);
console.log('Original long value (as a string): ' + javaLong.longValue);
java.callStaticMethodSync("Test", "staticMethodThatTakesALong", javaLong);
```
*/
export interface Long extends Number {
  longValue?: string
}

export interface AsyncOptions {
  asyncSuffix?: string | undefined
  syncSuffix?: string | undefined
  promiseSuffix?: string | undefined
  promisify?: any
}