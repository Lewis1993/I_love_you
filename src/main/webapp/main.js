var timestamp = Date.parse(new Date());
//2018.4.22至2019.8.7 一共473天
/**
 * public static void main(String[] args) {
        Calendar c1 = Calendar.getInstance();
        c1.clear();
        c1.set(2018, Calendar.APRIL,22 );
        long mills = c1.getTimeInMillis();
        System.out.println(mills);
    }
 * @type {number}
 */
var time = timestamp/1000 - 1524326400;

function timedCount()
{
document.getElementById('shijian').innerHTML = fmoney(time,0);
time = time + 1;
t = setTimeout("timedCount()",1000);
}

/** 每三位数字添加一个逗号，方便阅读 **/

function fmoney(s, n)   
{   
   n = n > 0 && n <= 20 ? n : 2;   
   s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";   
   var l = s.split(".")[0].split("").reverse(),   
   r = s.split(".")[1];   
   t = "";   
   for(i = 0; i < l.length; i ++ )   
   {   
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
   }   
   return t.split("").reverse().join("") /*+ "." + r*/;   
}