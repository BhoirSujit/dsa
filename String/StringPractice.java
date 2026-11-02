package String;

class StringPractice {
    public static void main(String args[]) {
        // String Creation
        // 1. using literals
        String s1 = "Hello";
        System.out.println(s1);
        // Stored in the String Constant Pool (SCP).
        // If the same literal already exists, Java reuses it.

        // 2 using new keyword
        String s2 = new String("Hello");
        System.out.println(s2);
        // Creates a new String object on the heap.
        // Even if "Hello" already exists in the pool, new creates a separate object.

        // 3 covert character into a string
        char[] c3 = { 'H', 'e', 'l', 'l', 'o' };
        String s3 = new String(c3);
        System.out.println(s3);

        // 4 StringBuilder or StringBuffer
        StringBuilder s4 = new StringBuilder("Hello");
        StringBuffer s42 = new StringBuffer("Hello");
        System.out.println(s4);
        System.out.println(s42);

        // # notes
        /*
         * == compares object references.
         * equals() compares String contents.
         */

        String a = "Hi";
        String b = "Hi";
        String c = new String("Hi");

        System.out.println(a == b); // true
        System.out.println(a == c); // false
        System.out.println(a.equals(c)); // true

        /*
         * Why is String immutable?
         * 1. Security: Prevents modification of sensitive values such as file paths and
         * URLs.
         * 2. String Pool: Allows safe reuse of String objects.
         * 3. Thread safety: Multiple threads can safely share String objects.
         * 4. HashCode caching: Improves performance when Strings are used as HashMap
         * keys.
         */

        String sk1 = "Java";
        String sk2 = sk1;

        sk1 = sk1.concat(" Developer");

        System.out.println(sk1); // Java Developer
        System.out.println(sk2); // Java
    }
}