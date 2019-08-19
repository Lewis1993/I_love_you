import java.util.Calendar;

public class dfsdf {
    public static void main(String[] args) {
        Calendar c1 = Calendar.getInstance();
        c1.clear();
        c1.set(2018, Calendar.APRIL,22 );
        long mills = c1.getTimeInMillis();
        /*第一次修改*/
        System.out.println(mills);
    }
}
