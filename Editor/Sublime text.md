# 2017.6.10     sublime text编辑器笔记


# 安装
[Sublime text3下载](http://www.sublimetext.com/3)    
傻瓜式安装过程



# linux Vi编辑器
1.  开启Vi功能  安装插件  vintage
2.  Vi编辑模式
    1.  输入模式（竖着光标）
        *   编辑、修改、删除内容
    2.  命令模式（横着光标）
        *   快捷键操作
        *   命令操作
    3.  末行模式
        *   w      -保存不退出
        *   wq|x   -保存后退出
        *   q!     -强制退出不保存
3.  `Ctrl+Shift+T` 快速关闭标签
4.  字体
    * 增大字体  `Ctrl+=`
    * 减小字体  `Ctrl+Shift+=`
5.  输入模式切换
    1.  修改默认打开的编辑模式
        *   修改`packages\vintage`中的`Perferences.sublime-setting`中`vintage_start_in_command_mode:true`
    2. 命令-->末行模式
        `Shift+:`
    3. 命令-->输入模式
       *   i:在选取的目标的前面插入
       *   o:在选取的目标的下一行输入
       *   s:在选取的目标的位置输入（删除当前字符）
       *   a:在选取的目标的后面输入
       *   I：行首输入
       *   O：上一行输入
       *   S：删除整行
       *   A：行尾输入
    4.  输入-->命令模式
        `Esc`
    5.  末行-->命令模式
        `Esc`*2
6.  Vi编辑器常用命令
    1.  `Ctrl+LB`多行选择
    2.  块移动
        *   右  选择后`Tab`
        *   左  选择后`Shift+Tab`
    3.  光标移动
        *   H   左
        *   J   下
        *   K   上
        *   L   右
    4.  删除
        *   dd      删除本行
        *   x       删除当前字符
        *   r       替换
        *   u / `Ctrl+z`   撤销
        *   `Ctrl+y`    恢复
        *   dg      从当前行删除到最后一行
        *   dw      删除当前单词，中文一整段话认为是一个单词
        *   d^      从当前字符删除到本行行首
        *   d$      从当前字符删除到本行行末
        *   d+`Number`+g    从当前行删除到`Number`行
        *   `Number`+dd     从本行开始删除`Number`行
    5.  跳转
        *   `Shift+G`       跳转到最后一行
        *   G               跳转到第一行
        *   `Number`+G      跳转到第`Number`行 
    6.  复制
        *   yy      复制
        *   `Number`+yy 复制`Number`行
    7.  粘贴
        *   p(小写)     粘贴到下一行
        *   P(大写)     粘贴到上一行
    8.  查找
        * 命令模式使用 `/+内容` 可以搜索内容，`N`可以切换到下一个内容 
    9.  选择
        * 从当前视图选择内容


# Sublime编辑器常用插件
1.  emmet   HTML快速生成代码，以及提示
    1.  `! Tab` 快速生成H5基础代码
    2.  `#container>li.{$$$}` `Tab` 快速生成代码
2.  常用HTML5插件
    1.  安装 `Ctrl+Shift+p` 打开命令面板安装
    2.  Emmet   快速生成H5代码
    3.  JsFormat    JS代码格式化
    4.  SideBar Enhancements    增添左侧栏中的快捷功能
    5.  SublimeCodeIntel    智能提示工具
    6.  DocBlocker    智能注释工具 
    7.  Better Completion   Js、Jq、Bs代码快速自动补全
    8.  AutoPreFixer/Sublime Prefixr   CSS3私有前缀自动补全插件 需要Nodejs环境
    9.  ColorPicker     色彩选择器
    10. AutoFileName    文件路径自动补全
    11. Vintage     Vim编辑器
    12. ChineseLocalLizations   中文


# Sublime 常用快捷键
* `Ctrl+Shift+上`   与上面一行互换
* `Ctrl+Shift+下`   与下面一行呼唤
* `Ctrl+Enter`      光标之后插入行
* `Ctrl+Shift+Enter`光标上一行插入新行
* `Ctrl+Shift+K`    删除整行
* `Ctrl+Shift+D`    复制本行到下一行
* `Ctrl+M`          将光标移动到括号的开始或者结束
* `Ctrl+Shift+m`    选择光标所在括号的所有内容
* `Ctrl+/`          注释(如果选择多行，则注释所选择的所有行)  
