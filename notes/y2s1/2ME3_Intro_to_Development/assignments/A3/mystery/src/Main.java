public class Main {
    public static void main(String[] args) {
//        Mystery1 m = new Mystery1();
//        m.f1("1","2");
//        m.f1("2","3");
//        m.f1("3","4");
//        m.f1("3","2");
//        m.f1("3","5");
//        m.f1("4","5");
//        m.f1("5","1");
//        System.out.println(m.f2("5"));
//        System.out.println(m.f3("1","4"));
//        System.out.println(m.f3("1","5"));
//        System.out.println(m.f3("5","1"));
        Mystery1 g = new Mystery1();
        g.f1("2","3");
        g.f1("2","1");
        g.f1("3","2");
        g.f1("1", "2");
        g.f1("2", "4");
        g.f1("4", "7");
        g.f1("6", "7");
        g.f1("3", "4");
        g.f1("4", "1");


        System.out.println(g.f2("2") + g.f2("4") + g.f2("7")); // 6

        System.out.println(g.f3("1", "2")); // true
        System.out.println(g.f3("2", "3")); // true
        System.out.println(g.f3("1", "3")); // false
        System.out.println(g.f3("1", "4")); // true
    }
}