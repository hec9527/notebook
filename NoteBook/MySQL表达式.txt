Mysql中一些字符的作用：
序    列	含    义
\0	一个ASCII 0 (NUL)字符
\n	一个换行符
\r	一个回车符（Windows中使用\r\n作为新行标志）
\t	一个定位符
\b	一个退格符
\Z	一个ASCII 26字符（CTRL+Z）
\'	一个单引号（“'”）
\"	一个双引号(“"”)
\\	一个反斜线（“\”）
\%	一个“%”符。它用于在正文中搜索“%”的文字实例，否则这里“%”将解释为一个通配符
\_	一个“_”符。它用于在正文中搜索“_”的文字实例，否则这里“_”将解释为一个通配符


数学函数：
--	ABS(x)                     返回x的绝对值
--	BIN(x)                     返回x的二进制（OCT返回八进制，HEX返回十六进制）
--	EXP(x)                     返回值e（自然对数的底）的x次方
--	GREATEST(x1,x2,...,xn)     返回集合中最大的值
--	LEAST(x1,x2,...,xn)        返回集合中最小的值
--	LN(x)               	   返回x的自然对数
--	LOG(x,y)             	   返回x的以y为底的对数
--	MOD(x,y)             	   返回x/y的模（余数）
--	PI()                 	   返回pi的值（圆周率）
--	RAND()                	   返回0到1内的随机值,可以通过提供一个参数(种子)使RAND()随机数生成器生成一个指定的值
--	FLOOR(x)             	   返回小于x的最大整数值，（去掉小数取整）
--	CEILING(x)             	   返回大于x的最小整数值，（进一取整）
--	ROUND(x,y)                 返回参数x的四舍五入的有y位小数的值，（四舍五入）
--	TRUNCATE(x,y)              返回数字x截短为y位小数的结果
--	SIGN(x)               	   返回代表数字x的符号的值（正数返回1，负数返回-1，0返回0）
--	SQRT(x)               	   返回一个数的平方根

字符串函数
--	ASCII(char)                         返回字符的ASCII码值
--	Char（x1,x2,x3,…）                 将x1,x2,x3的ascii码转换为字符，结果组合成一个字符串。
--	LEFT(str,x)                         返回字符串str中最左边的x个字符
--	RIGHT(str,x)                        返回字符串str中最右边的x个字符
--	substring(str, pos, len)            返回字符串str从pos位开始截取len个长度的字符
--	REPLACE(str1,str2,str3)             用str3替换str1中所有出现的字符串str2
--	CONCAT(s1,s2...,sn)                 将s1,s2...,sn连接成字符串
--	STRCMP(s1,s2)                       比较s1和s2大小，相等返回0，s1>s2返回1，s1<s2返回-1
--	LENGTH(str)                         算出str字节数有多少（utf-8 一个汉字占3个字节）
--	INSERT(str,pos,len,newstr)          将字符串str从第pos位置开始，len个字符长的子串替换为newstr。
--	Upper(str)                          将str所有字符变成大写
--	Lower(str)                          将str所有字符变成小写
--	

日期和时间函数  
--	NOW()                                  返回当前的日期和时间
--	CURDATE()或CURRENT_DATE() 	       返回当前的日期
--	CURTIME()或CURRENT_TIME()    	       返回当前的时间
--	YEAR(date)      		       返回日期date的年份(1000~9999)
--	MONTH(date)       		       返回date的月份值(1~12)
--	DAYOFYEAR(date)      		       返回date是一年的第几天(1~366)
--	DAYOFMONTH(date)    		       返回date是一个月的第几天(1~31)
--	DAYOFWEEK(date)      		       返回date所代表的一星期中的第几天(1~7)
--	   HOUR(time)     		       返回time的小时值(0~23)
--	MINUTE(time)     		       返回time的分钟值(0~59)
--	SECOND(time)    		       返回time的秒值（0-59）
--	WEEK(date)      	 	       返回日期date为一年中第几周(0~53)
--	YEARWEEK(date)	 		       返回日期date为哪一年哪一个星期
--	DATE_ADD(date,INTERVAL int keyword)    返回日期date加上间隔时间int的结果(int必须按照关键字进行格式化)
--	DATE_SUB(date,INTERVAL int keyword)    返回日期date加上间隔时间int的结果(int必须按照关键字进行格式化

根据format字符串格式化date值: 
DATE_FORMAT(date,format)   		date 参数是合法的日期。format 规定日期/时间的输出格式。
--	%S, %s 				两位数字形式的秒（ 00,01, ..., 59）
--	%I, %i 				两位数字形式的分（ 00,01, ..., 59）
--	%H 				两位数字形式的小时，24 小时（00,01, ..., 23）
--	%h 				两位数字形式的小时，12 小时（01,02, ..., 12）
--	%k 				数字形式的小时，24 小时（0,1, ..., 23）
--	%l 				数字形式的小时，12 小时（1, 2, ..., 12）
--	%T 				24 小时的时间形式（hh:mm:ss）
--	%r 				12 小时的时间形式（hh:mm:ss AM 或hh:mm:ss PM）
--	%p				AM或PM
--	%W 				一周中每一天的名称（Sunday, Monday, ..., Saturday）
--	%a 				一周中每一天名称的缩写（Sun, Mon, ..., Sat）
--	%d 				两位数字表示月中的天数（00, 01,..., 31）
--	%e 				数字形式表示月中的天数（1, 2， ..., 31）
--	%D 				英文后缀表示月中的天数（1st, 2nd, 3rd,...）
--	%w 				以数字形式表示周中的天数（ 0 = Sunday, 1=Monday, ..., 6=Saturday）
--	%j 				以三位数字表示年中的天数（ 001, 002, ..., 366）
--	%U 				周（0, 1, 52），其中Sunday 为周中的第一天
--	%u 				周（0, 1, 52），其中Monday 为周中的第一天
--	%M 				月名（January, February, ..., December）
--	%b 				缩写的月名（ January, February,...., December）
--	%m 				两位数字表示的月份（01, 02, ..., 12）
--	%c 				数字表示的月份（1, 2, ...., 12）
--	%Y 				四位数字表示的年份
--	%y 				两位%数字表示的年份
--	%% 				直接值“%”
