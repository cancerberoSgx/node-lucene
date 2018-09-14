import java.lang.*;
import java.lang.reflect.*;
import java.math.BigInteger;
import java.util.*;

public class BigNumberTest1  {
  public static void main(String[] args) {
    BigInteger a = new BigInteger("123123123123123");
    BigInteger b = new BigInteger("123123123123123");
    System.out.println(a.multiply(b));

    
    // Double d1 = new Double(3.14);
    System.out.println(Double.sum(new Double("0.1"), new Double("0.2")));

    System.out.println(200.30*3);
  }
}

