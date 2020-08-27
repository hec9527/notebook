# Python3

> @Author: hechun  
> @Date: 2018-10-10 17:00:06  
> @Last Modified by: hechun  
> @Last Modified time: 2018-10-19 17:07:01  
> @description  
>  &nbsp; &nbsp; Python3 不兼容 Python2  
>  &nbsp; &nbsp; Python 编程方式 1.交互式 ————每次运行一条语句，就像 shell 2.文件式 ————保存为\_.py 文件，就像 JS

## 安装

### windows

在 python 官网下载安装程序傻瓜式安装，推荐自定义安装目录但是路径最好不要有中文字符  
[官网下载](https://www.python.org/downloads/windows/)

### linux

linux 需要在官网下载源码然后手动编译安装

- 依赖库安装 如果没有这些库可能会导致安装失败

```shell
- yum -y install wget gcc zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel libffi-devel
```

- 流程：

```shell
  # 下载解压到指定目录  python 目录下：
  ./configure --prefix=/usr/local/python37 --enable-optimizations
  make && make install
  # 修改 PATH，可以是用户 path 也可以是系统 path
  export PATH=\$PATH:/usr/local/python37/bin
  source .bash_profile
```

## 基础知识

### 程序设计模式

- IPO 编程
- - I input
- P process
- O output
- 字典向下设计
- 任务粒度切分
- 模块化设计
- 配置化设计
- 程序与配置分离

### 缩进

- 严格明确--语法的一部分，缩进不正确程序运行错误
- 所属关系--表示代码的层次关系
- 长度一致--在同一个程序当中所有的缩进采用统一的缩进长度

### 代码块

python 中的代码块都是以英文冒号开始,以缩进区分

### 注释

```python
#单行注释

'''
多行注释 多行注释实际上也是多行字符串 需要遵守代码缩进
'''
```

### 命名与保留字(33 个字)

- 用来保存和表示数据的占位符
- 大小写字母、数字、下划线、汉字等，不可使用保留字
- 和 JAVA 相同可以使用中文作为变量名 大小写敏感

### 其它

- dir(**builtins**)  
  查看 python 提供的可以查看模块的函数、变量、类
  但是获取到的是所有的包含内置的，使用**all**可以查看可以外部调用的接口,
  并不是所有模块都提供了**all**属性，如果模块设置了该属性在使用 from 模块 import \*的时候就只有**all**里面的才会被导入
- help(BIF)  
  BIF 内置函数
  查看内置函数的帮助文档
  原始字符串
  在字符串之前添加 r 使字符串内的转义字符无效
- isinstance(`arg`,`type`)  
  `arg`:待定的数据类型
  `type`:指定的数据类型  
  如果 arg 是 type 指定的数据类型返回 ture 否则返回 false
- assert 断言  
  后面的语句为假的是否抛出断言异常 结束程序

### if name=="main":

当模块作为最初运行的文件的时候，`name=="main"`
当模块作为导入模块的时候，`name=="模块名"`

### 全局函数

#### reversed(序列)

用户返回一个反转后的**迭代对象**

#### enumerate(序列)

生成一个二元组构成的迭代对象，元组的第一个为索引，第二个为序列中的值

#### zip(arg1[,arg2]..)

返回各个迭代参数组成的元组

#### fn.**doc**

查看函数的帮助手册

#### filter(arg1,arg2) # 过滤器

如果 arg1 为 fn，则将 arg2 中的每一个参数作为 fn 的参数进行运算，返回为 true 的结果
否则直接判断 arg2 中的值是否为 true

#### map(arg1,arg2)

arg1 为一个 fn，将 arg2 中的每一个元素都放到 fn 中运算，返回结果

#### input()

变量=input(<"提示信息字符串">)

#### eval()

评估函数 去掉参数最外侧引导号并且 _执行_ 余下语句(可以将将字符串变成 python 语句)
eg:

```python
x = eval("1 + 2") # 3
```

#### print()

- 可以打印出需要输出的字符串、变量等，在非引号内使用逗号，可以在输出结果中添加空格
- 可以在括号中添加 end="" 输出后不换行
- 可以在括号中添加 stp="" 用于连接参数值
- `/r` 将光标移动到最前面

#### range(m,n,k)

- 当只有一个参数的时候可以产生从 0 到 m-1 的数
- 有两个参数的时候可以产生从 m 到 n 的所有的数
- 当有三个参数的时候可以产生从 m 到 n 的步长为 k 的所有整数,默认为 1

### 库的引用

使用 import 库名的方式应用的库在调用其中的方法的时候需要反复的是写出[库名.函数名]  
可以使用 as 简化库名(起外号)、也可以使用以下方式，调用函数的时候就不再需要使用[库名.函数名]的方格  
但是第三方库的函数名可能会导致用户的自定义函数与第三方库的名字相同  
import <库名>[,<库名>][,<库名>] --一行引用多个库文件  
import <库名> [as alias] --引用库并且起别名  
from <库名> import <函数名> --引用库中的某一个函数，可以防止导入大量无用的函数  
from <库名> import \* --引用库的中的所有的函数，不推荐，可能会导致函数名命名冲突并且导入大量无用的函数

### 运算符

`+ - \* %` --同 JAVA，但是"+"不能连接 str 与其它类型  
`/` 结果为浮点数  
`//` 整除,不保留小数  
`**` 幂次方，等同于 pow，当后一个数为小数的时候为开方的效果

### 数值运算函数

| 函数            | 说明                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| abs()           | 求绝对值                                                                                               |
| divmod(x,y)     | 商余 同时输出 x 处以 y 的商和余数                                                                      |
| pow(x,y,z)      | 运算 x 的 y 次方 舍去最后 z 位，z 可以省略 当 y 为小数的时候为开方的效果 pow(x,y)计算 x^y,可以嵌套使用 |
| round(x,d)      | 四舍五入，对 x 四舍五入 d 位小数 默认为 0                                                              |
| max(x1,x2...xn) | 对输入的数据求最大值                                                                                   |
| min(x1,x2...xn) | 对输入的数据求最小值                                                                                   |

### 数据类型转换

| 函数       | 说明                   |
| ---------- | ---------------------- |
| int(x)     | 取整数部分             |
| str(x)     | 将其他类型转换为字符串 |
| float(x)   | 转换为浮点数           |
| complex(x) | 将整数转换为复数       |
| dict()     | 创建、转换为字典       |
| set()      | 创建、转换为集合       |
| list()     | 创建、转换为列表       |

### 转义字符

| 字符 | 说明                                     |
| ---- | ---------------------------------------- |
| \    | 之后的字符去除其特殊含义或者添加特殊含义 |
| \'   | 单引号                                   |
| \"   | 双引号                                   |
| \a   | 发出系统响铃声                           |
| \b   | 退格符                                   |
| \n   | 换行                                     |
| \t   | 横向制表符                               |
| \v   | 纵向制表符                               |
| \r   | 回车                                     |
| \f   | 换页符                                   |
| \o   | 八进制数代表的字符                       |
| \x   | 十六进制代表的字符                       |
| \O   | 表示一个空字符                           |
| \\   | 反斜杠                                   |

## 数据类型

可以使用 id() 函数查看变量在内存中的内存地址来区分可变数据类型和不可变数据类型

- 不/可变数据类型
- 可变数据类型：
- 在 python 中定义一个变量，当变量值被修改后，内存地址未变更(对象未变更)
- 字典、列表
- 不可变数据类型：
- 当变量数值被修改后，变量的内存地址发生变更(创建了新对象)
- 数字、字符串、元组

### 数字

#### 整数

| 进制   | 表示              |
| ------ | ----------------- |
| 2 进制 | （0b010、-0B010） |
| 8 进制 | （0o123、-0O123） |
| 10 进  | （123）           |
| 16 进  | （0x9）           |

#### 浮点数

浮点数之间的运算存在不确定的尾数  
`范围` -10^308——10^308  
`精度` 10^16

#### 复数

与数学中的复数相同  
x+yj x 为实数头部、y 虚数部分头部、j 虚数  
`.image` 求复数的复数部分  
`.real` 求复数的实数部分

### 字符串

- `定义`
  由 0 个或者多个字符组成的有序数列
- `索引`
  从 0 开始、-1 代表的是最后一个
- `切片`
  str[m:n,z]，返回一段字符串子串
  m 开始切片索引(包括)，n 结束切片索引(不包括)
  缺失 m 从开始切片，缺少 n 切到结尾
  存在 z 的时候截取从 m 到 n 的步长为 z 的字符 使用 str[::-1]可以得到字符串的逆序
- `查找`
  使用 find(subStr) 方法获取 子字符串在指定字符串中出现的索引，返回第一个
  rfind(subStr) 返回最后一个
- `替换`
  replace(old,new)
- `计数`
  conut(subStr) 获取子字符串出现的次数

#### 字符串操作符

- `+`连接字符串 只能连接两个--字符串--
- `n\*str` 将字符串 str 复制 n 次
- `in x in s` 判断 x 是否在里面，返回 bool 值

#### 字符串操作函数

| 字符串函数 | 说明                                             |
| ---------- | ------------------------------------------------ |
| len(x)     | 返回字符串长度的函数，数字汉字英语字母都是相同的 |
| str(x)     | 将其他类型的数据变成字符串                       |
| hex(x)     | 整数的十六进制小写形式                           |
| oct(x)     | 整数的八进制的小写形式                           |
| chr(x)     | 将 unicode 编码转换为对应的字符编码              |
| ord(x)     | 返回 x 的字符编码                                |

#### 字符串常用处理方法

| 字符串方法                            | 说明                                               |
| ------------------------------------- | -------------------------------------------------- |
| str.capitalize()                      | 首字母大写的拷贝                                   |
| str.index("subStr")                   | 查找字符串中子字符串第一次出现的索引，不存在则报错 |
| str.find("substr")                    | 查找字符串中子字符串第一次出现的索引，不存在返回-1 |
| str.startwith("substr") str.endwith() | 字符串时候以指定的字符串开始或者结尾               |
| str.title()                           | 首字母大写                                         |
| str.lower() str.upper()               | 将字符串转换为小写或者大写                         |
| str.split(spe=None)                   | 按特定字符分隔字符串，返回一个列表                 |
| str.count()                           | 返回在字符串中字串出现的次数                       |
| str.replace(old,new)                  | 替换字符串中的字串                                 |
| str.center(width[,fillchar])          | 将字符串居中，剩余部分用其他字符填充               |
| str.rjust(len[,"char"])               | 将字符串靠右侧，左侧填充                           |
| str.ljust(len[,"char"])               | 将字符串靠左，右侧填充                             |
| str.rstrip(chars) str.lstrip(chars)   | 除去字符串右边 左边的字符默认为空白                |
| str.strip(chars)                      | 去掉字符串两边出现的字符                           |
| str.join(iter)                        | 在除去最后一个字符外的其他字符后添加一个字符       |
| str.format()                          | 字符串格式化                                       |
| str.isdigit()                         | 返回布尔值 字符串是否由数字构成,纯数字 True        |
| str.isalpha()                         | 返回布尔值 字符串是否由字母构成，纯字母 True       |

#### 字符串类型的格式化

- 字符串格式化  
  %s %d 在 python 中被称为占位符 遇到%之后就会在%之后的括号()中匹配元素 例如下

```python
print("I have a %s, a %s, and a %s." % (animals[0], animals[1], animals[2]))
```

| 占位符 | 说明                                 |
| ------ | ------------------------------------ |
| %c     | 格式化字符串以及它的 ASCII 码        |
| %s     | 格式化字符串                         |
| %d     | 格式化整数                           |
| %o     | 格式化无符号八进制数                 |
| %x     | 格式化无符号十六进制数               |
| %X     | 格式化无符号大写十六进制数           |
| %f     | 格式化浮点数，可以指定浮点数的精确度 |
| %e     | 使用科学基数法表示浮点数             |
| %E     | 使用科学计数法表示浮点数 大写        |
| %g     | 根据值得大小决定是否 %f 还是 %e      |
| %G     | 根据值得大小决定是否 %f 还是 %E      |

- `str.format()`  
  槽--字符串中需要使用字符串格式化的地方，按顺序在字符串中占位 {} 槽中的参数按照一下六种顺序填充，可以缺省  
  具体数据为后面.format()中对应顺序的参数  
  --槽的内部可以使用< >对数据进行具体的控制

| 槽控制参数 | 说明                                 |
| ---------- | ------------------------------------ |
| 引导：     | :引号符号                            |
| 填充：     | 用于填充单个字符                     |
| 对齐：     | <左对齐 >右对齐 ^居中对齐            |
| 宽度：     | 设置输出的宽度                       |
| 分隔符：   | 设置数字千分位的分隔符               |
| 精度：     | 浮点数小数的精度或者字符串的最大长度 |
| 类型：     | 整数类型 b,c,d,o,x,X                 |
| 浮点类型   | e，E，f，%                           |
| b：        | 二进制格式                           |
| c：        | 字符格式                             |
| d：        | 十进制格式                           |
| o：        | 八进制表示形式                       |
| x：        | 十六进制表示格式                     |
| X：        | 大写的 16 进制格式                   |
| e：        | 科学计数法 e 的格式表示浮点数        |
| E：        | 科学记数法 E 的格式表示浮点数        |
| f：        | 以非科学计数法表示浮点数             |
| %：        | 以百分号形式表示浮点数               |

### 列表

- `定义`
  由 0 个或者多个以逗号分割的数据类型
  使用方括号 [] 或者 list()函数创建 元素之间用逗号隔开
- `修改`
  可以修改，通过 list[index]=value 的方式即可修改列表

| 列表方法                   | 说明                                                                   |
| -------------------------- | ---------------------------------------------------------------------- |
| list[i:j]=1                | i 到 j 的元素都被修改为 1                                              |
| list[i:j:2]=1              | i 到 j 中步长为 2 的元素都修改为 1                                     |
| list+= list1               | 在 list 中添加 list1 可以一次添加多个元素                              |
| list\*=3                   | 将 list 复制 3 次 3 可以是其它数字                                     |
| list.append(x)             | 向列表中添加新的元素 必须是一个值 或者一个列表 元组 字符串             |
|                            | 使用 append()函数添加一个列表会存 在二级列表 使用+= 则不会存在         |
| list.clear()               | 清空                                                                   |
| list.copy()                | 复制 生成新的列表                                                      |
| list.pop()                 | 删除并且返回最后一个值 可以使用索引 指定删除                           |
| list.count(x)              | 计算 x 在列表中出现的次数                                              |
| list.insert(i,x)           | 在列表中位置 i 处添加一个 x 元素 原来的 i 以及之后的所有的元素向后移动 |
| list.index(x[,start,stop]) | 查找 x 在在指定范围内出现的索引 start stop 可有可无                    |
| list.reverse()             | 反转当前的列表                                                         |
| list.sort()                | 排序列表                                                               |
| x in list                  | 是否在列表中                                                           |

- `查找索引`
  - list.index(value)的方式获取指定目标的索引
  - enumerate()方法获取指定目标的索引
  - for index,item in enumerate(items):
  - print(index,item,sep="---")
- `排序`
  - list.sort(reverse=False)  
    将列表按照字母顺序排序,如果 reverse=True 那么将按照字母顺序的相反方向排序
  - list.sorted()  
    用法同 sort()一样，不过运行过后会保留原来的列表，返回一个新的列表
  - list.reverse()  
    用于反转的初始顺序，改变列表的初始顺序 #排序同样适用于数字的列表，按数字的大小排序,包含 int 和 str 的列表无法排序，可以都转换为 str 后排序 默认为先数字后字母 倒序先字母后数字
- `长度`
  - len()  
    函数来获取列表的长度
- `检测`
  使用 in 关键字判断是否在列表里面
- `插入`
  - insert(index,value)
    入元函数在列表的任意位置插素，该位置之后的元素都向后移动 1 index 超出索引之后不会报错，直接插入到最后一个
  - extend(arg1[,arg2]...)
    可以 一次添加多个
  - append(x)
- `删除`
- - del  
    关键字删除列表中指定索引的元素，被删除的元素的后面的元素向前移动 1
- remove()  
  方法删除列表中指定值的元素，只会移除第一个找到的元素
- pop(index)  
  删除并且返回指定索引的元素，默认为最后一个 当超出索引或者列表为空的时候报错
- `切割`
  同字符串的切割 使用中括号 [m,n,step] 来切割列表，切割后原列表不受影响，返回一个新的字串
  复制列表 list1 = list[:]
- `生成`

```python
# 使用以下代码生成包含 1-10 的平方的列表
evens = [number*2 for number in range(1,11)]
# 使用以上代码从指定的列表里面提取的元素生成新的列表
great_students = [student.title() + " the great!" for student in students]
# 使用 list(x)方法将 x(可以为字符串，数字等)转换为一个列表
```

### 元组

- 定义  
   使用小括号()或者 tuple()创建，元素间用逗号分隔  
   元组可以不使用小括号  
   不可修改 return 1,2,3 # python 认为返回一个元组数据类型的 (1,2,3)
- 应用  
   不希望元素被程序修改 --- 适用于多人合作的时候

### 集合

- 定义  
   多个元素的无序集合 不可变数据类型（集合中的元素必须是不可修改的） 同数学中的定义 唯一、无序、不可变  
   集合对象是一系列无序的，离散的哈希对象的集合。  
   常用于成员测试，移除重复元素和一些算术运算例如交，并，差和对称差等  
   集合使用{}表示,里面不会包含相同的元素
- 表示  
   用{}表示集合，元素之间用逗号隔开  
   建立集合用{}或者 set()函数  
   建立空集合必须使用 set()函数  
   使用 frozenset() 创建的集合不可以修改
- 生成

```python
A = {123, "123", ("123", 123)}
B = set("123py")  # 1,2,3,p,y
```

- 操作符

  - 并  
    `S|T` 返回一个新的集合 S 和 T 中的所有元素
  - 差  
    `S-T` 返回一个新的集合 包括 S 中 T 没有的元素
  - 交  
    `S&T` 返回一个新的集合 同时再 S 和 T 中的元素
  - 补  
    `S^T` 返回一个新的集合 包含 S 和 T 中不相同的元素
  - `S<=T` 或 `S<T` 返回 `boolen` 判断 S 和 T 的子集关系
  - `S>=T` 或 `S>T` 返回 `boolen` 判断 S 和 T 的包含关系 **_增强操作符_**  
    以上 4 中操作符可以像 n+=1 这种操作方式使用

- 集合的处理方法
  - s.add(x)  
    在集合中 添加元素
  - s.discard(x)  
    移除 S 中元素 X 没有不报错
  - s.remove(x)  
    从集合中移除 没有则产生异常
  - s.clear()  
    清空集合
  - s.pop()  
    从集合中随机删除一个元素，若 S 为空则产生异常
  - s.copy  
    返回一个和集合相同的集合
  - len(s)  
    返回集合中元素的个数
  - `x in S`  
    判断 S 中元素 X x 在集合中则返回 TRUE 否则 False
  - `X not in S`  
    判断 S 中元素 X，X 在集合中 则返回 false 否则 true
  - set(x)  
    将其它类型转变为集合类型
- 应用  
  1.判断包含关系 2.数据去重---最重要的一点

### 序列

- 定义  
   具有先后关系的一组元素，包括：`字符串` `元组` `列表`  
   元素具有一个序列号
- 操作符

  | 操作       | 说明        |
  | ---------- | ----------- |
  | x in s     | 存在 true   |
  | x not in s | 不存在 true |
  | s+t        | 连接        |
  | s*n n*s    | 复制序列    |
  | s[i]       | 获取值      |
  | s[i:j]     | 切片        |
  | s[i:j:k]   | 切片 步长   |

- 序列中的通用函数

  | 函数         | 说明                         |
  | ------------ | ---------------------------- |
  | len(s)       | s 的长度                     |
  | min(s)       | s 中的最小值 需要可以比较    |
  | max(s)       | s 中的最大值 需要可以比较    |
  | index(x)     | x 第一次出现的索引           |
  | index(x,i,j) | 从 i 到 j x 第一次出现的索引 |
  | count(x)     | x 出现的总次数               |

### 字典

- 定义  
   字典是以键值对的方式存储的无序的一种信息存储方式，json 对象写法  
   映射关系  
   使用{}或者 dict() 函数创建字典数据类型 键值之间用:隔开  
   值可以取任何数据类型，但键必须是不可变的，如字符串，数字或元组。
- 方法
  - dict.items()  
     以列表中存放元组的形式返回一个元组([(),(),()])
  - dict.keys()  
     获取字典中的键 返回字典的 key 类型 不能用下标访问 只能用 for in 遍历
  - dict.values()  
     获取字典中的值的列表 返回字典的 value 类型 不能用下标访问
  - dict.pop(k,<default>)  
     获取并且删除 k 如果不存在则返回 default
  - dict.popitem()  
     随机从字典中取出键值对，以元组形式返回
  - dict.clear()  
     删除所有键值对
  - dict.fromkeys(seq[,val])  
     使用序列中的值作为字典的键，可以给出所有键的默认值 val,没有给出则默认为 None
  - dict.get(key,default=val)  
     获取字典中指定键的值 不存在则返回默认值
  - dict.setdefault(key,default=val)  
     获取字典中制定的值，如果不存在则添加键并且设置为 val
  - dict.updata(dic)  
     将 dic 中的键值对复制到 dict 里面
- 函数
  - len(dict)  
     返回字典中键值对的个数
  - del dict[key]  
     删除 dict 中键 Key 的数据值 后面跟字典**删除**整个字典
  - cmp(dict1,dict2)  
     比较两个字典
  - str(dict)  
     输出字典可打印的字符串表示
  - `k in d`  
     判断 k 是否在字典 d 中 在为 true
- 新增属性

```python
dict['item']='value' #字典中新增一个新的元素，并且给他赋值 如果 item 存在于字典中，那么修改它的值
```

- 修改

```python
# 修改键的值
dict['newItem'] = dict['oldItem']
# 删除值
del dict['oldItem']
```

- 嵌套  
  字典、列表可以嵌套
- 运算
  - 并集

```python
dic = set(ls1) | set(ls2) # 将两个列表转换位字典并且做并集操作
dic = set(ls1).union(set(ls2))
dic1 & dic2
intersection()
```

- 并集

```python
diff = dic1 - dic2
difference()
```

- 对称差集

```python
symmetric_difference()
```

## 程序结构

### 单分支结构

```python
# <!--- 注意 --->
# 0 '' None 都会自动转换为 False，其他为 True
if condition:
    <code>

# 紧凑形式
print("are you ok?{}",format("yes" if condition else "no"))

# 简写形式
c = a if a > b else b
c = [b, a] [a > b]
c = (a > b and a or b)
c = (a > b and [a] or [b])[0]
```

### 多分支结构

```python
# 形式
if condition:
    <code>
elif condition:
    <code>
- else
    <code>
```

### 条件判断

```python
# 常规运算符   < <= > >= == !=
# and  两个都真才是真 如果作为两个数字的运算符返回最后一个数字
# or 两个中的一个为真都是真，如果作为两个数字的运算符返回前一个数字
# not 逆运算
```

### 异常处理

```python
# 如果 try 语句出错，那么运行 except 部分代码
# val 在 python 中为一个变量，只会在程序出现指定的错误的时候才会执行执行的代码
try:
    <code>
except [val]:
    <code>
```

### 异常处理高级使用

```python
# 如果语句没有出错，那么 else 分支将会执行，finally 分支无论怎样都会执行
try:
    <code>
except:
    <code>
else:
    <code>
finally:
    <code>
```

### 循环

```python
# 遍历循环
for <变量> in <变量结构>:
    <code>
# 计数循环
# 字符串遍历
# 文件遍历
# 遍历文件的每一行
for line in file:
    <code>
#  无限循环   反复执行语句块，直到条件为 False
while condition:
    <code>

# 循环控制保留字
- break continue

# 循环的高级扩展
# 当循环没有被 break 退出的时候，可以执行 else 里面的代码
for <变量> in <变量体>:
    <code>
else:
    <code>

while condition:
    <code>
else:
    <code>
```

## 函数

- 注意  
  函数必须在使用之前定义，函数内部使用全局变量需要使用 global 关键字，如果不适用这个关键字在尝试给这个变量赋值的时候会自动创建一个局部变量----->不建议函数内部使用全局变量  
  在嵌套函数中，内部函数使用外部函数中的变量需要使用 nolocal 关键字，表明不是该函数的变量，需要在外部函数去寻找
- 函数定义

```python
def <函数名>(参数，0 个或者多个):
    <函数体>
    return <返回值>
```

- 可选参数

```python
def <函数名>(非可选参数,可选参数):
    <函数体>
    return (返回值)
# 可选参数必须放在非可选参数后面，同时给出默认值

```

- 可变参数传递

```python
def <函数名>(确定参数，*a):
    <函数体>
    return (返回值)
# *a 代表可变参数，也可以是任意可命名符号,其中以元组的方式存放变量
```

- 可变关键字参数

```python
def abc(arg1,arg2,**kwargs):
-     pass

# 调用
# 函数中最后一个形参有两个*值对参数，存放在 kwargs 里面，可以使用字典操作其中的元素
abc(1,2,value1=1,value2=3,value3=2)
```

- 参数传递的两种方式
  - 按位置传递
  - 形参与实参一一位置对应
  - 按名称传递
  - 按照函数定义的时候的形参的名字传递参数，直接给函数的形参赋值
- 函数的返回值

```python
# 函数的返回值可以有也可以没有
# 可以有一个或者多个 多个参数之间用逗号隔开
def foo():
    return 1, 2, 3, 4
```

- 局部变量
  函数内部的变量，函数执行过后，局部变量释放  
  即使局部变量的变量名与局部变量名相同，它们也不相同  
  函数内部使用的组合数据类型未在函数内部创建，则使用全局变量
- 全局变量
  函数外部定义的变量  
  在函数内部使用全局变量，使用关键字 global
- lambda 函数  
  一种匿名函数，使用 lambda 保留字 lambda 申明
  定义一种简单的，只有一行表达式的函数
  - 定义

```python
# <函数名> = lambda <参数>:<表达式>
# 例：
fn = lambda x, y: x + y
fn(1, 2)
# 这个函数做为一个加法函数，返回两个参数的和
```

- 默认参数  
  在调用函数的时候没有给出指定的参数的时候会使用默认参数

```python
def asd(name="name"):
-     pass
```

- 位置参数  
   在函数的参数不止一个的时候，需要将传递的参数按照顺序传递

- 关键字参数

```python
# 在调用函数的时候，传参列表中指定每一个形参需要传递的参数，例：
def asd(x1,x2,x3,x4):
-     pass
# 调用
asd(x1=1,x3=2,x2=4,x4=3)
```

## 类

- 相关术语  
  面向对象 OOP  
  类 class  
  属性 attribute  
  行为 behavior  
  方法 method  
  对象 object
- 定义类  
  类名采用大驼峰命名规则（推荐） 一般类被单独放置在一个文件中，在需要的时候导入即可  
  前后都有两个下划线的函数是内置在 python 中的具有特殊用途的函数  
  定义类第一件事就是定义 \***\*init\*\*** 函数 ，它在对象被创建的时候就会立即调用为需要的参数设置初始值, 实际是 `new __init__`函数中的 self 代指产生的对象 如同 js 中的 this 指代当前对象，
  在这个类中的所有函数都需要 self 对象作为第一个参数，这样他们才可以访问类中的属性  
  self 可以让你访问到调用对象的属性,类中的其它方法可以是任意的函数类型
- 魔法方法

  重写以下方法可以修改 python 内部的运算规则

  | 方法                      | 说明                                                               |
  | ------------------------- | ------------------------------------------------------------------ |
  | **new**                   | 在实例化对象的时候第一个调用传入参数 这个类 其它参数传入**init**() |
  | **init**                  | 实例化对象之后，初始化对象的属性                                   |
  | **del**                   | 销毁对象、变量                                                     |
  | **add**(self, other)      | 定义加法的行为                                                     |
  | **sub**(self, other)      | 定义减法的行为                                                     |
  | **mul**(self, other)      | 定义乘法的行为                                                     |
  | **truediv**(self, other)  | 定义真除法的行为 保留小数                                          |
  | **floordiv**(self, other) | 定义整除的行为                                                     |
  | **mod**(self, other)      | 取模                                                               |
  | **divmod**(self, other)   | divmod()函数调用的时候                                             |
  | **pow**(self, other)      | power()被调用或者                                                  |
  | **lshift**(self, other)   | 左位移 <<                                                          |
  | **rshift**(self, other)   | 右位移 >>                                                          |
  | **and**(self, other)      | 按位与                                                             |
  | **xor**(self, other)      | 按位异或                                                           |
  | **or**(self, other)       | 按位或                                                             |
  | **slots**=()              | 可以指定类中对象限定的绑定属性                                     |

- 类的写法

```python
class ClassName:
def __init__(self):
-     pass
def fn(self, x = 0, y = 1, z = 1):
-     pass
```

- 利用类创建对象

```python
myObject = ClassName()
myObject.x = 1
# 给对象的属性赋值 如果没有这个属性就增加这个属性
# 同一个类创建的不同对象是相互独立的
```

- 自定义对象属性

```python
def __init__(self, x = 0, y = 0):
-     pass
obj = ClassName(1, 2)
# 当对象的实例化函数中没有包括某个类的成员变量，修改类的成员变量的时候会修改它的值 eg：
class M():
    count = 0
a = M()
b = M()
a.count = 10 # 10
M.count = 100
print(a.count, b.count) # 10 100
```

- 私有属性  
  使用双下划线开头的变量 如 ： `__name` 只能在类的内部使用 self 使用 不能在类的外部使用  
  这只是约定俗成的，并没有真正意义上的私有属性
- 静态方法

```python
class A():
    @classmethod # 使用如同 JAVA 的注解
    def foo():
-         pass
```

- 类与类的关系

  | 关系  | 说明                           |
  | ----- | ------------------------------ |
  | is a  | 继承关系                       |
  | has a | 关联关系，两个同时存在同时消亡 |
  | use a | 依赖关系 比如导入              |

- 继承

```python
# 如同 java 单向继承，子类可以重写、继承父类的所有的方法、属性 可以多重继承，给定多个参数即可 python 的 mixin 编程模式
class NewClass(ParentClass[,ParentClass]):
-     pass
# 在子类的括号中填写需要继承的父类的名字即可继承
# 子类创建是调用子类的 __init__() 函数
# 如果需要调用父类的 __init__() 函数
super().__init__()
# super()函数会自动的将 self 传递到父类 也可以使用如下方式
# oldClass.__init__(self, arg1, arg2)
```

- 模块  
  将类存储在一个单独的文件中的时候成为一个模块，一个模块可以包含任意多的类，模块名全小写  
  可以将函数存放在模块中，在其它文件中导入该函数
- 绑定  
  方法必须要有实例化对象才能调用
- 工厂函数  
  产生实例对象的函数
- 类中的 BIF

  - issubclass(class1,class)
    1. 如果 class1 是 class 的一个子类则返回 true 否则 False
    2. 一个类是自身的子类
    3. class 可以是一个类组成的元组 4.其它情况下报错
  - isinstance(obj,class)
    1. 如果 obj 是 class 的一个实例则返回 true 否则 false
    2. obj 不是对象类型则永远返回 false
    3. class 可以是一个类组成的元组，只要 obj 是其中任意 一个的实例对象则返回 true
    4. class 如果不是类或则类组成的元组则报错
  - hasattr(obj,attr)  
    判断给定的对象 obj 是否由 attr 这个属性
  - getattr(obj,attr[,default=""])  
    返回 obj 的 attr 属性，如果没有这个属性则返回 default 属性，如果没有这个属性且 default 属性没有指定的话报错
  - setattr(obj,attr,value)  
    对象 obj 如果没有 attr 属性，则添加这个属性并且添加为 value，如果有则设置为 value
  - delattr(obj,attr)  
    删除对象 obj 的 attr 属性，不存在则报异常
  - property(fget=None,fset=None,fdel=None,doc=None)  
    python 描述符，返回一个可以设置属性的属性

## 异常

```python
try except else finally 语句
raise 手动触发一个异常
raise ZerDivisionError("除数不能为 0")
# 带参数的话，会在异常捕获的时候提示该信息
try finally # 语句：无论程序发生生么异常都会继续执行后面的语句
with/as # 上下文管理器
with expression [as variable]:
-     pass
with block
# 上下文管理器必须包含 __enter__() __exit__()
# __enter__()自动调用 如果存在 as 语句则将返回值存放在 as 后面的变量，没有就丢弃
# 如果 with 语句发生异常，则执行 __exit__(type,value,traceback)方法，
# 参数和 sys.exc.info()（python 内置函数）返回相同的值，如果这个方法返回了一个 false
# 异常被重新抛出，可以在 with 语句外面捕获
```

- 常见异常：

  | 异常             | 说明                           |
  | ---------------- | ------------------------------ |
  | AssertionError   | 断言异常                       |
  | AttributeError   | 尝试访问位置的对象属性         |
  | IndexError       | 超出索引                       |
  | KeyError         | 从字典中查找一个不存在的关键字 |
  | NameError        | 尝试访问一个不存在的变量       |
  | OSError          | 操作系统的异常                 |
  | SyntaxError      | python 的语法错误              |
  | TypeError        | 类型错误                       |
  | ZerDivisionError | 除数为零                       |

## 文件

- 定义
  文件是存储在辅助存储器上的数据序列 数据的抽象和集合  
  二进制文件 文本文件 （所有文件都以二进制方式存储）
- 文本文件  
  采用单一编码组成的文件
- 二进制文件  
  直接由 bit 0 和 1 没有统一的字符编码
- 打开文件

```python
# 使用open函数打开文件 获得文件句柄
fs = open(path, mod, buffering = "-1", encoding = None, errors = None, newline = None, closefd = True, opener = None)
# path 打开文件的路径
# mod 打开的模式
  # r 只读模式 默认模式
  # w 写文件，如果文件不存在则创建，如果存在则覆盖
  # x 如果不存在则创建，如果存在则返回 FileExistError
  # a 追加写模式 如果文件不存在则创建，存在则追加到最后
  # t 以文本模式打开 默认
  # b 以二进制模式打开文件 + r/w/x/a 一起使用
  # a+ 追加写，读写
```

- 读文件

```python
# 使用文件句柄的方法
fs.read(size)
# 读入全部的内容，size 可选指定打开的长度
fs.readline(size)
# 从文件中读入一行，size 可选读取指定行的内容
fs.readlines(hint)
# -1 从文件中读入所有行，hint 表示读入的行数，
# 等同于：
for line in open(file):
    print(line)
```

- 写文件

```python
# 向文件写入字符串或者字节流
fs.write(s)
# 将元素全部为字符串的列表写入到文件 没有空格换行
fs.writelines(lines)
# 改变当前文件操作的指针位置
fs.seek(offset,from)
# offset 偏移的字节量
# from 取值 0 1 2
    # 0 文件开头
    # 1 当前文职
    # 2 文件结尾

# 获取当前指针位置
fs.tell()
```

- 全文本遍历

```python
# 使用 read 函数读取全部文件, 当文件很大的时候会耗费很大的时间
fs.read(size) # 指定长度读取，分批操作
for line in file.readlines(): # 全部读入 逐行处理 列表
-     pass
for line in file: # 分行读入，逐行处理
-     pass
```

- 文件关闭

```python
# 使用文件句柄关闭文件
fs.close()
```

- 一维数据
  - 列表、集合等
  - 如果数据有序---列表
  - 没有顺序--集合
  - 使用 其它符号分隔如 `,` 也可以采用其它可能不会出现的符号
- 二维数据  
  由多个一维数据组成  
  CSV 文件格式 Comma-Separated value  
  国际通用的以逗号分隔的文件格式  
  约定 缺失的数据保留逗号 逗号用英文逗号  
  如果文件中的数据中的逗号 可以使用引号括起来或者使用转义字符  
  检索：

```python
ls[row][col] # 索引行列
```

- 保存多种数据类型  
  Python 文件读取之后为字符串
  - pickling 模块

```python
# 可任意将 python 中的各种数据类型保存为二进制的形式，读取的时候保持他们的数据类型，同时因为是二进制形式，所以后缀可以随便改，推荐 .pkl
pickl.dump(val,fileHead)
# 将数据 val 保存到 fileHead 文件句柄中
pickl.load(fileHead)
# 将数据从 fileHead 文件句柄中读取出来，并且保存为他们的原始形式
```

- 处理 JSON 文件
  使用内置的 JSON 库处理 JSON 文件，该库包含 4 个方法

  | 方法  | 说明                                       |
  | ----- | ------------------------------------------ |
  | dump  | 将 Python 对象按照 JSON 格式序列化到文件中 |
  | dumps | 将 Python 对象处理成 JSON 格式的字符串     |
  | load  | 将文件中的 JSON 数据反序列化成对象         |
  | loads | 将字符串的内容反序列化成 Python 对象       |

- 正则表达式

| 元字符 | 说明                                            |
| ------ | ----------------------------------------------- |
| .      | 匹配一个非换行的字符                            |
| \b     | 单词的开头或结尾，也就是单词的分界处            |
| \B     | 匹配不是单词的开头或者结束的位置                |
| \s     | 匹配任意空白字符 包括空格、制表符、中文全角空格 |
| \S     | 匹配任意非空白字符                              |
| \w     | 匹配字母数字或者下划线、汉字                    |
| \W     | 匹配非字母数字下划线                            |
| \d     | 匹配一个数字 等同[0-9]                          |
| \D     | 匹配一个非字符                                  |
| ^      | 匹配开始                                        |
| \$     | 匹配字符串的结束                                |
| [str]  | 匹配其中一个                                    |
| [^str] | 匹配除了这里面的字符                            |

- 匹配次数

  | 字符  | 说明                   |
  | ----- | ---------------------- |
  | \*    | 匹配前一个字符任意次数 |
  | +     | 匹配一次或者多次       |
  | ?     | 匹配一次或者 0 次      |
  | {n}   | 匹配 N 次              |
  | {n,}  | 匹配 N 次以上          |
  | {n,m} | 匹配 N 到 M 次         |

- 分支条件  
  `|两边的正则都可以匹配，先匹配左边的，如果匹配到就不匹配右边的了
  但是在使用条件分支的时候必须确保大范围|中范围|小范围  
  如果下的范围在前面的话会导致后面包含它的正则表达式无法匹配

- 向后引用

  - 分组  
    在正则表达式中使用()包含的内容作为一个分组
  - 向后引用  
    `\1` 代表的是分组 `1` 匹配的文本，它的后面可以衔接匹配次数

  - 分组：

    - 捕获

    | 标识        | 说明                                                              |
    | ----------- | ----------------------------------------------------------------- |
    | (exp)       | 匹配 exp,捕获到的文本自动命名到组                                 |
    | (?<name>exp | ) 匹配 exp，并且捕获文本到命名为 name 的组里面也可以 (?'name'exp) |
    | <?:exp)     | 匹配 exp，但是不捕获文本，也不为此分配组号                        |

    - 零宽断言

    | 标识     | 说明                        |
    | -------- | --------------------------- |
    | (?=exp)  | 匹配 exp 前面的位置         |
    | (?!exp)  | 匹配后面不是跟的 exp 的位置 |
    | (?<!exp) | 匹配前面不是 exp 的位置     |

    - 注释  
      `(?@comment)` 这类型的分组不会对正则表达式产生任何影响，用于提供注释

    - 说明  
      断言用来声明一个应该为真的事实，只有断言为真的时候才会继续匹配
      - `(?=exp）`  
        也叫 零宽度正预测先行断言---断言出现的位置的后面能匹配表达式 exp  
        eg： `\b\w+(?=ing)\b` 这个正则表达式用于匹配以 ing 为结尾的单词的前面部分
      - `(?<=exp)`  
         也叫 零宽度正回顾后发断言---断言自身出现的位置的前面能匹配表达式 exp  
        eg:`(?<=\nre)\w+\b` 他会匹配 re 开头的单词的后半部分，除去 re 的部分

- 贪婪/非贪婪模式

  - `*`代表的是贪婪模式，在该模式下会尽可能多的匹配
  - `?`为非贪婪模式，在该模式下会尽可能少的匹配

  二者同时使用看下表

  | 标识   | 说明                         |
  | ------ | ---------------------------- |
  | \*?    | 重复任意次，尽可能少         |
  | +？    | 重复一次或很多次，尽可能少   |
  | ??     | 重复 0 次或者 1 次，尽可能少 |
  | {n,m}? | 重复 n 到 m 次，尽可能少     |
  | {n,}   | 重复 n 次以上，尽可能少      |

- 处理选项

  | 标识                    | 说明                                                     |
  | ----------------------- | -------------------------------------------------------- |
  | IgnoreCase              | 区分大小写                                               |
  | Multiline               | 多行模式，使得^\$匹配的是\n 之后以及之前而不是实际的一行 |
  | Singleline              | 单行模式，更改.的含义，使得它可以匹配换行符              |
  | IgnorePatternWhitespace | 忽略表达式中的非转义空白并启用由#标记的注释              |
  | ExplicitCapture         | 仅捕获已近被显示明明的组                                 |

```python
# 匹配某一字符串出现 n 次
r"(str)\1{n-1}"
# 如匹配“我的”10 次
r"(我的)\1{9}"
```

## 标准库

### turtle 库

- 默认正方向是朝右的，坐标轴画布正中心为(0,0),右 x↑，上上
- 绝对（角度）坐标体系、相对（角度）坐标体系
- 方法
  - setup(arg1,arg2,arg3,arg4)
    非必要函数，仅当需要调整窗体位置、大小的时候才需要修改它的值
    - arg1、arg2:画布的大小，不能省略
    - arg3、arg4:画布出现在屏幕上的位置，可以省略，缺省居中
  - penup()  
    拿起画笔、别名 turtle.pu()
  - pendown()  
    放下画笔（可以画画）别名 turtle.pd()
  - pensize()  
    画笔的粗细 别名 turtle.width()
  - pencolor()  
    画笔颜色 别名 turtle.color() 可以直接使用单词，也可以是用 rgb 小数整数模式、元组值
  - circle(r，angle)  
    绘制角度，默认在海龟的左侧 r 距离的位置，逆时针绘制 angle 度 默认 360°，r 为负数的时候，顺时针绘制
  - done()  
    保持画布
  - reset()  
    重置画布
  - clear()  
    清除画布上面的所有内容，不重置海龟位置
  - forward()  
    控制海龟向前走 别名 fd() 整数向前，负数向后
  - colormode(mode)  
    1.0:RGB 小数模式(0-1)
    255:RGB 整数模式(0-255)
  - setheading(angle)  
    控制海龟的行进方向 别名 seth() 将海龟的方向设置为绝对坐标系的角度
  - left() right()  
    控制海龟的行进方向，相对与自身的位置
  - hideturtle()  
    隐藏海龟
  - wirte("内容",字体大小,"样式")  
    使用海龟书写字符  
    `turtle.write("hello",font=("微软雅黑",40,type))`

### math 库

- math.ceil(float)  
  向上取整
- math.floor()  
  向下取整
- math.copysign(x,y)  
  把 y 的正负号加到 x 前面
- math.sin(x)  
  求 x 的正弦值(x 为弧度)
- math.cos(anlge)  
  求余弦，但是 angle 必须是弧度
- math.tan(x)  
  返回 x 的正切值(x 为弧度)
- math.degrees(angle)  
  将 angle 从弧度转换为角度
- math.radians(x)  
  把角度转换为弧度
- math.e  
  表示一个常量 2.718281828459045
- math.exp(x)  
  返回 - math.e 的 x 次方
- math.expm1(x)  
  返回 - math.e 的 x 次方-1
- math.fabs(x)  
  返回绝对值
- math.factorial(x)  
  取 x 的阶乘的值
- math.fmod(x,y)  
  x/y 浮点数
- math.frexp()  
  返回一个元组
- math.fsum(x)  
  对迭代器里面的元素求和操作
- math.gcd(x,y)  
  返回 x,y 的最大公约数
- math.hypot(x,y)  
  得到 x^2+y^2 的平方根
- math.isfinite(x)  
  如果 x 是无穷大则返回 True，否在返回 False
- math.isinf(x)  
  如果 x 是无穷大则返回 False，否在返回 True
- math.isnan(x)  
  如果 x 不是数字则返回 True 否则返回 False
- math.ldexp(x,y)  
  `x * (x ** y)`
- math.log(x,base="e")  
  返回 x 的自然对数，如果 base！=e 的 返回 base 的对数
- math.log10()  
  返回以 10 为底的对数
- math.log1p(x)  
  返回 x+1 的自然对数
- math.log2()  
  返回以 2 为底的对数
- math.modf(x)  
  返回以 x 的小数部分和整数部分组成的元组
- math.pi  
  数字常量，圆周率
- math.pow(x, y)  
  `x**y`
- math.radians(x)  
  把角度转换为弧度
- math.sqrt(x)  
  求平方根
- math.trunc(x)  
  返回 x 的整数部分

### time 库

- 可以表达计算机时间
- 时间获取
  - time()  
    获取当前时间的时间戳，计算机内部时间，一个很长的浮点数
  - ctime()  
    获取当前时间，方便人类可读
  - gmtime()  
    获取当前时间，方便计算机可读
- 时间格式化
  `strftime(tpl, t)`

  - tpl 表示使用的格式 ，t 需要格式化的时间

    | 格式化占位符 | 说明                 |
    | ------------ | -------------------- |
    | `%Y`         | 年份 0000-9999       |
    | `%m`         | 月份 01-12           |
    | `%B`         | 月份的名称           |
    | `%b`         | 月份的名称的简写     |
    | `%d`         | 日期                 |
    | `%A`         | 星期                 |
    | `%a`         | 星期 缩写            |
    | `%H`         | 24 小时值时间        |
    | `%h`         | 12 小时值的时间      |
    | `%p`         | 上午或者下午的标志符 |
    | `%M`         | 分钟                 |
    | `%S`         | 秒                   |

  - strptime(str,tpl)  
    将字符串变成时间，strftime 的逆过程  
    str 需要格式化的字符串，tpl 格式化的形式 同上

- 程序计时
  - sleep(s)  
    将程序休眠 s 秒
  - perf_counter()  
    返回一个 cpu 级别的精确时间计数值

### random 库(标准库)

- 伪随机数：采用梅森旋转算法生成的伪随机序列中的元素
  基本随机函数
- 初始化随机数种子，默认为系统时间钟，如果自定义的随机数种子  
  第二次使用相同的种子将会的到相同的结果  
  `seed()`
- 生成一个`[0-1)`之间的随机小数  
  `random()`
- 生成 a 到 b 之间的整数  
  `randint(a,b)`
- 生成一个 k bit 长度的值  
  `getrandbits(k)`
- 生成一个 a 到 b 之间的随机小数  
  `uniform(a,b)`
- 生成一个从 m 到 n 之间的步长为 K 的随机整数  
  `randrange(m,n,k)`
- 从列表中随机选取一个元素，重新生成  
  `choice(seq)`
- 重新排列序列  
  `shuffle(seq)`

### OS 库

- python 提供的标准库，基于操作系统的交互功能  
   常用于文件操作、进程管理、环境参数等
- os 常用函数
  - os.path.abspath(path)  
    返回 path 指定的绝对路径
  - os.path.normpath(path)  
    统一使用\\路径分隔符
  - os.path.relpath(path)  
    返回当前程序与文件之间的相对路径
  - os.path.dirpath(path)  
    返回 path 的目录路径
  - os.path.basename(path)  
    返回文件名
  - os.path.join(path,\*path)  
    组合路径，返回一个 path
  - os.path.exists(path)  
    文件和路径是否存在 存在返回 true
  - os.path.isfile(path)  
    path 指向的是否为一个文件 文件则为 true
  - os.path.isdir(path)  
    path 是否指向的是路径 是路径则返回 tru
  - os.path.getatime(path)  
    返回文件或者目录的上次访问时间
  - os.path.getmtime(path)  
    返回文件或者目录的最近一次修改时间
  - os.path.getctime(path)  
    返回文件或者目录的创建时间
  - os.path.getsize(path)  
    返回文件的大小
    --os 库的进程管理
    执行其它的程序或者命令
  - os.system ("path")  
    返回 0 则正确运行
    --环境参数
  - os.chdir(path)  
    修改当前程序操作的路径
  - os.getcwd()  
    返回当前程序的路径
  - os.getlogin()  
    获取当前登陆的用户名称
  - os.cpu_count()  
    获取系统的 CPU 数量信息
  - os.urandom(n)  
    用于获取 n 个字节的随机字符串，常用于加解密

### sys 库

- sys 常用方法
  - sys.argv()  
    命令行参数 List，第一个元素是程序本身路径
  - sys.modules.keys()  
    返回所有已经导入的模块列表
  - sys.exc_info()  
    获取当前正在处理的异常类,exc_type、exc_value、exc_traceback 当前处理的异常详细信息
  - sys.exit(n)  
    退出程序，正常退出时 exit(0)
  - sys.hexversion()  
    获取 Python 解释程序的版本值，16 进制格式如：0x020403F0
  - sys.version()  
    获取 Python 解释程序的版本信息
  - sys.maxint()  
    最大的 Int 值
  - sys.maxunicode()  
    最大的 Unicode 值
  - sys.modules()  
    返回系统导入的模块字段，key 是模块名，value 是模块
  - sys.path()  
    返回模块的搜索路径，初始化时使用 PYTHONPATH 环境变量的值
  - sys.platform()  
    返回操作系统平台名称
  - sys.stdout()  
    标准输出
  - sys.stdin()  
    标准输入
  - sys.stderr()  
    错误输出
  - sys.exc_clear()  
    用来清除当前线程所出现的当前的或最近的错误信息
  - sys.exec_prefix()  
    返回平台独立的 python 文件安装的位置
  - sys.byteorder()  
    本地字节规则的指示器，big-endian 平台的值是'big',little-endian 平台的值是'little'
  - sys.copyright()  
    记录 python 版权相关的东西
  - sys.api_version()  
    解释器的 C 的 API 版本

## 三方库

### pyinstaller 库

- 将.py 的文件转为 windows mac linux 可以直接安装运行的文件
- 使用

```shell
# 使用 CMD 命令行:
pyinstaller -F <文件名.py>
# 将会生成——pycache、build、dist 三个文件夹
```

- 参数

| 参数         | 说明                             |
| ------------ | -------------------------------- |
| -h           | 查看帮助                         |
| --clean      | 删除打包过程中生成的临时文件     |
| -D,--dir     | 默认值，生成 dist 文件夹         |
| -F,--file    | 在 dist 文件中生成独立的打包文件 |
| -i<图标.ico> | 执行打包文件使用的图标文件       |

### jieba 库

- 用于中文分词的第三方库
- 分词模式

  - 精确模式  
    把文中精确的切分开，不存在冗余单词
  - 全模式  
    把文本中所有可能出现的词语都扫描出来
  - 搜索引擎模式  
    在精确模式的基础上将长的词语再次切分

    --常用函数
    --切词
    jieba.lcut("str"<,cut_all=False>)
    精确模式，返回一个列表 ,cut_all 默认为 false 设置为 true 的时候为全模式
    --新增词
    jieba.add_word("str)
    向分词词库中添加新的词

### wordcloud 库

第三方 标签云  
包含一个 WordCloud 对象  
可以根据词语出现的次数绘制词云

- 使用

```python
wc = WordCloud(<args>)
arg1 = w # 宽 默认 400
arg2 = h # 高 默认 200
min_font_size = 最小字号
max_font_size = 最大字号
font_step = 字体大小修改间隔
font_path = 自定义字体 可以是字体文件
max_words = 最多出现的词语数量
stop_words = 词黑名单
# msak 指定词云形状 默认为矩形
# background_color 默认黑色
```

- 方法  
  `wc.generate(txt)`
- 加载文本
  `wc.to_file(fileName)`
- 将词云输出到文件
  1. 配置词云
  2. 加载文件
  3. 输出图片

### python 第三方库安装

[python 包管理网站](https://pypi.org/)

```shell
# 例： 区块链 blockchain
# 搜索 第三方库
# 安装：
# cmd:
pip install <-u> <第三方库> -u 升级 可选
pip download <第三方库> 下载
pip show <第三方库> 列出第三方库的详细信息
pip search <第三方库> 用于搜索第三方库
pip list 用于列出第三方库
# 第三方库的集成安装
# anaconda 近 800 个第三方库
# 主要用于数据分析数据、展示
# 第三方库的文件安装
# 用于安装第三方库只能下载后编译才能安装的
# 先下载再安装
# http://www.ifd.uci.edu/~gohlke/pythonlibs
# 包含了 win 环境能下载不能安装的第三方库
```

### 其它第三方库

- numpy  
  n 维数据标识运算
- matplotlib  
  二维数据可视化
- PIL  
  图像处理
- Scikit-Learn  
  机器学习和数据挖掘
- Requests  
  http 协议访问网络爬虫
- Beautiful Soup  
  html、xml 解析器
- Wheel  
  python 第三方库文件打包工具
- Django  
  web 开发框架
- Flask  
  轻量的 Web 开发框架
- WeRoBot  
  微信机器人开发框架
- Sympy  
  数学符号计算框架
- Pandas  
  高效数据分析和计算
- Re  
  正则表达式库
- decimal  
  用于 python 小数的精确计算

## python 学习方向

### 从数据而可视化到人工智能

数据标识->数据清洗->数据统计->数据可视化->数据挖掘->人工智能

- 数据分析：
  - numpy：C 语言编写 python 接口
  - pandas: 数据分析高层次应用库
- 数据可视化：
  - matplotlib：基于 numpy 开发 二位数据可视化功能库
  - 通过 matplotlib.pyplot 字库调用各种可视化效果
- 文本处理:
  - pyPDF2:用来处理 PDF 文件
  - NLTK：自然语言文本处理
- 机器学习：

  - Scikit-Learn:机器学习方法工具集
  - tensorflow: 机器学习计算框架 tensorflow.org
  - MXNet:基于神经网路的深度学习计算框架

- 网络爬虫库
- - Requests  
    简单好用的网络爬虫
- - Scrapy  
    优秀的网络爬虫 框架 支持批量、定时
- - pyspider  
    强大的 web 页面爬去系统

- 信息提取
- - Beautiful Soup  
    html 和 xml 解析库
- - Re  
    正则表达手机的解析和处理的功能库 主要的标准库
- - python-Goose  
    抓取文章类型 web 页面的功能库

### web 网站开发

- MTV 设计模式
  适合专业的网站设计人员 大
- - pyramid  
    适用于中型的 web 应用框架 中
- - flask  
    简单、小规模的应用开发框架 小

### 进阶学习

- python 进阶语法 面向对象编程
- python 高级语法 pythonic
- Re 库
- GUI
  - [easygui](https://blog.csdn.net/wanbin6470398/article/details/80420896)
- Tkinter
